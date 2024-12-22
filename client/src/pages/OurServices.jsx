import React from 'react';

function OurServices() {
    const services = [
        {
            title: "Wheat Flour Grinding",
            description:
                "Our wheat flour grinding service provides fresh, high-quality flour to businesses and individuals in the area. We use state-of-the-art equipment to grind wheat into flour, and we offer a variety of flours to meet the needs of our customers.",
            image: "https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp",
        },
        {
            title: "Gram Flour Grinding",
            description:
                "Our gram flour is perfect for a variety of uses, including baking, cooking, and making snacks. It is also a good source of protein and fiber. Our gram flour grinding service is a convenient and affordable way to get the freshest gram flour possible.",
            image: "https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww",
        },
        {
            title: "Jowar Flour Grinding",
            description:
                "Our jowar grinding service is a convenient and affordable way to get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a fine powder, which is perfect for making roti, bread, and other dishes.",
            image: "https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp",
        },
        {
            title: "Chilli Pounding",
            description:
                "We specialize in the production of high-quality chili powder. Our chili powder is made from the finest, freshest chilies, and we use traditional pounding methods to ensure that our chili powder retains its full flavor and aroma.",
            image: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Flavoured Spaghetti",
            description:
                "Our specialty is Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your taste buds. We use only the freshest ingredients. Our flavors include Mango and Spinach.",
            image: "https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww",
            isSpecial: true,
        },
        {
            title: "Rice Papad",
            description:
                "Our company produces high-quality rice papad that is made with the finest ingredients. We use traditional methods to make our papad, which gives it a unique flavor and texture. Our papad is also gluten-free and vegan.",
            image: "https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU=",
        },
        {
            title: "Wheat Flour Grinding",
            description:
                "Our wheat flour grinding service provides fresh, high-quality flour to businesses and individuals in the area. We use state-of-the-art equipment to grind wheat into flour, and we offer a variety of flours to meet the needs of our customers.",
            image: "https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp",
        },
        {
            title: "Gram Flour Grinding",
            description:
                "Our gram flour is perfect for a variety of uses, including baking, cooking, and making snacks. It is also a good source of protein and fiber. Our gram flour grinding service is a convenient and affordable way to get the freshest gram flour possible.",
            image: "https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww",
        },
        {
            title: "Jowar Flour Grinding",
            description:
                "Our jowar grinding service is a convenient and affordable way to get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a fine powder, which is perfect for making roti, bread, and other dishes.",
            image: "https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp",
        },
        {
            title: "Chilli Pounding",
            description:
                "We specialize in the production of high-quality chili powder. Our chili powder is made from the finest, freshest chilies, and we use traditional pounding methods to ensure that our chili powder retains its full flavor and aroma.",
            image: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isSpecial: true,
        },
        {
            title: "Flavoured Spaghetti",
            description:
                "Our specialty is Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your taste buds. We use only the freshest ingredients. Our flavors include Mango and Spinach.",
            image: "https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww",

        },
        {
            title: "Rice Papad",
            description:
                "Our company produces high-quality rice papad that is made with the finest ingredients. We use traditional methods to make our papad, which gives it a unique flavor and texture. Our papad is also gluten-free and vegan.",
            image: "https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU=",
        },
    ];

    return (
        <>
            <section className="pb-20 pt-10" id="services">
                <div className="container mx-auto w-[90%] px-4">
                <div className="text-center pb-10">
                    <p className="text-[40px] mr-3 font-bold">-- Our<span className="text-primaryRed">Services --</span></p>
                    <div className="w-[70%] mx-auto">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusamus ut optio beatae nisi aliquam laborum dolor quasi, vero soluta illo consequatur excepturi magnam dignissimos cumque dolorum placeat iure harum!</p>
                    </div>
                </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) =>
                            service.isSpecial ? (
                                // Special Product Card
                                <div
                                    key={index}
                                    className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full"
                                >
                                    <div className="text-center text-white font-medium">Special product</div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-64 object-cover rounded-t-lg"
                                    />
                                    <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                                        <h3 className="text-xl font-medium text-gray-800 mb-2">{service.title}</h3>
                                        <p className="text-gray-700 text-base">{service.description}</p>
                                    </div>
                                </div>
                            ) : (
                                // Regular Product Card
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-medium text-gray-800 mb-2">{service.title}</h3>
                                        <p className="text-gray-700 text-base">{service.description}</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default OurServices;
