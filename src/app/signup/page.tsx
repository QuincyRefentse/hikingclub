import AuthForm from '@/components/AuthForm';

export default function SignupPage() {
  return (
    <div className="py-8 flex items-center justify-center min-h-[calc(100vh-200px-6rem)]">
      <AuthForm mode="signup" />
    </div>
  );
}
