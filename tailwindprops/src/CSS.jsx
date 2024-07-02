function CSS() {
  return (
    <>
      <div className="bg-slate-900 min-h-screen max-w-screen flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl">Test</h1>

        <div className="p-6 max-w-md bg-white rounded-xl shadow-lg flex items-center space-x-4 mb-8">
          <div>
            <img
              className="h-14 w-14 rounded-sm"
              src="https://images.pexels.com/photos/17591300/pexels-photo-17591300/free-photo-of-entrance-decorated-with-potted-plants.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">
              Tailwind CSS
              <p className="text-slate-500 text-base">Hi Rohan</p>
            </div>
          </div>
        </div>

        <div className="p-6 max-w-md bg-white rounded-xl shadow-lg">
          <div>
            <img
              className="h-64 w-auto rounded-sm"
              src="https://images.pexels.com/photos/17591300/pexels-photo-17591300/free-photo-of-entrance-decorated-with-potted-plants.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">
              Tailwind CSS
              <p className="text-slate-500 text-base">Hi Rohan</p>
            </div>
          </div>
        </div>

        <button className="bg-sky-500 text-center mt-2 text-white text-base p-2 rounded-xl hover:bg-white hover:text-black dark:bg-red-600">
          Buy Now
        </button>

        <div className="text-center my-4">
          <p className="text-white md:text-green-500 sm:text-red-600">
            Lorem, ipsum dolor.
          </p>
        </div>

        <div id="mt-3">
          <div className="bg-white max-w-sm mx-auto rounded-md overflow-hidden mb-4 md:max-w-2xl">
            <div className="md:flex">
              <div>
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://images.pexels.com/photos/21656883/pexels-photo-21656883/free-photo-of-woman-taking-a-photo-of-elbphilharmonie-in-hamburg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  An Awesome card
                </div>
                <a className="block mt-1 text-lg font-medium text-black hover:text-blue-700" href="#">
                  Tailwind CSS is amazing once you understand the <span className="bg-yellow-500 p-[2px] px-[14px] rounded-md">power</span> of it.
                </a>
                <p className="mt-2 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CSS;
