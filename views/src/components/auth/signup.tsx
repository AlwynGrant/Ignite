import Form from "./subcomponents/form";
import { signupFormData } from "./formData/auth.data";
import './styles/auth.css'
import NavAuth from "./subcomponents/auth.nav";

export default function Signup() {

  return (
    <main className="signup">
      <NavAuth />
      <Form {...signupFormData} />
    </main>
  );
}
