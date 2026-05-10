export const dynamic = 'force-dynamic';
import LoginForm from '@/component/login-form';
import GoogleSignInButton from '@/component/google-signin-button';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl text-slate-900 text-center mb-8">Login</h1>
        <LoginForm>
          <GoogleSignInButton />
        </LoginForm>
      </div>
    </div>
  );
}