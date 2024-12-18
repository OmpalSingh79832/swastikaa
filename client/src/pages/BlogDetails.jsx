import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Blog1 from "../assets/blog1.webp";
import Blog2 from "../assets/blog2.webp";
import Blog3 from "../assets/blog3.webp";


const blogData = [
  {
    id: 1,
    image: Blog1,
    title: "The Promising Future of Jackfruit Processing in India",
    author: "Gaurav Kumar",
    content: `Jackfruit, the largest tree-borne fruit, is gaining global recognition for its nutritional benefits and versatility, making it a promising candidate for processing. In India, jackfruit's potential as a meat substitute and its sweet, ripe variations offer numerous opportunities for innovative food products.`,
    sections: [
      {
        title: "#1. Versatility and End Products",
        content: `Jackfruit's unique texture makes it a popular meat substitute, while ripe jackfruit is used in desserts, smoothies, and snacks. Key jackfruit-based products include:`,
        items: [
          "Jackfruit flour",
          "Frozen jackfruit",
          "Canned jackfruit",
          "Jackfruit chips",
          "Plant-based jackfruit burgers and sausages",
        ],
      },
      {
        title: "#2. Market Potential and Export Opportunities",
        content: `The global demand for plant-based foods is rising, positioning India to capitalize on this trend. Jackfruit products are gaining popularity in markets like the U.S. and Europe. By improving processing capabilities and maintaining high-quality standards, India can significantly increase its share in the global market.`,
      },
      {
        title: "#3. Key Regions for Cultivation",
        content: `While Kerala, Tamil Nadu, and Karnataka are traditional strongholds, Jharkhand is emerging as a key player. The Jharkhand variant of jackfruit is known for its unique flavour and high nutritional value, making it an attractive option for both domestic consumption and export.`,
      },
      {
        title: "#4. Technological Advancements",
        content: `Modern processing techniques such as vacuum frying and freeze-drying enhance the quality and shelf life of jackfruit products. Research into jackfruit seed processing, rich in protein, is also ongoing.`,
      },
      {
        title: "#5. Economic and Environmental Impact",
        content: `Jackfruit processing can boost rural economies and reduce food waste. Hardy jackfruit trees require minimal maintenance, supporting sustainable agriculture.`,
      },
      {
        title: "#6. Challenges and Opportunities",
        content: `Ensuring a steady supply, educating farmers, and creating market awareness are crucial. Government initiatives and industry-academic collaborations can drive innovation.`,
      },
    ],
  },
  {
    id: 2,
    image: Blog2,
    title: "Unveiling the Future: Emerging Technologies in Chemical Manufacturing",
    author: "Sales Team",
    content: `The landscape of chemical manufacturing is continuously evolving, driven by advancements in technology and innovation. In this blog post, we'll explore some of the most promising emerging technologies in chemical manufacturing, along with the opportunities they present and their diverse applications across industries.`,
    sections: [
      {
        title: "#1. Nanotechnology",
        content: `Nanotechnology holds immense promise in chemical manufacturing, enabling the production of materials with enhanced properties and functionalities. From nanostructured catalysts for efficient chemical reactions to nanomaterials with unique properties for various applications, nanotechnology opens up new avenues for innovation and product development.`,
      },
      {
        title: "#2. Biotechnology",
        content: `Biotechnology is revolutionizing chemical manufacturing by offering sustainable and eco-friendly alternatives to traditional processes. Biocatalysis, for example, employs enzymes or microorganisms to catalyze chemical reactions, resulting in greener and more efficient production processes. Additionally, bioprocessing techniques such as fermentation enable the production of bio-based chemicals and fuels from renewable feedstocks.`,
      },
      {
        title: "#3. Artificial Intelligence (AI) and Machine Learning",
        content: `AI and machine learning technologies are transforming chemical manufacturing by optimizing processes, predicting outcomes, and enabling real-time decision-making. AI-powered algorithms analyze vast amounts of data to identify patterns, optimize reaction conditions, and enhance product quality. Machine learning models also enable predictive maintenance, reducing downtime and improving operational efficiency.`,
      },
      {
        title: "#4. Advanced Materials",
        content: `The development of advanced materials such as polymers, composites, and functional coatings is driving innovation in chemical manufacturing. These materials offer superior properties such as high strength, durability, and corrosion resistance, making them ideal for a wide range of applications, including aerospace, automotive, electronics, and healthcare.`,
      },
      {
        title: "#5. Process Intensification",
        content: `Process intensification technologies aim to increase the efficiency and productivity of chemical manufacturing processes while reducing resource consumption and waste generation. Techniques such as continuous flow reactors, membrane separation, and microreactors enable precise control over reaction conditions, resulting in higher yields, reduced energy consumption, and shorter processing times.`,
      },
      {
        title: " Conclusion",
        content: `In conclusion, emerging technologies are reshaping the landscape of chemical manufacturing, offering new opportunities for innovation, sustainability, and growth. By embracing technologies such as nanotechnology, biotechnology, AI, advanced materials, and process intensification, chemical manufacturers can unlock new avenues for product development, process optimization, and market expansion. Partnering with Swastikaa can help chemical manufacturers navigate the complexities of digital transformation and leverage emerging technologies to drive success and competitiveness in the industry.`,
      },
    ],
  },
  {
    id: 3,
    image: Blog3,
    title: "Sipping into the Future: Navigating Emerging Beverage Trends with Consumer Preferences",
    author: "Sales Team",
    content: `In a world where consumers are increasingly conscious of what they consume, the beverage industry finds itself at the forefront of innovation. From artisanal concoctions to health-focused elixirs, the landscape is evolving rapidly. As beverage manufacturers strive to stay ahead, understanding and adapting to emerging trends is crucial for success.`,
    sections: [
      {
        title: "#1. The Rise of Functional Beverages",
        content: `Functional beverages have witnessed a meteoric rise in popularity in recent years. These beverages, fortified with vitamins, minerals, herbs, and other bioactive ingredients, cater to consumers seeking more than just refreshment. With an emphasis on health and wellness, functional beverages offer targeted benefits, such as improved immunity, energy enhancement, and stress reduction.
        From adaptogenic teas to collagen-infused waters, the market is brimming with innovative formulations designed to address specific consumer needs. As individuals become increasingly proactive about their health, the demand for functional beverages is expected to soar.`,
      },
      {
        title: "#2. Plant-Powered Revolution",
        content: `The plant-based movement continues to gain momentum, extending its influence to the beverage sector. Consumers are increasingly drawn to plant-powered alternatives to traditional dairy and animal-based products. Plant-based milk alternatives, such as almond, soy, oat, and coconut milk, have become household staples, offering a dairy-free option for vegans, lactose-intolerant individuals, and health-conscious consumers alike.Beyond milk substitutes, plant-based innovations are permeating other beverage categories, including juices, smoothies, and even alcoholic drinks. With sustainability and ethical considerations driving consumer choices, plant-based beverages are poised for continued growth.`,
      },
      {
        title: "#3. Mindful Consumption and Sustainability",
        content: `In an era marked by environmental awareness, consumers are scrutinizing the sustainability practices of beverage manufacturers. From eco-friendly packaging to ethically sourced ingredients, sustainability has become a cornerstone of brand identity.  are gravitating towards brands that demonstrate a commitment to environmental stewardship, opting for products with minimal ecological footprint. As the beverage industry grapples with packaging waste and carbon emissions, sustainable practices are no longer optional but imperative for long-term viability.`,
      },
      {
        title: "#4. Hyper-Personalization and Customization",
        content: `In an age of customization, consumers crave beverages tailored to their individual preferences and dietary requirements. Whether it's personalized nutrition shakes or made-to-order smoothie blends, customization is reshaping the beverage landscape.
        Technological advancements and data analytics enable manufacturers to offer personalized solutions, catering to diverse taste preferences and dietary restrictions. By harnessing the power of customization, beverage brands can forge deeper connections with consumers and foster brand loyalty.`,
      },
      {
        title: "#5. Navigating the Dynamic Market with Swastikaa",
        content: `Amidst evolving consumer preferences and market dynamics, beverage manufacturers need a strategic partner to navigate the complexities of the industry. Enter Swastikaa, a leading platform dedicated to empowering beverage manufacturers and distributors. In conclusion, the beverage industry is undergoing a period of profound transformation, driven by shifting consumer preferences and emerging trends. By embracing innovation, sustainability, and consumer-centric strategies, beverage manufacturers can position themselves for success in an ever-evolving landscape.`,
      },
      {
        title: "#6. Challenges and Opportunities",
        content: `Ensuring a steady supply, educating farmers, and creating market awareness are crucial. Government initiatives and industry-academic collaborations can drive innovation.`,
      },
    ],
  },

];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold text-gray-700">Blog not found!</h1>
        <Link to="/" className="text-indigo-600 text-lg mt-4 inline-block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center text-center overflow-hidden relative"
        style={{
          minHeight: 500,
          backgroundImage: `url(${blog.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Blog Content Section */}
      <div className='flex gap-10'>
        <div className="max-w-3xl mx-aut bg-white p-5 sm:p-10 rounded shadow-lg relative mt-[-90px]">
          <h1 className="text-gray-900 font-bold text-3xl mb-5 border-b-2 pb-3">
            {blog.title}
          </h1>
          <p className="text-gray-700 text-xs mb-5">
            Written By:{" "}
            <span className="text-indigo-600 font-medium">{blog.author}</span>
          </p>
          <p className="text-base leading-8 my-5 text-justify">{blog.content}</p>

          {/* Dynamic Sections */}
          {blog.sections.map((section, index) => (
            <div key={index} className="my-5">
              <h3 className="text-2xl font-bold my-5 text-black ">
                {section.title}
              </h3>
              <p className="text-base leading-8 my-5 text-justify">{section.content}</p>
              {section.items && (
                <ul className="list-disc ml-8">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-base leading-8 my-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className='flex justify-between'>
            <p className="text-base leading-8 my-5 border-t-2 pt-3">
              For more insights into jackfruit processing, visit -{" "}
              <Link
                to="/"
                className="text-md text-primaryRed font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Swastika.com
              </Link>
            </p>
            <p className='text-base leading-8 my-5 border-t-2 pt-3'>
              <Link to="/blog"
                className='text-md text-primaryRed font-medium hover:text-gray-900 transition duration-500 ease-in-out'
              >
                Go to Blog Page
              </Link>
            </p>
          </div>
        </div>
        <div className="relative py-3 sm:max-w-xl h-fit sm:mx-auto mt-20">
          <div className="absolute inset-0 card-section shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div className="relative px-2 py-10 card-section shadow-lg sm:rounded-3xl sm:p-10">
            <div className="text-center pb-6 text-white">
              <h1 className="text-3xl">Contact Us!</h1>
              <p className="">
                Fill up the form below to send us a message.
              </p>
            </div>
            <form>
              <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" name="name" />
              <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email" />
              <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Subject" name="_subject" />
              <textarea className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Type your message here..." name="message" style={{ height: 121 }} defaultValue={""} />
              <div className="flex justify-between">
                <input className="shadow all-btn font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" defaultValue="Send ➤" />
                <input className="shadow all-btn font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
