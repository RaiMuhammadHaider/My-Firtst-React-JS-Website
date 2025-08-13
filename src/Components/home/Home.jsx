import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-20 py-10 bg-gradient-to-r from-orange-100 via-white to-orange-50">
      <div className="relative z-10 max-w-screen-xl px-4 sm:py-24 mx-auto sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-10">

        {/* Image Section */}
        <div className="flex justify-center sm:justify-start order-1 sm:order-1 animate-slideInLeft">
          <img
            className="w-72 sm:w-96 drop-shadow-lg rounded-lg"
            src="https://runcode-app-public.s3.amazonaws.com/images/online-reactjs-editor-compiler.original.png"
            alt="Main banner"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-xl space-y-6 text-center sm:text-right sm:ml-auto order-2 sm:order-2 animate-fadeIn">
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl text-gray-800">
            Download Now
            <span className="block sm:block text-orange-700 mt-1">
              Start your journey with Lorem Ipsum
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
            Begin your amazing journey with just one click.
          </p>

          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-orange-700 rounded-lg shadow-md hover:shadow-lg transition hover:bg-orange-600"
          >
            <svg
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            <span className="ml-2">Download Now</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
