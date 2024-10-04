import Link from "next/link";
import LoginForm from "../components/Form/LoginForm";

const LoginPage = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-center text-2xl font-bold text-white mb-6">Log in to Your Account</h2>

        <LoginForm/>

        <div>
        
        <div className="my-6 text-center">
          <p className="text-gray-400 mb-2">or</p>
          <button className="w-full py-2 px-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300">
            Continue with Google
          </button>
        </div>

        <div className="my-6 text-center">
          <button className="w-full py-2 px-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300">
            Continue with Github
          </button>
        </div>
        
        </div>

          {/* Create Account */}
          <div className="text-center">
            <p className="text-gray-400">
              Don’t have an account? 
              <Link href="/signup" className="text-blue-500 hover:underline">
                Create Now
              </Link>
            </p>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;
