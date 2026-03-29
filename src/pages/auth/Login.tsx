
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Demo login simulation
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#00D4C8] rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-3xl">N</span>
            </div>
            <span className="font-bold text-4xl tracking-tight">NovaStore</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-zinc-600 mt-2">Sign in to your account to continue</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-zinc-600 mb-2">Email or Phone number</label>
              <div className="relative">
                <Mail className="absolute left-5 top-4 text-zinc-400" size={20} />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jebin@example.com"
                  className="w-full pl-14 pr-6 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#00D4C8] text-base"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-600 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-4 text-zinc-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-14 pr-14 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#00D4C8] text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-4 text-zinc-400 hover:text-zinc-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#00D4C8]" />
                <span className="text-sm text-zinc-600">Remember me</span>
              </label>
              <Link to="#" className="text-sm text-[#00D4C8] hover:underline">Forgot password?</Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#00D4C8] hover:bg-[#00B3A8] disabled:bg-zinc-300 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-colors"
            >
              {isLoading ? "Signing in..." : "Sign In"}
              {!isLoading && <ArrowRight size={22} />}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-6 text-zinc-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <button className="border border-zinc-200 hover:bg-zinc-50 py-4 rounded-2xl font-medium flex items-center justify-center gap-3 transition-colors">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" className="h-5" />
                Google
              </button>
              <button className="border border-zinc-200 hover:bg-zinc-50 py-4 rounded-2xl font-medium flex items-center justify-center gap-3 transition-colors">
                <span className="text-xl"></span>
                Apple
              </button>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-zinc-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#00D4C8] font-medium hover:underline">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;