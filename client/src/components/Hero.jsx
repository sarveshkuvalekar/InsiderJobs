import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

    const {setSearchFilter, setIsSearched} = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch=()=>{
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        setIsSearched(true)
    }

  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
        <div className='bg-gradient-to-r from-stone-200 to-stone-400 text-white py-16 text-center mx-2 rounded-xl'>
            <h2 className='text-2xl md:text-3xl text-stone-700 lg:text-4xl font-medium mb-4'>Explore 10,000+ job opportunities waiting for you!</h2>
            <p className='mb-8 max-w-xl mx-auto  text-stone-950 text-md font-light px-5'>Take the Next Step in Your Career – Discover Top Job Opportunities Today!</p>
            <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.search_icon} alt="" />
                    <input type="text"
                    placeholder='Search for Jobs'
                    className='max-sm:text-xs p-2 rounded outline-none w-full' 
                    ref={titleRef}
                    />
                </div>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.location_icon} alt="" />
                    <input type="text"
                    placeholder='Location'
                    className='max-sm:text-xs p-2 rounded outline-none w-full'
                    ref={locationRef} />
                    <button onClick={onSearch} className='bg-stone-700 px-6 py-2 rounded text-white m-1'>Search</button>
                </div>
            </div>
        </div>
        <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md  flex'>
                <div className='flex gap-10 lg:gap-16 flex-wrap justify-center'>
                    <p className='font-medium'>Trusted by</p>
                    <img className='h-6' src={assets.accenture_logo} alt="" />
                    <img className='h-6' src={assets.microsoft_logo} alt="" />
                    <img className='h-6' src={assets.walmart_logo} alt="" />
                    <img className='h-6' src={assets.samsung_logo} alt="" />
                    <img className='h-6' src={assets.amazon_logo} alt="" />
                    <img className='h-6' src={assets.adobe_logo} alt="" />
                    <img className='h-6' src={assets.infosys_logo} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Hero