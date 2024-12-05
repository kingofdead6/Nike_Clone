import Button from '../conponents/Button'
import {arrowRight} from '../assets/icons'
import {shoes ,statistics} from '../constants/index'
import {bigShoe1} from '../assets/images'
import ShoeCard from '../conponents/ShoeCard'
import { useState } from 'react'
const Hero = () => {
  const [bigShoeImg , setBigShoeImg] = useState(bigShoe1) ;

  return (
    <section id="home" 
              className="w-full 
                        flex xl:flex-row flex-col p-2 gap-10
                        justify-center min-h-screen  max-container
                        ">
        <div className="relative xl:w-2/5 flex flex-col justify-center
                        items-start w-full max-xl:padding-x
                        pt-28">
            <p className='text-xl font-montserrat text-coral-red'>Our summer collection</p>
            <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max-sm:leading[82px] font-bold z-20">
               <span className='xl:bg-white  xl:whitespace-nowrap z-10 pr-10'>The New Arrival</span>
               <br/>
               <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
            </h1>
            <p className='font_montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
              Discover stylish Nike Arrivals, quality comfort,
              and inovation for your active life.
            </p>
           
        
      <Button label="shop now" iconURL={arrowRight}></Button>
      <div className='flex justify-starts items-start flex-wrap w-full 
                      mt-20 gap-16'>
           {statistics.map((stat)=>(
            <div key={stat.label}> 
              <p className='text-4xl font-palanquin font-bold '>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
           )
          )}

      </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center 
                xl:min-h-screen max-xl:py40 bg-primary bg-hero 
                bg-cover bg-center'>
        <img src={bigShoeImg} 
        alt='shoe collection' 
        width={610}
        height={500}
        className='object-contain relative z-10'/>
        
      </div>
      <div className='flex sm:gap-6 gap-4 absolute top-[15%] ml-[500px]  my-class'
                      >
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard imgURL={shoe} 
            changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} 
            bigShoeImg={bigShoeImg} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero ;