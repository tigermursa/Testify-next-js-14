import Image from "next/image";
import Link from "next/link";

const UsingRenderings = () => {
  return (
    <div className="mt-36 mb-28">
      <h1 className="text-center text-4xl font-bold">
        Using NEXT JS Renderings
      </h1>
      <div className="grid grid-cols-1 gap-4  justify-items-center mt-10 mb-10">
        <Link href={"/ssg/users-ssg"}>
          <button className="btn">Users Card using (SSG)</button>
        </Link>
        <Link href={"/ssr/users-ssr"}>
          <button className="btn">Users Card using (SSR)</button>
        </Link>
        <Link href={"/isr/users-isr"}>
          <button className="btn">Users Card using (ISR)</button>
        </Link>
        <Link href={"/csr/users-csr"}>
          <button className="btn">Users Card using (CSR)</button>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-center mt-10 mb-10 ">
          How we can use client components into server components
        </h1>
        <Image
          src={
            "https://miro.medium.com/v2/resize:fit:1400/0*M2HXYaFMhZMtTfNK.png"
          }
          alt="after a npm run build in this page"
          width={720}
          height={480}
          className=""
        />
      </div>
    </div>
  );
};

export default UsingRenderings;
