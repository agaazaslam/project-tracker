import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white ">
      <div class="flex flex-col gap-4 rounded-box bg-base-200 p-6 max-w-lg min-w-md">
        <h1 class="text-3xl font-bold self-center">Create an Account </h1>

        <span class="self-center">
          Already have an account?
          <a class="link link-secondary"> Login </a>
        </span>

        <a class="btn btn-neutral">
          <i class="fa-brands fa-google text-primary"></i>
          Create with Google
        </a>

        <div class="divider">OR</div>
        <div className="flex flex-col justiy-center gap-3 ">
          {" "}
          <label class="form-control flex flex-col">
            <div class="label">
              <span class="label-text">Email</span>
            </div>

            <input class="input input-bordered w-full" />
          </label>
          <label class="form-control flex flex-col">
            <div class="label">
              <span class="label-text">Password</span>
            </div>

            <input type="password" class="input input-bordered w-full" />
            <a class="label-text link link-accent">Forgot password?</a>
          </label>
          <div class="form-control">
            <label class="cursor-pointer label self-start gap-2">
              <input type="checkbox" class="checkbox" />
              <span class="label-text">Remember me</span>
            </label>
          </div>
        </div>
        <button class="btn btn-primary">Create </button>
      </div>
    </div>
  );
}
