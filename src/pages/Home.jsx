import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home1 = () => {
  return (
    <>
      <Navbar />
      <section class="bg-white dark:bg-gray-900 p-16">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="text-primary-700 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Project Tracker
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Track your project progress, milestones, and communicate with
              project managers in real-time—all in one place.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
        </div>
      </section>

      {/* Key Features Section */}
      <section class="bg-primary-50 dark:bg-grey-800 ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Key Features for Efficient Project Tracking
            </h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              With Obscura, project managers and clients stay on the same page,
              avoiding miscommunication and delays through centralized,
              real-time tracking.
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {/* Client Dashboard */}
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Client Dashboard
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Get a centralized view of all your projects with real-time
                updates on their progress, milestones, and statuses.
              </p>
            </div>
            {/* Milestone Tracking */}
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Milestone Tracking
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Keep track of project milestones with clear due dates, statuses,
                and detailed descriptions.
              </p>
            </div>
            {/* Document & File Sharing */}
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h2a1 1 0 011 1v1h-4V10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Document & File Sharing
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Share important documents, resources, and files directly within
                the platform to keep everything organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="flex flex-col gap-8 items-center p-6 ">
        {/* <!-- Title --> */}
        <div class="flex flex-col gap-2 text-center">
          <h1 class="font-bold text-3xl">Pricing</h1>
          <span>
            Whatever your status, our offers evolve according to your needs
          </span>
        </div>

        {/* <!-- Montly/annual--> */}
        <div class="flex gap-2">
          <span>Montly</span>

          <input type="checkbox" class="toggle toggle-secondary" />

          <span class="flex flex-col">
            Annual
            <span class="text-sm text-accent">(Save up to 10%)</span>
          </span>
        </div>

        {/* <!-- Pricing cards --> */}
        <div class="grid grid-cols-1 md:grid-cols-3 items-start px-2 gap-8">
          {/* <!-- Price --> */}
          <div class="flex flex-col gap-6 bg-base-200 rounded-box p-8">
            <div class="flex flex-col gap-4 text-center">
              <h2 class="text-xl">Free</h2>

              <h1 class="text-5xl font-bold">Free</h1>

              <span class="text-sm">Free forever</span>
            </div>

            {/* <!-- Features --> */}
            <div class="flex flex-col">
              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-check text-accent"></i>1 user
              </div>

              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-check text-accent"></i>
                Plan features
              </div>

              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-check text-accent"></i>
                Product support
              </div>
            </div>

            <a class="btn btn-neutral">Sign up</a>
          </div>

          {/* <!-- Price (Most popular) --> */}
          <div class="flex flex-col gap-6 bg-base-200 rounded-box p-8 border border-primary shadow">
            <div class="badge badge-primary self-center badge-lg">
              Most popular
            </div>

            <div class="flex flex-col gap-4 text-center">
              <h2 class="text-xl">Startup</h2>

              <h1 class="text-5xl font-bold">$39</h1>

              <span class="text-sm">
                All the basics for starting a new business
              </span>
            </div>

            {/* <!-- Features --> */}
            <div class="flex flex-col">
              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-check text-accent"></i>2 users
              </div>

              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-check text-accent"></i>
                Plan features
              </div>

              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-check text-accent"></i>
                Product support
              </div>
            </div>

            <a class="btn btn-primary">Sign up</a>
          </div>

          {/* <!-- Price --> */}
          <div class="flex flex-col gap-6 bg-base-200 rounded-box p-8">
            <div class="flex flex-col gap-4 text-center">
              <h2 class="text-xl">Team</h2>

              <h1 class="text-5xl font-bold">$89</h1>

              <span class="text-sm">
                Everything you need for a growing business
              </span>
            </div>

            {/* <!-- Features --> */}
            <div class="flex flex-col">
              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-check text-accent"></i>
                10 users
              </div>

              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-check text-accent"></i>
                Plan features
              </div>

              <div class="flex gap-2 items-center">
                <i class="fa-solid fa-check text-accent"></i>
                Product support
              </div>
            </div>

            <a class="btn btn-neutral">Sign up</a>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <section class="bg-base-200 dark:bg-primary-900 py-16 text-black text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Project Management?
        </h2>
        <p class="text-xl mb-8">
          Try Obscura Client Project Tracker and experience seamless
          communication and project tracking.
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-6 py-4 text-lg font-medium text-white bg-primary-900 hover:bg-primary-800 rounded-lg"
        >
          Get Started Now
        </a>
      </section>
      <Footer />
    </>
  );
};

export default Home1;
