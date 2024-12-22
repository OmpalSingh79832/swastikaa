import React from "react";
import AboutImg1 from "../assets/aboutus-1.jpg";
import AboutsImg2 from "../assets/aboutus-2.avif";
import { useNavigate } from "react-router-dom";
import ChooseUs from "../components/ChooseUs";
import ContactForm from "../components/ContactForm";

const Aboutus = () => {

  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* hero seciton */}
        <div className="relative w-full bg-slate-800  h-[550px]" id="home">
          <div className="absolute inset-0 opacity-40">
            <img src={AboutImg1} alt="Background Image" className="object-cover object-center w-full h-full" />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0 opacity-100 leading-10">
              <h1 className="text-white font-medium text-7xl md:text-7xl  mb-2">Swastikaa Manufacturing <br />Sector Consultant</h1>
              <p className="font-regular font-bold text-2xl mb-8 mt-4 text-white">One stop solution for flour grinding services</p>
              <button className="all-btn">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* our services section */}
        <section className="py-20" id="services">
          <div className="container mx-auto w-[90%]">
            <div className="text-center pb-10">
              <p className="text-[40px] mr-3 font-bold">-- Our<span className="text-primaryRed">Services --</span></p>
              <div className="w-[70%] mx-auto">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusamus ut optio beatae nisi aliquam laborum dolor quasi, vero soluta illo consequatur excepturi magnam dignissimos cumque dolorum placeat iure harum!</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp" alt="wheat flour grinding" className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Wheat Flour Grinding</h3>
                  <p className="text-gray-700 text-base">Our wheat flour grinding service provides fresh, high-quality
                    flour to businesses and individuals in the area. We use state-of-the-art equipment to grind
                    wheat into flour, and we offer a variety of flours to meet the needs of our customers.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww" alt="Coffee" className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Gram Flour Grinding</h3>
                  <p className="text-gray-700 text-base">Our gram flour is perfect for a variety of uses, including
                    baking, cooking, and making snacks. It is also a good source of protein and fiber.Our gram flour
                    grinding service is a convenient and affordable way to get the freshest gram flour possible.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp" alt="Coffee" className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Jowar Flour Grinding</h3>
                  <p className="text-gray-700 text-base">Our jowar grinding service is a convenient and affordable way to
                    get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a
                    fine powder, which is perfect for making roti, bread, and other dishes.
                  </p>

                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coffee" className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Chilli pounding</h3>
                  <p className="text-gray-700 text-base">We specializes in the production of high-quality chili powder.
                    Our chili powder is made from the finest, freshest chilies, and we use traditional pounding
                    methods to ensure that our chili powder retains its full flavor and aroma.
                  </p>
                </div>
              </div>
              {/* special card */}
              <div className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
                <div className="text-center text-white font-medium">Special product</div>
                <img src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww" alt="Coffee" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Flavoured Spaghetti</h3>
                  <p className="text-gray-700 text-base">Our speciality is
                    Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your
                    taste
                    buds. We use only the freshest ingredients Our
                    flavors include: Mango, spinach
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU=" alt="papad" className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Rice Papad</h3>
                  <p className="text-gray-700 text-base">Our company produces high-quality rice papad that is made with
                    the finest ingredients. We use traditional methods to make our papad, which gives it a unique
                    flavor and texture. Our papad is also gluten-free and vegan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-14 text-center">
            <button onClick={() => navigate("/our-services")} className="all-btn" style={{ paddingBottom: "20px", paddingTop: "20px" }}>View All Services</button>
          </div>
        </section>
        {/* about us */}
        <section className="bg-gray-100 " id="aboutus">
          <div className="container mx-auto w-[90%] py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                <div className="heading-style pb-1 flex items-center relative">
                  <p className="text-[40px] mr-3 font-bold">-- About<span className="text-primaryRed">Us --</span></p>
                </div>
                <p className="mt-4 text-gray-600 text-lg text-justify">
                  Swastikaa is a leading manufacturing Sector Consultant offering consulting services worldwide. From Ideation to Execution of Projects, Our focus is always on building an efficient and results-driven relationship. We will work with you to create a customized plan of action for your organization. Get in touch to learn more about our vision and consulting approach. <br />
                  We are committed to providing our customers with the best possible experience. We offer competitive
                  prices, fast shipping, and excellent customer service. We are also happy to answer any questions
                  that our customers may have about our products or services.
                  If you are looking for a flour and spices service business that can provide you with the highest
                  quality products and services, then we are the company for you. We look forward to serving you!</p>
              </div>
              <div className="mt-12 md:mt-0">
                <img src={AboutsImg2} alt="About Us Image" className="object-cover rounded-lg shadow-md" />
              </div>
            </div>

          </div>
        </section>
        {/* why us  */}
        <ChooseUs />
        {/* Meet Our Professional Team */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="heading-style pb-7 ">
            <div className="text-center">
              <p className="text-[40px] mr-3 font-bold">-- Our Professional<span className="text-primaryRed"> Team --</span></p>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Person" />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Oliver Aguilerra</p>
                  <p className="mb-4 text-xs text-gray-100">Product Manager</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    Vincent Van Gogh’s most popular painting, The Starry Night.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Person" />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Marta Clermont</p>
                  <p className="mb-4 text-xs text-gray-100">Design Team Lead</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    Amet I love liquorice jujubes pudding croissant I love pudding.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Person" />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Anthony Geek</p>
                  <p className="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    Apple pie macaroon toffee jujubes pie tart cookie caramels.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Person" />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Alice Melbourne</p>
                  <p className="mb-4 text-xs text-gray-100">Human Resources</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Person" />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Martin Garix</p>
                  <p className="mb-4 text-xs text-gray-100">Good guy</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Person" />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Andrew Larkin</p>
                  <p className="mb-4 text-xs text-gray-100">Backend Developer</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    Moonfish, steelhead, lamprey southern flounder tadpole fish bigeye.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Person" />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Sophie Denmo</p>
                  <p className="mb-4 text-xs text-gray-100">Designer</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    Veggies sunt bona vobis, proinde vos postulo esse magis grape pea.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Person" />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Benedict Caro</p>
                  <p className="mb-4 text-xs text-gray-100">Frontend Developer</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    I love cheese, especially airedale queso. Cheese and biscuits halloumi.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Visit us section */}
        <div className="w-[94%] mx-auto">
          <div className="heading-style">
            <div className="text-center">
              <p className="text-[40px] mr-3 font-bold">-- Contact<span className="text-primaryRed">Us --</span></p>
            </div>
          </div>
        </div>
        <ContactForm />

      </div>

    </>
  )
};

export default Aboutus;
