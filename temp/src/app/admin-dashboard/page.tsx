"use client";
import Dashboard from "@/components/admin-dashboard/admin-dashboard";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";

type Props = {};

const Page = (props: Props) => {
  const user = useAuth(auth);
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    if (user === undefined) {
      setLoading(true); // User is still being fetched
    } else if (user === null) {
    } else {
      setLoading(false); // Stop loading when user is fetched
    }
  }, [user, router]);

  // Show a loading screen while loading is true
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="loader">Loading...</div>{" "}
        {/* Replace with a loading spinner or component */}
      </div>
    );
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Page;
