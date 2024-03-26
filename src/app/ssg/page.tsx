import Image from "next/image";
import ssgImg from "@/assets/how-we-make-ssg.png";
import renderings from "@/assets/all-the-renderings after build.png";
const SSG = () => {
  return (
    <div className="mt-10 mb-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center mb-10  ">
        What is Static Site Generation (SSG) in Next.js?
      </h1>
      <p className="max-w-[900px] text-start text-xl mt-3">
        Static Site Generation (SSG) is a technique for pre-rendering pages at
        build time, resulting in lightning-fast performance and SEO benefits.
        <br />
        Unlike SSR (server-side rendering) where the page is generated on the
        server for each request,
        <span className="font-bold text-blue-600">
          SSG pre-renders the HTML content of a page during the build process
        </span>
        . This means the content is already prepared and does not require any
        server-side processing when a user visits the page
      </p>
      <h1 className="text-3xl font-semibold text-center mt-10 mb-10 ">
        Top Benefits:
      </h1>

      <ul className="flex flex-col max-w-[900px] gap-5">
        <li>
          <span className="font-bold text-blue-600">
            Blazing Fast Performance:
          </span>{" "}
          Since SSG pre-renders HTML pages, users see content almost instantly,
          resulting in a super quick experience. This is important for SEO and
          keeping visitors engaged.
        </li>
        <li>
          <span className="font-bold text-blue-600">Cost-Effective:</span>{" "}
          Static sites are inexpensive to host because theres no need for
          server-side processing or databases. This makes SSG a good option for
          startups and small businesses with budget constraints.
        </li>
        <li>
          <span className="font-bold text-blue-600">High Scalability:</span> SSG
          sites can handle surges in traffic with ease. Because the pages are
          pre-built, theres less load on the server to handle requests.
        </li>
      </ul>
      <h1 className="text-3xl font-semibold text-center mt-10 mb-10 ">
        Top Drawbacks:
      </h1>
      <ul className="flex flex-col max-w-[900px] gap-5">
        <li>
          <span className="font-bold text-blue-600">
            Limited Real-Time Updates:
          </span>{" "}
          Making changes to SSG content requires a rebuild, which can cause a
          delay in seeing the updated content live. This is not ideal for sites
          with frequently changing content.
        </li>
        <li>
          <span className="font-bold text-blue-600">Build Time Overhead:</span>{" "}
          The build process can be time-consuming, especially for websites with
          a large number of pages. This can slow down development cycles.
        </li>
        <li>
          <span className="font-bold text-blue-600">
            Complex Authentication:
          </span>{" "}
          If your application requires complex authentication or user-specific
          logic, SSG might not be the best choice.
        </li>
      </ul>
      <h1 className="text-3xl font-semibold text-center mt-10 mb-10 ">
        That is how we can make a Dynamic page to SSG
      </h1>
      <Image src={ssgImg} alt="how we can make dynamic page SSG" />
      <h1 className="text-3xl font-semibold text-center mt-12 mb-10 ">
        After the build there are 3 types renderings showing
      </h1>
      <Image src={renderings} alt="after a npm run build in this page" />
    </div>
  );
};

export default SSG;
