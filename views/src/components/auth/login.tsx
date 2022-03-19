import Form from "./subcomponents/form";
import { loginFormData } from "./formData/auth.data";
import './styles/auth.css'
import NavAuth from "./subcomponents/auth.nav";


export default function Login() {

  return (
    <main className="login">
      <NavAuth />
      <Form {...loginFormData} />
    </main>
  );
}
