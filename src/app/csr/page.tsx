import React from "react";

const CSR = () => {
  return (
    <div className="mt-10 mb-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center mb-10">
        What is Client-Side Rendering (CSR) in Next.js?
      </h1>
      <p className="max-w-[900px] text-start text-xl mt-3">
        Client-Side Rendering (CSR) is a technique where the rendering of web
        pages occurs on the clients browser using JavaScript.
        <br />
        In Next.js, pages rendered via CSR are initially empty HTML templates
        that are populated with content after the page is loaded and JavaScript
        is executed on the client-side.
        <span className="font-bold text-blue-600">
          CSR allows for dynamic content updates without refreshing the entire
          page, providing a more interactive user experience.
        </span>
      </p>
      <h1 className="text-3xl font-semibold text-center mt-10 mb-10">
        Top Benefits:
      </h1>

      <ul className="flex flex-col max-w-[900px] gap-5">
        <li>
          <span className="font-bold text-blue-600">
            Rich User Interactions:
          </span>{" "}
          CSR enables dynamic content updates and interactivity without
          requiring full page reloads, resulting in smoother and more engaging
          user experiences.
        </li>
        <li>
          <span className="font-bold text-blue-600">Reduced Server Load:</span>{" "}
          Since rendering occurs on the client-side, CSR reduces the workload on
          the server, leading to improved server performance and scalability.
        </li>
        <li>
          <span className="font-bold text-blue-600">
            Faster Initial Page Load:
          </span>{" "}
          Initial page loads can be faster with CSR as only essential HTML, CSS,
          and JavaScript are initially sent to the client, minimizing server
          processing time.
        </li>
      </ul>
      <h1 className="text-3xl font-semibold text-center mt-10 mb-10">
        Top Drawbacks:
      </h1>
      <ul className="flex flex-col max-w-[900px] gap-5">
        <li>
          <span className="font-bold text-blue-600">SEO Challenges:</span>{" "}
          Search engine optimization (SEO) can be challenging with CSR since
          search engine crawlers may not effectively index dynamically generated
          content.
        </li>
        <li>
          <span className="font-bold text-blue-600">
            Client-Side Rendering Overhead:
          </span>{" "}
          CSR relies on client-side JavaScript execution, which can result in
          slower initial page rendering, especially on low-powered devices or
          slow network connections.
        </li>
        <li>
          <span className="font-bold text-blue-600">
            Accessibility Concerns:
          </span>{" "}
          Ensuring accessibility can be more challenging with CSR, as dynamic
          content updates may require careful management of focus and screen
          reader compatibility.
        </li>
      </ul>
    </div>
  );
};

export default CSR;
