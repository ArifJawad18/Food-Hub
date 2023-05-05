import React from "react";

const Banner = () => {
  return (
    <div className="mt-5" data-aos="zoom-in-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000">
      <section class="relative bg-[url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/25 sm:bg-transparent sm:from-white/25 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right" data-aos="zoom-in-right">
            <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
              Order Healthy And
              <strong class="block font-extrabold text-white">
                Forever Home.
              </strong>
            </h1>

            <p class="mt-3 text-white max-w-lg sm:text-xl/relaxed">
              Italian food makes people think of big family dinners. So you may
              want to position your restaurant as a place to bring the whole
              family.
            </p>

            <div class="mt-8 ml-8 flex flex-wrap gap-5 text-center" data-aos="zoom-in-right"
   >
              <a
                href="#"
                class="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus:ring active:bg-blue-600 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-900 focus:outline-none focus:ring active:text-blue-900 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Banner;
