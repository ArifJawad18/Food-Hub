import React from 'react';


const Getstarted = () => {
    return (
        <div>
            <section>
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
       
       <iframe src="https://embed.lottiefiles.com/animation/43591"></iframe>
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Get Started Today!</h2>

        <p className="mt-4 text-gray-600">
        Everything you need to build an amazing food from restaurant.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
         Order Now
        </a>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default Getstarted;