import ReactTyped from "react-typed-component";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="sm:text-5xl sm:py-6 ss:text-4xl text-3xl font-bold">
          Grow with data.
        </h1>
        <div className="flex justify-center">
          <p className="sm:text-3xl ss:text-2xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="sm:text-3xl ss:text-2xl text-xl font-bold sm:pl-4 pl-2 py-4 text-gray-700"
            backDelay={1}
            backSpeed={140}
            cursorChar="|"
            fadeOutDelay={100}
            loop
            loopCount={0}
            showCursor
            smartBackspace
            startDelay={0}
            stopped
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            typedRef={function noRefCheck() {}}
          />
        </div>
        <p className="sm:text-2xl text-xl font-bold text-gray-700">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
