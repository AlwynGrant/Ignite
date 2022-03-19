import Form from "./subcomponents/form";
import { loginFormData } from "./formData/auth.data";

export default function Login() {

  return (
    <div className="login">
      <Form {...loginFormData} />
    </div>
  );
}
