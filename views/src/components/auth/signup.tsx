import Form from "./subcomponents/form";
import { signupFormData } from "./formData/auth.data";
import { useContext, useState } from "react";
import './styles/auth.css'
import NavAuth from "./subcomponents/auth.nav";
import BackBtn from "../home/subcomponents/back-btn";

export default function Signup() {

  return (
    <main className="signup">
      <NavAuth />
      <Form {...signupFormData} />
    </main>
  );
}
