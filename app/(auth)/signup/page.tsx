import LoginForm from "@/components/LoginForm";

export default function SignIn() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="p-4 border border-gray-300 rounded-lg hover:bg-gray-100 flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-semibold">Sign Up</h1>
        <LoginForm />
      </div>
    </div>
  );
}
