import React from 'react'
import "./home.css"


const Slider = () => {
    return (
        <>
            <div className='m-0 p-0 w-full h-screen font-sans'>
                <div class="Section_top mt-[10px] w-full h-[90vh] overflow-hidden relative bg-center bg-no-repeat bg-cover text-center justify-center animate-[change_10s_infinite_ease-in-out]">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase">
                        <h1 className='text-white text-[60px] tracking-[15px]'>Swastikaa <span className='text-black'>Manufacturer</span></h1>
                        <a href="#" className='bg-[#85c1ee] px-6 py-2.5 text-[18px] rounded-[20px] no-underline'>Welcome</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider