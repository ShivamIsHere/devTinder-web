import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const userData = useSelector((store) => store.user);
  // const fetchUser = async () => {
  //   if (userData) return;
  //   try {
  //     const res = await axios.get(BASE_URL + "profile/view", {
  //       withCredentials: true,
  //     });
  //     dispatch(addUser(res.data));
  //   } catch (err) {
  //     if (err.status === 401) {
  //       navigate("/login");
  //     }
  //     console.error(err);
  //   }
  // };
  // useEffect(() => {
  //   fetchUser();
  // }, []);


  return (
    <div class="bg-base-300">
      {/* <header class=" ">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 ">
          <div class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
              <a href="#" title="" class="flex">
                <img
                  class="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <button
              type="button"
              class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>

              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#"
                title=""
                class="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                class="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Solutions{" "}
              </a>

              <a
                href="#"
                title=""
                class="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Resources{" "}
              </a>

              <a
                href="#"
                title=""
                class="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>

            <a
              href="#"
              title=""
              class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
              role="button"
            >
              {" "}
              Join Now{" "}
            </a>
          </div>
        </div>
      </header> */}

      <section class=" bg-opacity-30 py-10 sm:py-16 lg:py-8 min-h-screen">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p class="text-base font-semibold tracking-wider text-[#FF671F] uppercase">
                A social media for Developers
              </p>
              <h1 class="mt-2 text-4xl font-bold text-white lg:mt-1 sm:text-6xl xl:text-8xl">
                Match with Developers who inspire
              </h1>
              <p class="mt-2 text-base text-green-500 lg:mt-5  sm:text-xl">
                Swipe into the world of developers.
              </p>

              <Link
               to= '/signup'
                title=""
                class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Join for free
                <svg
                  class="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>

              <p class="mt-5 text-zinc-200">
                Already joined us?{" "}
                <Link
                  to="/login"
                  title=""
                  class="text-blue-700 transition-all duration-200 hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>

            <div>
              <img
                class="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;