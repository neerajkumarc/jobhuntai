
import React from "react";
import { doSocialLogin } from "@/app/actions";

const LoginForm = () => {
  return (
    <form className="flex justify-center items-center gap-4 py-4" action={doSocialLogin}>
      <button
        className="px-4 py-2 rounded-lg text-base bg-black text-white border border-white"
        type="submit"
        name="action"
        value="google"
      >
        Sign up with Google
      </button>
    </form>
  );
};

export default LoginForm;
