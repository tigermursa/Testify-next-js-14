const SSR = () => {
  return (
    <div className="mt-10 mb-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center mb-10">
        What is Server-Side Rendering (SSR) in Next.js?
      </h1>
      <p className="max-w-[900px] text-start text-xl mt-3">
        Server-Side Rendering (SSR) is a technique for rendering pages on the
        server at runtime, sending a fully rendered page to the clients
        browser.
        <br />
        Unlike SSG (Static Site Generation) where pages are pre-rendered at
        build time,
        <span className="font-bold text-blue-600">
          SSR generates the HTML content of a page dynamically on each request
          to the server
        </span>
        . This allows for content customization and real-time data fetching.
      </p>
      <h1 className="text-3xl font-semibold text-center mt-10 mb-10">
        Top Benefits:
      </h1>

      <ul className="flex flex-col max-w-[900px] gap-5">
        <li>
          <span className="font-bold text-blue-600">Dynamic Content:</span> SSR
          enables the server to render personalized content for each request,
          making it suitable for applications with frequently changing data or
          user-specific information.
        </li>
        <li>
          <span className="font-bold text-blue-600">SEO Optimization:</span>{" "}
          Search engines can crawl and index SSR pages more efficiently since
          they receive fully rendered HTML content, enhancing search visibility.
        </li>
        <li>
          <span className="font-bold text-blue-600">Enhanced Security:</span>{" "}
          With SSR, sensitive data and logic can be kept secure on the server,
          reducing the risk of exposing critical information to the client-side.
        </li>
      </ul>
      <h1 className="text-3xl font-semibold text-center mt-10 mb-10">
        Top Drawbacks:
      </h1>
      <ul className="flex flex-col max-w-[900px] gap-5">
        <li>
          <span className="font-bold text-blue-600">
            Slower Initial Load Time:
          </span>{" "}
          Since pages are generated on the server dynamically, the initial load
          time may be slower compared to static site generation.
        </li>
        <li>
          <span className="font-bold text-blue-600">
            Increased Server Load:
          </span>{" "}
          SSR can put more strain on the server, especially during periods of
          high traffic, as each request requires server-side processing.
        </li>
        <li>
          <span className="font-bold text-blue-600">
            Less Caching Benefits:
          </span>{" "}
          SSR pages are often less cacheable compared to static pages, leading
          to potentially higher server costs and slower performance.
        </li>
      </ul>
    </div>
  );
};

export default SSR;
