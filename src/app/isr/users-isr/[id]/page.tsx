import User from "@/utils/Types/userType";
import React from "react";

interface SingleUserISRProps {
  params: {
    id: string;
  };
}

const SingleUserISR: React.FC<SingleUserISRProps> = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "force-cache",
  });
  const user: User = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {user && (
          <div>
            <div className="text-6xl  mb-4 flex justify-center items-center">
              👤
            </div>
            <div className="text-4xl  mb-4 flex justify-center items-center">
              {" "}
              User Details:
            </div>
            <div className="text-2xl text-blue-600 font-semibold">
              <strong>Name:</strong> {user.name}
            </div>
            <div className="flex flex-col space-y-1 mt-2">
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
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Address</h3>
              <p>
                {user.address.street}, {user.address.suite}
              </p>
              <p>
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <p>{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleUserISR;
