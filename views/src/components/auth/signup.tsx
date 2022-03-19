import Form from "./subcomponents/form";
import { signupFormData } from "./formData/auth.data";

export default function Signup() {

  return (
    <div className="signup">
      <Form {...signupFormData} />
    </div>
  );
}
