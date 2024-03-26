import User from "@/utils/Types/userType";
import Link from "next/link";

const UsingSSR = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

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

export default UsingSSR;
