import { LoginForm } from "@/components/auth/login-form";
import { AuthWrapper } from "@/components/wrappers/auth-wrapper";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <AuthWrapper headerLabel="Login into Account!">
        <LoginForm />
      </AuthWrapper>
    </div>
  );
};

export default LoginPage;
