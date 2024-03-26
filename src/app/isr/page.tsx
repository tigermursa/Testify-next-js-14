const ISR = () => {
  return (
    <div className="mt-10 mb-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center mb-10">
        What is Incremental Static Regeneration (ISR) in Next.js?
      </h1>
      <p className="max-w-[900px] text-start text-xl mt-3">
        Incremental Static Regeneration (ISR) is a hybrid approach that combines
        the benefits of both Static Site Generation (SSG) and Server-Side
        Rendering (SSR) in Next.js.
        <br />
        Unlike traditional SSG where pages are pre-rendered at build time, and
        SSR where pages are rendered on each request, ISR allows you to update
        static content at runtime without rebuilding the entire site.
        <span className="font-bold text-blue-600">
          ISR allows Next.js to update static pages in the background as traffic
          flows in, ensuring that users always see the most up-to-date content.
        </span>
      </p>
      <h1 className="text-3xl font-semibold text-center mt-10 mb-10">
        Top Benefits:
      </h1>

      <ul className="flex flex-col max-w-[900px] gap-5">
        <li>
          <span className="font-bold text-blue-600">Near-Instant Updates:</span>{" "}
          With ISR, static pages can be updated without requiring a full
          rebuild, leading to near-instantaneous updates for users as new data
          becomes available.
        </li>
        <li>
          <span className="font-bold text-blue-600">
            Seamless User Experience:
          </span>{" "}
          Users experience minimal downtime or interruptions since ISR allows
          for smooth transitions between old and updated content.
        </li>
        <li>
          <span className="font-bold text-blue-600">Reduced Server Load:</span>{" "}
          By updating pages incrementally, ISR helps distribute server load more
          evenly, ensuring consistent performance even during high traffic
          periods.
        </li>
      </ul>
      <h1 className="text-3xl font-semibold text-center mt-10 mb-10">
        Top Drawbacks:
      </h1>
      <ul className="flex flex-col max-w-[900px] gap-5">
        <li>
          <span className="font-bold text-blue-600">Complexity:</span>{" "}
          Implementing ISR requires careful consideration of data dependencies
          and caching strategies, which can add complexity to development and
          maintenance.
        </li>
        <li>
          <span className="font-bold text-blue-600">Cache Invalidation:</span>{" "}
          Managing cache invalidation can be challenging, especially for sites
          with frequently changing data or personalized content.
        </li>
        <li>
          <span className="font-bold text-blue-600">
            Dependency on Data Sources:
          </span>{" "}
          ISR performance relies on efficient data fetching from external
          sources. Slow data fetching can impact the responsiveness of static
          page updates.
        </li>
      </ul>
    </div>
  );
};

export default ISR;
