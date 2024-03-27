import React from "react";

const HistoryPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 pb-10">
      <h1 className="text-3xl font-semibold text-center mt-10 mb-6">
        History of Web Development 🔍
      </h1>
      <p className="text-base leading-relaxed">
        <strong>Pre-React Era:</strong>
        <br />
        HTML (HyperText Markup Language): HTML was the backbone of web
        development, providing the structure and content of web pages.
        <br />
        CSS (Cascading Style Sheets): CSS was used for styling HTML elements,
        controlling their layout, colors, fonts, and other visual aspects.
        <br />
        JavaScript: JavaScript was utilized for client-side interactivity and
        dynamic behavior on web pages. It allowed developers to manipulate HTML
        and CSS, handle user events, and interact with server-side resources
        asynchronously using AJAX (Asynchronous JavaScript and XML).
        <br />
        <br />
        <strong>Challenges Faced:</strong>
        <br />
        Complexity: As web applications became more sophisticated, managing the
        complexity of front-end code became challenging. Traditional JavaScript
        frameworks and libraries didn&apos;t provide efficient ways to handle
        large-scale applications.
        <br />
        Performance: Rendering large amounts of dynamic content in traditional
        web applications could lead to performance bottlenecks, as frequent DOM
        manipulations were required.
        <br />
        SEO (Search Engine Optimization): Single-page applications (SPAs), which
        relied heavily on client-side rendering, often faced SEO challenges
        because search engine crawlers had difficulty indexing their content.
        <br />
        <br />
        <strong>Introduction of React:</strong>
        <br />
        Virtual DOM: React, developed by Facebook, introduced the concept of a
        Virtual DOM. Instead of directly manipulating the browser&apos;s DOM,
        React creates a virtual representation of the DOM in memory and updates
        it efficiently. This minimizes unnecessary DOM manipulations and
        improves performance.
        <br />
        Component-Based Architecture: React introduced a component-based
        architecture, allowing developers to break down complex UIs into
        reusable and composable components. This approach improved code
        organization and maintainability.
        <br />
        Declarative Syntax: React&apos;s declarative syntax made it easier to
        describe how UIs should look based on the application&apos;s state.
        Developers could focus on what the UI should display rather than
        imperatively defining how to achieve it.
        <br />
        <br />
        <strong>Introduction of Next.js:</strong>
        <br />
        Server-Side Rendering (SSR): Next.js, built on top of React, introduced
        server-side rendering capabilities. SSR pre-renders React components on
        the server before sending them to the client, improving initial page
        load performance and enhancing SEO.
        <br />
        Static Site Generation (SSG): Next.js also supports static site
        generation, where pages are pre-built at build time rather than being
        generated dynamically on each request. This approach further improves
        performance and scalability, especially for content-focused websites.
        <br />
        Automatic Code Splitting: Next.js automatically splits JavaScript
        bundles based on page boundaries, resulting in smaller initial bundle
        sizes and faster page loads.
        <br />
        API Routes: Next.js provides built-in API routes, making it easy to
        create serverless APIs within the same project.
        <br />
        <br />
        In summary, React revolutionized front-end development by introducing a
        component-based architecture and virtual DOM. Next.js, building upon
        React&apos;s foundations, addressed challenges such as server-side
        rendering and improved performance, making it a popular choice for
        building modern web applications and websites.
      </p>
    </div>
  );
};

export default HistoryPage;
