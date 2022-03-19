import Form from "./subcomponents/form";
import { signupFormData } from "./formData/auth.data";
import { useContext } from "react";
import './styles/auth.css'
import NavAuth from "./subcomponents/auth.nav";
import SessionContext from '../../shared/context'

export default function Signup() {

  return (
    <main className="signup">
      <NavAuth />
      <Form {...signupFormData} />
    </main>
  );
}
