"use client";

import { signUpSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Eye, EyeOff, Lock, LockKeyholeIcon, Mail, User } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import Loader from "./ui/Loader";
import Link from "next/link";
import Input from "./Input";
import Image from "next/image";
import image2 from "@/public/assets/real-estate-img3.jpg"
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { api } from "@/lib/api";
import GoogleAppleButton from "./ui/GoogleAppleButton";
import { useAuth } from "@/context/AuthContext";
import PageLoader from "./ui/PageLoader";

type FormValues = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const {fetchUser} = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, dirtyFields },
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange", // live validation
  });

  const onSubmit = async (data: FormValues) => {
    setError(null);

    try {
      const res = await api.post(
        `/auth/register`,
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      );
      router.push("/");
      await fetchUser();
      toast.success(res.data.message || "Account created successfully");
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
          <h2 className="text-2xl bg-linear-to-r from-orange-400 text-transparent to-green-500 bg-clip-text text-center flex items-center justify-center h-full">
            Sign Up, Browse, and Purchase Various Listings</h2>
        </div>
        <div className="w-full md:w-1/3 bg-neutral-900/90 text-white backdrop-blur-md p-8">
        {/* Header */}
        <div className='"mb-6 text-center'>
          <h1 className="text-2xl font-bold text-green-300">
            Create your account
          </h1>
          <p className=" mt-1">Join us and get started in minutes</p>
        </div>
        <GoogleAppleButton />

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t" />
          <span className="mx-3">OR</span>
          <div className="grow border-t" />
        </div>

        <p className="text-red-400 font-medium m-1">{error}</p>
        {/* Email & Password Section*/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div className="relative">
            {/* Name */}
            <Input
              icon={User}
              type="name"
              placeholder="John Doe"
              {...register("name")}
              // className={`outline-none w-full rounded-lg border px-4 py-2 pr-10 ${errors.name ? "border-red-500" : "border-stone-200"}
              //             ${dirtyFields.name && !errors.name ? "border-green-500" : ""}
              //             `}
            />

            {/* Success icon */}
            {dirtyFields.name && !errors.name && (
              <CheckCircle className="text-green-500 absolute -right-6 top-3 h-5 w-5" />
            )}

            {errors.name && dirtyFields.name && (
              <p className="text-red-600 font-medium mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="relative">
            {/* Email */}
            <Input
              icon={Mail}
              type="email"
              placeholder="example@gmail.com"
              {...register("email")}
              // className={`outline-none w-full rounded-lg border px-4 py-2 pr-10 ${errors.email ? "border-red-500" : "border-stone-200"}
              //             ${dirtyFields.email && !errors.email ? "border-green-500" : ""}
              //             `}
            />

            {/* Success icon */}
            {dirtyFields.email && !errors.email && (
              <CheckCircle className="text-green-500 absolute -right-6 top-3 h-5 w-5" />
            )}

            {/* Error */}
            {errors.email && dirtyFields.email && (
              <p className="text-red-600 font-medium mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <Input
              icon={Lock}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              // className={`outline-none w-full rounded-lg border px-4 py-2 pr-10 ${errors.password ? "border-red-500" : "border-stone-200"}
              // ${dirtyFields.password && !errors.password ? "border-green-500" : ""}
              // `}
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

          {/* Confirm Password */}
          <div className="relative">
            <Input
              icon={LockKeyholeIcon}
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              // className={`outline-none w-full rounded-lg px-4 py-2 pr-10 ${errors.confirmPassword ? "border-red-500" : ""}
              //           ${dirtyFields.confirmPassword && !errors.confirmPassword ? "border-green-500" : ""}
              //           `}
            />

            {dirtyFields.confirmPassword && !errors.confirmPassword && (
              <CheckCircle className="text-green-500 absolute -right-6 top-3 h-5 w-5" />
            )}
            {showConfirmPassword ? (
              <EyeOff
                onClick={() => setShowConfirmPassword(false)}
                className="absolute right-3 top-3 h-4 w-4 cursor-pointer"
              />
            ) : (
              <Eye
                onClick={() => setShowConfirmPassword(true)}
                className="absolute right-3 top-3 h-4 w-4 cursor-pointer"
              />
            )}

            {errors.confirmPassword && dirtyFields.confirmPassword && (
              <p className="text-red-400 font-medium mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full bg-black text-white rounded-lg py-3 font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-30"
          >
            {isSubmitting ? (
              <Loader text="Creating account..." />
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Footer for SignUp */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="mt-2" />
          <p className="text-center mt-3">
            By signing up, you agree to our Terms & Privacy Policy.
          </p>
        </div>
        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-medium text-green-300 hover:border-b-2 border-green-300">
            Sign In
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
