"use client";
import { useState } from "react";
import { Stepper, Step } from "@/components/Stepper";

export default function Login() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Login</h1>

      <Stepper currentStep={step}>
        <Step title="Select Role">
          <div className="flex flex-col space-y-4">
            <button className="btn btn-primary" onClick={() => setStep(1)}>
              Login as Organization
            </button>
            <button className="btn btn-secondary" onClick={() => setStep(1)}>
              Login as Student
            </button>
          </div>
        </Step>

        <Step title="Login as with google">
          <form className="space-y-4">
            <button className="btn btn-primary w-full" type="submit">
              Login
            </button>
          </form>
        </Step>
      </Stepper>

      {step > 0 && (
        <button
          className="mt-4 text-gray-400 hover:underline"
          onClick={() => setStep(0)}
        >
          Go Back
        </button>
      )}
    </div>
  );
}
