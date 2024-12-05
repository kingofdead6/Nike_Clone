import Button from '../conponents/Button'
import {arrowRight} from '../assets/icons'
import { offer } from '../assets/images'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap  max-xl:flex-col-reverse gap-10 max-container'>
      
        <div className='flex-1'>
          <img src={offer} width={773} height={687} className='object-contain w-full' />
        </div>
        <div className="flex flex-1 flex-col mt-[-50px]">
           <h2 className="mt-10 font-palanquin text-[50px] font-bold z-20"><span className="text-coral-red inline-block mt-3">Special</span> Offer</h2>
           <p className="font-montserrat text-slate-gray text-[14px] w-full mt-6 mb-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam aliquam officia iste? Ipsam maxime optio neque est fugit rerum dignissimos fuga velit mollitia sequi, placeat sit fugiat inventore culpa?</p>     
           <p className="font-montserrat text-slate-gray text-[14px] w-full mt-[-40px] mb-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam aliquam officia iste? Ipsam maxime optio neque est fugit rerum dignissimos fuga velit mollitia sequi, placeat sit fugiat inventore culpa?</p>
           <div className='flex gap-6'>
           <Button label="shop now" iconURL={arrowRight}></Button>
           <button
             className="flex justify-center items-center gap-2 px-1 py-4 
            border font-montserrat text-lg leading-none bg-white 
            rounded-full text-slate-gray border-slate-gray w-[200px] h-[50px] hover:bg-gray-100"
            >
            Learn more
           </button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers