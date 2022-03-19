import { useState } from 'react'

interface InputObject {
  className: string;
  placeHolder: string;
  type: string;
  value: string;
}

export default function Form (props: { [key: string ]: InputObject}) {
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
      <button className='form-btn' type='submit'>Submit</button>
        {
          authFormTitle.endsWith("signup")
          ? <p>Already a member? <a href='/login'>Login</a></p>
          : <p>New to Ignite? <a href='/signup'>Signup</a></p>
        }
    </div>
  );
}
