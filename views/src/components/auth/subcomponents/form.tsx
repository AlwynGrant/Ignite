import { useState, useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { signUp, logIn } from '../../../requests/session.request'
import SessionContext from '../../../shared/context'

interface InputObject {
  className: string;
  placeHolder: string;
  type: string;
  value: string;
}

export default function Form (props: { [key: string ]: InputObject}) {
  const sessionStore = window.sessionStorage
  const context = useContext(SessionContext)
  const navigate = useNavigate();
  const inputArr = Object.keys(props);
  const authFormTitle = window.location.href;

  const [email, setEmail] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const state: { [key: string ]: [string, React.Dispatch<React.SetStateAction<string>>]} = {
    "email": [email, setEmail],
    "firstName": [firstName, setFirstName],
    "lastName": [lastName, setLastName],
    "password": [password, setPassword],
    "confirmPassword": [confirmPassword, setConfirmPassword],
  }

    const handleSignup = async () => {
      const newUser = {
        email,
        firstName,
        lastName,
        password
      }
      await signUp(newUser)
        .then((data) => {
          context.firstName = data.user.firstName
          context.lastName = data.user.lastName
          context.id = data.user.id
          context.email = data.user.email
        })
          .then(() => {
          navigate('/featured')
        })
        .catch((e) => {
          console.log(e)
        })
    }

    const handleLogin = async () => {
      const user = {
        email,
        password
      }
      await logIn(user)
        .then((data) => {
          context.firstName = data.user.firstName
          context.lastName = data.user.lastName
          context.id = data.user.id
          context.email = data.user.email
        })
        .then(() => {
          navigate('/featured')
        })
        .catch((e) => {
          console.log(e)
        })
    }

    return (
    <div className='form-body'>
        {
          authFormTitle.endsWith("signup")
          ? <h3 className='form-title'>SIGNUP</h3>
          : <h3 className='form-title'>LOGIN</h3>
        }
      {
        inputArr.map((prop: string, i:number) => {
          return <input
                    key={i}
                    placeholder={props[prop].placeHolder}
                    className={props[prop].className}
                    type={props[prop].type}
                    value={state[props[prop].value][0]}
                    onChange={((e) => state[props[prop].value][1](e.target.value))}
                    ></input>
        })
      }
      <button
        className='form-btn'
        type='submit'
        onClick={() =>  authFormTitle.endsWith("signup") ? handleSignup() : handleLogin()}
        >Submit</button>
        {
          authFormTitle.endsWith("signup")
          ? <p>Already a member? <a href='/login'>Login</a></p>
          : <p>New to Ignite? <a href='/signup'>Signup</a></p>
        }
    </div>
  );
}
