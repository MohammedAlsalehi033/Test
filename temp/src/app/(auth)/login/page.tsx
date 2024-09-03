"use client";

import { useEffect, useState } from "react";
import { Stepper, Step } from "@/components/Stepper";
import { Button } from "@/components/ui/button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig"; // Assuming firebaseConfig exports the initialized Firebase auth instance
import { useRouter } from "next/navigation";
import { useAuth } from "@/Hooks/useAuth";
import { initializeUser } from "@/actions/initalizeUser";
import { getUserById } from "@/actions/getUserByID";

export default function Login() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const user = useAuth(auth);

  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
      if (user) {
        if (user?.email) {
          getUserById(user.email).then((userData) => {
            if (userData) {
              router.push("/user-dashboard");
            } else {
              router.push("/admin-dashboard");
            }
          });
        }
      }
    }
  }, [user, router]);

  const handleUserCreation = async (type: string, user: any) => {
    try {
      await initializeUser(type, user.email);
      if (type === "admin") {
        router.push("/admin-dashboard");
      } else {
        router.push("/user-dashboard");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const type = step === 1 ? "admin" : "user";
      await handleUserCreation(type, user);
    } catch (error) {
      console.error("Error during Google login:", error);
      setLoading(false); // Stop loading if there's an error
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        {/* Spinner or loading indicator */}
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-black flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Login</h1>

      <Stepper currentStep={step}>
        <Step title="Select Role">
          <div className="flex flex-col space-y-4">
            <Button onClick={() => setStep(1)}>Login as Admin</Button>
            <Button onClick={() => setStep(1)}>Login as User</Button>
          </div>
        </Step>

        <Step title="Login with Google">
          <div className="gap-3 flex">
            <Button onClick={handleGoogleLogin}>Login with Google</Button>

            <Button
              onClick={() => setStep(0)}
              className="bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </Button>
          </div>
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
