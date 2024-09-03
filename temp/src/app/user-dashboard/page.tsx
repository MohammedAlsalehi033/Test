"use client";
import Dashboard from "@/components/user-dashboard/user-dashboard";
import React from "react";
import { useAuth } from "@/Hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";

type Props = {
  // Define props here
};

export default function page({}: Props) {
  const user = useAuth(auth); // Use custom useAuth hook
  const router = useRouter();
  useEffect(() => {
    if (user === undefined) {
      router.push("/auth/login"); // Redirect to login if user is not determined
    }
  }, [user, router]);

  return (
    <div>
      <Dashboard />
    </div>
  );
}
