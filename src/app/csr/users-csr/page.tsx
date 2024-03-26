"use client";

import User from "@/utils/Types/userType";
import Link from "next/link";

import { useEffect, useState } from "react";

const UsingISR = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const userData: User[] = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-10 mb-20">
      {/* Grid container with 4 columns */}
      {users.map((user) => (
        <div
          key={user.id}
          className="border text-gray-400 hover:text-white border-gray-400 hover:border-white cursor-pointer  shadow-md rounded-md p-4 flex flex-col items-start justify-between"
        >
          <Link href={`/ssg/users-ssg/${user.id}`}>
            <div className="text-blue-600 font-semibold">
              <strong>Name:</strong> {user.name}
            </div>
            <div className="flex flex-col space-y-1 ">
              {/* Using flexbox for content */}
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UsingISR;
