import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function Forgot() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white ">
      <div class="flex flex-col gap-4 rounded-box bg-base-200 p-6 max-w-md text-center">
        <h1 class="text-2xl font-bold"> Forgot password?</h1>

        <span>
          Remember your password?
          <Link to="/"> Login </Link>
        </span>

        <label class="form-control">
          <div class="label">
            <span class="label-text">Email</span>
          </div>

          <input type="email" class="input input-bordered" />
        </label>

        <button class="btn btn-primary">Reset password</button>
      </div>
    </div>
  );
}
