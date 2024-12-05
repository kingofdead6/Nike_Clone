const Subscribe = () => {
  return (
    <section
      id="Contact-us"
      className="flex flex-row items-center justify-center gap-[200px] mt-[-100px] p-8 "
    > 
     <div className="flex flex-1 justify-center">
      <h3 className="mt-10 font-palanquin text-4xl font-bold w-[450px] 
      leading-[68px] flex-1 justify-center h3subscribe">Sign Up for <span className="text-coral-red 
      inline-block mt-3">Updates</span> & Newsletter </h3>
      </div>

      <div className="flex flex-1 items-center justify-between w-full max-w-lg rounded-full border border-gray-300 bg-white p-2 mt-[75px]">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="flex-1 px-4 text-gray-600 focus:outline-none"
        />
        <button
          className="ml-2 flex items-center justify-center w-32 h-10 rounded-full bg-coral-red text-white text-sm font-semibold hover:bg-red-600 transition-all"
        >
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
