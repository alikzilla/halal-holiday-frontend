"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Title2 } from "@/components/common";
import { Button, Checkbox, Input } from "@/components/ui";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start md:gap-[130px] md:flex-row">
      {/* Left side - Image */}
      <div className="md:h-screen bg-gray-100 flex items-start justify-start">
        <Image
          src={"/assets/backgrounds/login.png"}
          width={100000}
          height={100000}
          alt="login"
          className="w-full h-full"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-[300px] md:w-[500px] flex flex-col items-center justify-center">
          {/* Header */}
          <div className="w-full mb-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#222] mb-2">
              Welcome back
            </h1>
            <Title2 className="text-[#5A5A5A]">
              Welcome back! Please enter your details
            </Title2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <Input
              label="Email or phone number"
              value={email}
              onChange={setEmail}
              placeholder="Enter your email or phone number"
              type="email"
              required
            />

            <Input
              label="Password"
              value={password}
              onChange={setPassword}
              placeholder="Enter your password"
              type="password"
              required
            />

            <div className="w-full flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <Checkbox
                  checked={rememberMe}
                  onCheckedChange={(checked: boolean) => setRememberMe(checked)}
                />
                <Title2 className="text-[#5A5A5A]">Remember me</Title2>
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-[#EEC470] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button type="primary" className="w-full py-3">
              Log in
            </Button>

            {/* Divider with "or" */}
            <div className="w-full relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#F2F2F2]" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-[#5A5A5A]">or</span>
              </div>
            </div>

            {/* Social login buttons */}
            <div className="w-full space-y-3">
              <Button
                type="secondary"
                className="w-full flex items-center justify-center gap-2"
              >
                <Image
                  src="/assets/icons/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Continue with Google
              </Button>
              <Button
                type="secondary"
                className="w-full flex items-center justify-center gap-2"
              >
                <Image
                  src="/assets/icons/apple.svg"
                  alt="Apple"
                  width={20}
                  height={20}
                />
                Continue with Apple
              </Button>
              <Button
                type="secondary"
                className="w-full flex items-center justify-center gap-2"
              >
                <Image
                  src="/assets/icons/facebook-background.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
                Continue with Facebook
              </Button>
            </div>

            {/* Sign up link */}
            <div className="w-full text-center mt-6">
              <Title2 className="text-[#5A5A5A]">
                Don&apos;t have you an account?{" "}
                <Link
                  href="/signup"
                  className="text-[#EEC470] font-medium hover:underline"
                >
                  Sign up
                </Link>
              </Title2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
