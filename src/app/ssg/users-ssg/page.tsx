import User from "@/utils/Types/userType";

const UsingSSG = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });
  const users: User[] = await res.json();

  return (
    <div className="grid grid-cols-4 gap-4 mt-10 mb-20">
      {" "}
      {/* Grid container with 4 columns */}
      {users.map((user) => (
        <div
          key={user.id}
          className="border text-gray-400 hover:text-white border-gray-400 hover:border-white cursor-pointer  shadow-md rounded-md p-4 flex flex-col items-start justify-between"
        >
          <div className="text-blue-600 font-semibold">
            <strong>Name:</strong> {user.name}
          </div>
          <div className="flex flex-col space-y-1 ">
            {" "}
            {/* Use flexbox for content */}
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
      ))}
    </div>
  );
};

export default UsingSSG;
