import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container super-quality-phone"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-[50px] w-[650px] font-bold z-20">
          We Provide You{' '}
          <span className="text-coral-red inline-block mt-3">Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
        </h2>
        <p className="font-montserrat text-slate-gray text-lg w-[450px] leading-8 mt-6 mb-14">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="font-montserrat text-slate-gray text-lg w-[450px] leading-8 mt-[-30px] mb-14">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <button
          className="flex justify-center items-center gap-2 px-1 py-4 
            border font-montserrat text-lg leading-none bg-coral-red 
            rounded-full text-white border-coral-red w-[200px] h-[50px] hover:bg-red-600"
        >
          View details
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={700} height={700}></img>
      </div>
    </section>
  );
};

export default SuperQuality;
