import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Blog1 from "../assets/blog1.webp";
import Blog2 from "../assets/blog2.webp";
import Blog3 from "../assets/blog3.webp";
const Blog = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      image: Blog1,
      date: "Jan 01, 2025",
      title: "The Promising Future ",
      description: "Jackfruit, the largest tree-borne fruit, is gaining global recognition for its nutritional benefits and versatility, making it a...",
      route: "/blog/blog-details",
    },
    {
      id: 2,
      image: Blog2,
      date: "Feb 01, 2025",
      title: "Unveiling the Future",
      description: "Introduction The landscape of chemical manufacturing is continuously evolving, driven by advancements in technology and innovation. In...",
      route: "/blog/chemical-future",
    },
    {
      id: 3,
      image: Blog3,
      date: "Mar 01, 2025",
      title: "Sipping into the Future",
      description: "In a world where consumers are increasingly conscious of what they consume, the beverage industry finds itself at the forefront of..",
      route: "/blog/beverage-trends",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto w-[90%] px-4 sm:px-6 lg:px-8">
        <div className="heading-style pb-12 flex items-center relative">
          <span>Our Presence</span>
          <div className="ml-4 flex-grow relative">
            <hr className="absolute bottom-[-12px] h-1 bg-black w-1/6" />
          </div>
        </div>
        <div className="flex justify-center mb-16 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl"
            >
              <div className="flex items-center">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-t-2xl w-full object-cover h-[30vh]"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-primaryRed font-medium mb-3 block">
                  {blog.date}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {blog.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  {blog.description}
                </p>
                <a
                  href="javascript:;"
                  className="cursor-pointer text-lg all-btn font-semibold bottom-"
                  onClick={() => navigate(`/blog-details/${blog.id}`)}
                >
                  Read more..
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
