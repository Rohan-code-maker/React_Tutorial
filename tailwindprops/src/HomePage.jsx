function HomePage() {
  return (
    <>
      <div className="bg-slate-950 min-h-screen max-w-screen">
        {/* navbar goes here */}
        <nav className="w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-4 ">
          <div className="text-2xl text-indigo-700 font-bold ">PW Skills</div>
          <ul className="md:flex hidden font-semibold">
            <li className="mx-[10px] cursor-pointer">Home</li>
            <li className="mx-[10px] cursor-pointer">About Us</li>
            <li className="mx-[10px] cursor-pointer">Contact Us</li>
          </ul>
          <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
            Login/SignUp
          </div>
          <div className="md:hidden">
            <a href="#" className="text-4xl ">
              &#8801;
            </a>{" "}
            {/*VVI Concept = It will give hamburger icon*/}
          </div>
        </nav>
        {/* NavBar Ends here */}

        {/* Image section starts here */}
        <header className="w-full h-auto">
          <img
            src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
            alt=""
            className="w-full hidden md:block"
          />
          <img
            src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
            alt=""
            className="w-full md:hidden"
          />
        </header>
        {/* Image section ends here */}

        {/* our students section */}
        <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
          <div className="w-full h-auto flex flex-wrap flex-col items-center">
            <p className="text-indigo-800 font-bold text-2xl md:text-3xl text-center">
              &quot;Pure Hardwork, No Shortcuts!&quot;
            </p>
            <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>

            <div className="w-full flex flex-wrap justify-evenly">
              <div className="w-46 flex flex-col items-center mb-12">
                <img
                  className="w-44 h-44"
                  src="https://pwskills.com/images/landing-page/statistics/books-icon.svg"
                  alt=""
                />
                <p className="text-3xl font-bold text-white">600+</p>
                <p className="text-3xl font-bold text-gray-500">
                  Different Courses
                </p>
              </div>
              <div className="w-46 flex flex-col items-center mb-12">
                <img
                  className="w-44 h-44"
                  src="https://pwskills.com/images/landing-page/statistics/student-icon.svg"
                  alt=""
                />
                <p className="text-3xl font-bold text-white">600+</p>
                <p className="text-3xl font-bold text-gray-500">
                  Different Courses
                </p>
              </div>
              <div className="w-46 flex flex-col items-center mb-12">
                <img
                  className="w-44 h-44"
                  src="https://pwskills.com/images/landing-page/statistics/credit-card-icon.svg"
                  alt=""
                />
                <p className="text-3xl font-bold text-white">600+</p>
                <p className="text-3xl font-bold text-gray-500">
                  Different Courses
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Our student section ends here */}

        {/* Our Product Section starts here */}
        <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
          <div className="w-full h-auto flex flex-wrap flex-col items-center">
            <p className="text-indigo-800 font-bold text-2xl md:text-3xl text-center">
              Our Products
            </p>
            <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>

            <div className="w-[90%] h-auto flex flex-wrap justify-around">
              <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                <img
                  src="https://pwskills.com/images/landing-page/statistics/books-icon.svg"
                  alt=""
                />
                <p className="text-3xl font-bold text-white">Pw Skills Lab</p>
                <p className="text-xl font-bold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, porro?
                </p>
              </div>
              <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                <img
                  src="https://pwskills.com/images/landing-page/statistics/books-icon.svg"
                  alt=""
                />
                <p className="text-3xl font-bold text-white">Pw Skills Lab</p>
                <p className="text-xl font-bold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, porro?
                </p>
              </div>
              <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                <img
                  src="https://pwskills.com/images/landing-page/statistics/books-icon.svg"
                  alt=""
                />
                <p className="text-3xl font-bold text-white">Pw Skills Lab</p>
                <p className="text-xl font-bold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, porro?
                </p>
              </div>
              <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                <img
                  src="https://pwskills.com/images/landing-page/statistics/books-icon.svg"
                  alt=""
                />
                <p className="text-3xl font-bold text-white">Pw Skills Lab</p>
                <p className="text-xl font-bold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, porro?
                </p>
              </div>
              <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                <img
                  src="https://pwskills.com/images/landing-page/statistics/books-icon.svg"
                  alt=""
                />
                <p className="text-3xl font-bold text-white">Pw Skills Lab</p>
                <p className="text-xl font-bold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, porro?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Our Product Section ends here */}

        {/* Our Footer Section starts here */}
        <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
          <div>
            <img
              className="w-40 h-16"
              src="https://pwskills.com/images/PWSkills-white.png"
              alt=""
            />
            <p className="my-4">Lorem ipsum dolor sit amet.</p>
            <img
              className="w-32 h-32"
              src="https://pwskills.com/images/iso-9001-2015.svg"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold text-xl mt-4">PW Skills</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <div>
              <p>About Us</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl mt-4">PW Skills</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <div>
              <p>About Us</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl mt-4">PW Skills</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <div>
              <p>About Us</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </footer>
        {/* Our Footer Section ends here */}
      </div>
    </>
  );
}
export default HomePage;
