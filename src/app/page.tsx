"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";

export default function Home() {
  const [blogs, setBlogs] = useState<
    Array<{
      title: string;
      description: string;
      initial: string;
      author: string;
      
    }>
  >([]);

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main>
      <Header />
      {/* Hero Section */}
      <div>
        <video
          autoPlay
          loop
          muted
          className="h-[500px] w-screen object-cover"
          src="landscape.mp4"
        ></video>
        <div>
          <div className="flex items-center absolute top-[270px] left-[75px]">
            <img className="w-28 -mt-24 -ml-16 md:m-0" src="m.png" alt="Logo" />
            <p className="text-[10px] font-medium text-white tracking-widest font-['Poppins'] md:-ml-5 w-28 -mt-24 md:mt-0">
              - MARYAM
            </p>
          </div>
          <h1 className="md:text-[72px] text-[50px] -mt-[360px] ml-10 md:m-0 font-medium font-['Poppins'] text-white absolute md:top-[410px] md:left-[100px]">
            Not all who wander are lost
          </h1>
          <p className="absolute -mt-[220px] ml-12 md:m-0 md:top-[510px] text-white text-[12px] font-bold md:left-[105px] ">
            by J.R.R. Tolkien
          </p>
          <p className="md:text-2xl text-lg ml-10 md:m-0 -mt-[170px] md:left-[100px] text-white absolute md:top-[560px] font-['Poppins']">
            A travel blog focused on discovering new places, cultures,
            experiences,
            <br /> and hidden gems with purpose.
          </p>
          <button className="text-[12px] -mt-[70px] ml-10 md:m-0 font-semibold tracking-widest p-3 px-8 rounded-full bg-[#DDBD97] text-white absolute md:top-[650px] md:left-[100px]">
            READ MORE
          </button>
        </div>
      </div>

      {/* Create Blog Section */}
      <div className="flex flex-col justify-center items-center mt-20">
        <h2 className="text-[60px] font-bold font-['Poppins'] leading-[65px]">
          Create a blog <br /> worth sharing
        </h2>
        <p className="text-center font-['Poppins'] text-[16px] mt-3 leading-loose">
          Get a full suite of intuitive design features and powerful marketing
          tools
          <br /> to create a unique blog that leaves a lasting impression.
        </p>
        <Link href="/create-blog">
          <button className="p-4 px-8 bg-[#DDBD97] rounded-full font-bold text-white m-5">
            Start Blogging
          </button>
        </Link>
      </div>

      {/* Blogs Section */}
      <div className="p-4 md:ml-32 md:mr-32 ml-3 mr-3">
        <h1 className="md:text-[60px] text-4xl  text-[#DDBD97] font-bold  mt-20 mb-10">
          Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="border-b-2 rounded  overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-start gap-x-3">
                  <div className="p-2 px-4 text-[18px] font-['Caveat'] text-white rounded-full bg-[#DDBD97]">
                    {blog.initial.toUpperCase()}
                  </div>
                  <p> - </p>
                  <div className="text-[13px] tracking-wider hover:underline underline-offset-4">
                    {blog.author.toUpperCase()}
                  </div>
                </div>
                <h2 className="text-[40px] font-['Poppins'] font-bold mb-2 mt-3">
                  {blog.title}
                </h2>
                <p className="text-gray-600">
                  {blog.description.split(" ").slice(0, 50).join(" ")}...
                </p>
               <Link href="/allblogs">
                <div className="mt-9 mb-3">
                  <a
                    
                    className="text-white bg-[#DDBD97] text-[12px] font-semibold  px-6 py-3 rounded-full hover:bg-[#c9ab8a]"
                  >
                    READ MORE
                  </a>
                </div>
                </Link>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </main>
  );
}
