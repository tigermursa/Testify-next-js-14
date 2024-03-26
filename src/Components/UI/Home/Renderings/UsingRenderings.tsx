import Link from "next/link";

const UsingRenderings = () => {
  return (
    <div className="mt-36 mb-28">
      <h1 className="text-center text-4xl font-bold">
        Using NEXT JS Renderings
      </h1>
      <div className="grid grid-cols-1 gap-4  justify-items-center mt-10 mb-10">
        <Link href={"/ssg/users-ssg"}>
          <button className="btn">Users Card using SSG</button>
        </Link>
        <Link href={"/ssr"}>
          <button className="btn">Server-Side Rendering (SSR)</button>
        </Link>
        <Link href={"isr"}>
          <button className="btn">Incremental Static Regeneration (ISR)</button>
        </Link>
        <Link href={"csr"}>
          <button className="btn">Client Site Rendering (CSR)</button>
        </Link>
      </div>
    </div>
  );
};

export default UsingRenderings;
