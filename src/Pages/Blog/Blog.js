import React from "react";
import Slider from "../Home/Slider/Slider";

const Blog = () => {
  return (
    <div className="mt-20 w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-8 font-bold">
        Some Interview Questions
      </h1>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">What is cors?</div>
        <div className="collapse-content">
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-6"
      >
        <div className="collapse-title text-xl font-medium">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content">
          <p>
            Firebase provides tools to grow your app and business, for startups
            & global enterprises. Get your app up and running quickly & securely
            with fully managed backend infrastructure. Customize Your App.
            Backed by Google. Monitor App Performance. Accelerate Development.
            <br />
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-6"
      >
        <div className="collapse-title text-xl font-medium">
          How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-6"
      >
        <div className="collapse-title text-xl font-medium">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>
            Node. js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node. js wastes no time or
            resources on waiting for I/O requests to return.
            <br />
            <strong>Node Work: </strong> It is a used as backend service where
            javascript works on the server-side of the application. This way
            javascript is used on both frontend and backend. Node. js runs on
            chrome v8 engine which converts javascript code into machine code,
            it is highly scalable, lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Blog;
