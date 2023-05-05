import React from "react";

const Getstarted = () => {
  return (
    <div>
      <section className=" text-gray-800">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">
                Our customers are saying about us
              </h2>
              <p className="text-gray-600">
                Read and use these quotes to help, Order online.
              </p>
            </div>
            <div className="p-6 xl:col-span-3"  data-aos="zoom-out-left">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      “Food hub 24/7 has the best application for online
                      ordering. Fantastic choices of restaurants,low delivery
                      price and great customer service.”
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?1"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Nate Wilson</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      “Food hub 24/7 has the best application for online
                      ordering. Fantastic choices of restaurants,low delivery
                      price and great customer service.”
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?2"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Harry Tec</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      “Food hub 24/7 has the best application for online
                      ordering. Fantastic choices of restaurants,low delivery
                      price and great customer service.”
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Lesley Parker</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      “Food hub 24/7 has the best application for online
                      ordering. Fantastic choices of restaurants,low delivery
                      price and great customer service.”
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">
                          Andrew Balbirnie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Getstarted;
