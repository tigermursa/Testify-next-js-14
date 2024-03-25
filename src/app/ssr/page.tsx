const SSR = () => {
  return (
    <div className="mt-10 mb-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center ">
        What is Server-Side Rendering (SSR) in Next.js?
      </h1>
      <p className="max-w-[900px] text-start text-xl mt-3">
        In Next.js, SSR is a technique where the initial HTML content of a page
        is generated on the server in response to a users request. This means
        that when a user visits a page, the server fetches any necessary data,
        renders the page using that data, and sends the fully-formed HTML
        document to the browser.
      </p>
    </div>
  );
};

export default SSR;
