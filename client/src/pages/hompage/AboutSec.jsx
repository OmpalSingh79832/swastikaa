import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutSec = () => {

  const navigate = useNavigate ();
  return (
    <div>
      <section class="sm:pb-10 md:py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-center items-start gap-8 flex">
                <div class="">
                  <div className="text-start">
                    <p className="sm:text-[30px] md:text-[40px] mr-3 font-bold sm:text-center md:text-start">-- About<span className="text-primaryRed">Us --</span></p>
                  </div>
                  <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <p
                      class="text-black sm:text-sm md:text-lg font-normal leading-relaxed text-start">
                      Our achievement story is a testament to teamwork and perseverance. Together, we've
                      overcome challenges, celebrated victories, and created a narrative of progress and
                      success.</p>
                  </div>
                </div>
                <div class="w-full flex-col justify-center items-start gap-6 flex">
                  <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                      <p class="sm:text-sm md:text-base font-normal leading-relaxed">Influencing Digital
                        Landscapes Together</p>
                    </div>
                    <div
                      class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects
                      </h4>
                      <p class="sm:text-sm md:text-base font-normal leading-relaxed">Excellence Achieved
                        Through Success</p>
                    </div>
                  </div>
                  <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                      <p class="sm:text-sm md:text-base font-normal leading-relaxed">Our Dedication to
                        Innovation Wins Understanding</p>
                    </div>
                    <div
                      class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy
                        Clients</h4>
                      <p class="sm:text-sm md:text-base font-normal leading-relaxed">Mirrors our Focus on
                        Client Satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button class=" all-btn" onClick={()=> navigate("/about-us")}>Read More
              </button>
            </div>
            <div class="w-full lg:justify-start justify-center items-start flex">
              <div
                class="sm:w-[564px] w-full sm:h-[300px] md:h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img class="sm:mt-5 sm:ml-0 w-full h-full rounded-3xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSec
