import Link from "next/link";

const Navbar = () => {
  // Define array of route paths
  const routes = [
    { path: "/", label: "Home" },
    { path: "/why", label: "Why Next-js?" },
    { path: "/history", label: "History" },
    { path: "/ssg", label: "SSG" },
    { path: "/ssr", label: "SSR" },
    { path: "/isr", label: "ISR" },
    { path: "/csr", label: "CSR" },
  ];

  return (
    <nav className="bg-black flex justify-between items-center h-[50px] px-5 text-gray-300 border-b ">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold hover:text-white cursor-pointer">
          Testify🎨
        </h1>
      </Link>
      <ul className="flex gap-4 font-semibold">
        {routes.map((route, index) => (
          <div key={index}>
            <Link href={route.path}>
              <li>
                <p className="hover:text-white">{route.label}</p>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
