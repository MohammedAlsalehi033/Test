"use client";

import { useState } from "react";
import { Stepper, Step } from "@/components/Stepper";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen text-black flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Login</h1>

      <Stepper currentStep={step}>
        <Step title="Select Role">
          <div className="flex flex-col space-y-4">
            <Button>Login</Button>
          </div>
        </Step>

        <Step title="Login as with google">
          <form className="space-y-4">
            <Button>Login with Google</Button>
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
