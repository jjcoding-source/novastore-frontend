
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, ArrowRight, Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1500);
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
          <h1 className="text-3xl font-semibold tracking-tight">Create your account</h1>
          <p className="text-zinc-600 mt-2">Join NovaStore and start shopping today</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-600 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-5 top-4 text-zinc-400" size={20} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jebin Joseph"
                  className="w-full pl-14 pr-6 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#00D4C8]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-4 text-zinc-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jebin@example.com"
                    className="w-full pl-14 pr-6 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#00D4C8]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-5 top-4 text-zinc-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full pl-14 pr-6 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#00D4C8]"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-600 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-4 text-zinc-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full pl-14 pr-14 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#00D4C8]"
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

            <div>
              <label className="block text-sm font-medium text-zinc-600 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-6 py-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-[#00D4C8]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#00D4C8] hover:bg-[#00B3A8] disabled:bg-zinc-300 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-colors mt-4"
            >
              {isLoading ? "Creating account..." : "Create Account"}
              {!isLoading && <ArrowRight size={22} />}
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-zinc-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#00D4C8] font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;