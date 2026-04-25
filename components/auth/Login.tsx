"use client";

import { signInSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Eye, EyeOff, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import Loader from "@/components/ui/Loader";
import Link from "next/link";
import Input from "@/components/Input";
import Image from "next/image";
import image2 from "@/public/assets/lotus-design-n-print-wRzBarqn3hs-unsplash.jpg";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { api } from "@/lib/api";
import GoogleAppleButton from "@/components/ui/GoogleAppleButton";
import { useAuth } from "@/context/AuthContext";

type FormValues = z.infer<typeof signInSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { fetchUser } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, dirtyFields },
  } = useForm<FormValues>({
    resolver: zodResolver(signInSchema),
    mode: "onChange", // live validation
  });

  const onSubmit = async (data: FormValues) => {
    setError(null);
    try {
      const res = await api.post(`/auth/login`, {
        email: data.email,
        password: data.password,
      });

      const redirectPath = searchParams?.get("redirect") || "/";
      router.push(redirectPath);
      await fetchUser();
      toast.success(res.data.message || "Login successful");
      reset();
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        setError(error.response.data.message || "Something went wrong");
      } else {
        setError("Network error. Try again.");
      }
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full flex justify-center overflow-hidden rounded-md">
        <div className="hidden md:block bg-gray-900/50 text-white p-4 w-1/3">
          <h2 className="text-3xl bg-linear-to-r from-orange-600 text-transparent to-green-700 bg-clip-text flex items-center justify-center h-full">
            Login and Browse Various Listings
          </h2>
        </div>
        {/* <Image src={image2} width={400} height={500} alt="Login image" className="object-cover w-50 md:w-full" /> */}
        <div className="w-full md:w-1/3 bg-neutral-900/90 text-white backdrop-blur-md p-8">
          {/* Header */}
          <div className='"mb-6 text-center'>
            <h1 className="text-2xl font-bold">Login</h1>
            <p className=" mt-1">Sign in to continue to your account</p>
          </div>
          <GoogleAppleButton />
          
          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="grow border-t" />
            <span className="mx-3 ">OR</span>
            <div className="grow border-t" />
          </div>
          <p className="text-red-400 font-medium m-1">{error}</p>
          {/* Email & Password Section*/}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative">
              {/* Email */}
              <label htmlFor="email" className="font-bold">Email</label>
              <Input
                icon={Mail}
                id="email"
                type="email"
                placeholder="example@gmail.com"
                {...register("email")}
                // className={`outline-none w-full rounded-lg border px-4 py-2 pr-10 ${errors.email ? "border-red-500" : "border-stone-200"}
                // ${dirtyFields.email && !errors.email ? "border-green-500" : ""}
                // `}
              />

              {/* Success icon */}
              {dirtyFields.email && !errors.email && (
                <CheckCircle className="text-green-500 absolute -right-6 top-3 h-5 w-5" />
              )}

              {/* Error */}
              {errors.email && dirtyFields.email && (
                <p className="text-red-400 font-medium mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="font-bold">Password</label>
              <Input
                icon={Lock}
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                className={`outline-none w-full rounded-lg px-4 py-2 pr-10 ${errors.password ? "border-red-500" : "border-stone-200"}
              ${dirtyFields.password && !errors.password ? "border-green-500" : ""}
              `}
              />

              {dirtyFields.password && !errors.password && (
                <CheckCircle className="text-green-500 absolute -right-6 top-3 h-5 w-5" />
              )}
              {showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(false)}
                  className="absolute right-3 top-3 h-4 w-4 cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(true)}
                  className="absolute right-3 top-3 h-4 w-4 cursor-pointer"
                />
              )}

              {errors.password && dirtyFields.password && (
                <p className="text-red-400 font-medium mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Link
              href="/forgot-password"
              className="mt-4 hover:border-b-2 transition"
            >
              Forgot Password?
            </Link>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full bg-black mt-4 text-white rounded-lg py-3 font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-30"
            >
              {isSubmitting ? <Loader text="Signing you in..." /> : "Sign in"}
            </button>
          </form>

          {/* Footer for Login */}
          <p className="text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-green-300 hover:border-b-2 border-green-300"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { signInSchema } from "@/lib/validation/auth";
// import { z } from "zod";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";
// import { toast } from "sonner";
// import { Eye, EyeOff } from "lucide-react";
// import Link from "next/link";
// import Loader from "./ui/Loader";
// import PageLoader from "./ui/PageLoader";
// import GoogleAppleButton from "./ui/GoogleAppleButton";

// type FormValues = z.infer<typeof signInSchema>;

// export default function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [redirecting, setRedirecting] = useState(false);

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { login } = useAuth();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<FormValues>({
//     resolver: zodResolver(signInSchema),
//   });

//   const onSubmit = async (data: FormValues) => {
//     try {
//       setRedirecting(true);

//       await login(data);

//       const redirectTo = searchParams.get("redirect") || "/";
//       router.push(redirectTo);

//       toast.success("Login successful");
//     } catch (error: any) {
//       toast.error(error.message || "Invalid email or password");
//     } finally {
//       setRedirecting(false);
//     }
//   };

//   if (redirecting) {
//     return <PageLoader text="Redirecting..." />;
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

//         {/* Header */}
//         <div className="mb-6 text-center">
//           <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
//           <p className=" mt-1">
//             Sign in to continue to your account
//           </p>
//         </div>

//         <GoogleAppleButton />

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-200" />
//           <span className="mx-3 text-gray-400">OR</span>
//           <div className="flex-grow border-t border-gray-200" />
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               {...register("email")}
//               className="w-full rounded-lg border border-stone-200 px-4 py-2"
//             />
//             {errors.email && (
//               <p className="text-red-600 font-medium">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               {...register("password")}
//               className="w-full rounded-lg border border-stone-200 px-4 py-2"
//             />

//             {showPassword ? (
//               <EyeOff
//                 onClick={() => setShowPassword(false)}
//                 className="absolute right-3 top-3 h-4 w-4 cursor-pointer"
//               />
//             ) : (
//               <Eye
//                 onClick={() => setShowPassword(true)}
//                 className="absolute right-3 top-3 h-4 w-4 cursor-pointer"
//               />
//             )}

//             {errors.password && (
//               <p className="text-red-600 font-medium">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-black text-white rounded-lg py-3 font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-50"
//           >
//             {isSubmitting ? (
//               <Loader text="Signing you in..." />
//             ) : (
//               "Sign in"
//             )}
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-gray-500 mt-6">
//           Don’t have an account?{" "}
//           <Link href="/register" className="font-medium text-black">
//             Sign up
//           </Link>
//         </p>

//         <Link
//           href="/forgot-password"
//           className="flex justify-center mt-4 text-gray-600"
//         >
//           Forgot Password?
//         </Link>
//       </div>
//     </div>
//   );
// }
