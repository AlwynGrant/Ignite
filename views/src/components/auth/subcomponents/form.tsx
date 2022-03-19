import { useState } from 'react'

interface InputObject {
  className: string;
  placeHolder: string;
  type: string;
  value: string;
}

export default function Form (props: { [key: string ]: InputObject}) {
  const inputArr = Object.keys(props)

  const [email, setEmail] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const state: { [key: string ]: [string, React.Dispatch<React.SetStateAction<string>>]} = {
      "email": [email, setEmail],
      "firstName": [firstName, setFirstName],
      "lastName": [lastName, setLastName],
      "password": [password, setPassword],
    }

    return (
    <div>
      {
        inputArr.map((prop: string, i:number,) => {
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
      <button type='submit'>Submit</button>
    </div>
  );
}
