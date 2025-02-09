import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dots from '../assets/image/dots.png';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);

    // Send a POST request to the login endpoint
    try {
      const response = await fetch('http://localhost:5002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Handle successful login (e.g., navigate to dashboard)
        navigate('/dashboard');
      } else {
        // Handle login error (e.g., show error message)
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400">
      <div className="flex flex-col p-8 w-[440px] bg-white rounded-[24px] shadow-lg">
        <div className="flex flex-col gap-1 mb-6">
          <img src={dots} alt="logo" className="w-6 h-6 mb-2" />
          <h1 className="text-2xl font-bold text-purple-900">Welcome Back</h1>
          <p className="text-sm text-purple-900">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-500 hover:underline">
              Create an Account
            </Link>
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-purple-900">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="@johndoe@gmail.com"
              className="p-3 bg-gray-50 rounded-lg placeholder-gray-400 text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-purple-900">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Toggle between text and password
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="must contain at least 8 characters"
                className="p-3 w-full bg-gray-50 rounded-lg placeholder-gray-400 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#1A1A1A"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#1A1A1A"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 py-3 px-6 w-full bg-purple-900 text-white rounded-full hover:bg-purple-800 transition-colors text-sm font-medium"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;