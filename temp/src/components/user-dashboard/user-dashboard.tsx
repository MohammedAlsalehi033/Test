"use client";
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Activity, LogOut } from "react-feather";
import { useAuth } from "@/Hooks/useAuth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { getAllSocieties } from "@/actions/getSocietis";

interface Club {
  id: string;
  name: string;
  description: string;
  email: string;
  events: string[];
  img: string[];
  tags: string[];
  users: { [key: string]: string };
}

interface Event {
  id: number;
  name: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const user = useAuth(auth);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [societies, setSocieties] = useState<Club[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    if (user === undefined) {
      setLoading(true);
    } else if (user === null) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [user, router]);

  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        const fetchedSocieties = await getAllSocieties();
        // Ensure all societies have the required properties
        const validSocieties = fetchedSocieties.filter((society): society is Club => {
          return !!society.id && !!society.name && !!society.description && !!society.email &&
                 Array.isArray(society.events) && Array.isArray(society.img) &&
                 Array.isArray(society.tags) && typeof society.users === 'object';
        });
        setSocieties(validSocieties);
      } catch (error) {
        console.error("Error fetching societies:", error);
        setError("Failed to load societies. Please try again later.");
      }
    };
  
    fetchSocieties();
  }, []);
  

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  const filteredSocieties = societies.filter((society) =>
    society.name?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false
  );
  
  const upcomingEvents: Event[] = [
    { id: 1, name: "Event 1", date: "2024-09-10" },
    { id: 2, name: "Event 2", date: "2024-09-12" },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-blue-[75] to-blue-50 min-h-screen flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-blue-800">
          Welcome {user?.displayName}
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
        >
          <LogOut className="mr-2" /> Logout
        </button>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Manage your clubs, explore activities, and stay updated with upcoming events.
      </p>

      <div className="relative mb-6 w-full max-w-md">
        <Input
          placeholder="Search clubs and activities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-4 pl-10 border border-gray-300 w-full focus:outline-none focus:border-blue-500 shadow-lg"
        />
        <Search className="absolute top-2 left-3 text-gray-400" />
      </div>

      <Tabs defaultValue="registered-clubs" className="w-full max-w-4xl bg-white">
        <TabsList className="flex bg-blue-200">
          <TabsTrigger
            value="registered-clubs"
            className="flex-1 text-center p-3 font-semibold text-blue-700 border-b-2 border-blue-700 cursor-pointer hover:bg-blue-300"
          >
            <Activity className="inline mr-2" /> Registered Clubs
          </TabsTrigger>
          <TabsTrigger
            value="upcoming-events"
            className="flex-1 text-center p-3 font-semibold text-blue-700 border-b-2 border-transparent hover:border-blue-700 hover:bg-blue-300 cursor-pointer"
          >
            <Calendar className="inline mr-2" /> Upcoming Events
          </TabsTrigger>
        </TabsList>

        <TabsContent value="registered-clubs" className="p-6 bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-800">
            Your Registered Clubs
          </h2>
          <p className="text-gray-600 mb-4">
            These are the clubs you are a part of. Stay active and engaged!
          </p>
          {filteredSocieties.map((society) => (
            <div
              key={society.id}
              className="p-6 bg-white shadow-lg flex items-center justify-between"
            >
              <div>
                <p className="text-xl font-bold text-blue-800">{society.name}</p>
                <p className="text-sm text-gray-500">
                  Explore this society and its activities.
                </p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 shadow">
                View
              </button>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="upcoming-events" className="p-6 bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-800">
            Upcoming Events
          </h2>
          <p className="text-gray-600 mb-4">
            Don't miss out on these events happening soon!
          </p>
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="p-6 bg-white shadow-lg flex items-center justify-between"
            >
              <div>
                <p className="text-xl font-bold text-blue-800">{event.name}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 shadow">
                Join
              </button>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
