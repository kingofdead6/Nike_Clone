const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 w-full rounded-[20px] shadow-3xl px-10 py-16 transform transition-transform duration-300 hover:scale-105 service-card-phone">
      <div className="w-11 h-11 justify-center items-center mx-auto bg-coral-red rounded-full flex">
        <img src={imgURL} alt={label} width={24} height={24}></img>
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-center">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray text-center">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
