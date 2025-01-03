'use client';
import Header from '../components/header';
import React, { useState } from 'react';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [initial, setInitial] = useState('');
  const [author, setAuthor] = useState('');


  // Function to handle blog submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !initial || !author) {
      alert('Please provide a title, description, initial and author.');
      return;
    }

    const blogData = {
      title,
      description,
      initial,
      author,
    };

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        alert('Blog posted successfully!');
        console.log('Posted blog:', blogData);
        
        setTitle('');
        setDescription('');
        setInitial('');
        setAuthor('');
      } else {
        const result = await response.json();
        alert(result.error || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error posting blog:', error);
      alert('Error posting blog.');
    }
  }; 


  return (
    <main>
      <Header/>
      <video
          autoPlay
          poster='green.jpg'
          preload='metadata'
          loop
          muted
          className="md:hidden h-[400px] sticky w-screen object-cover"
          src="createblogvideo.mp4"
        ></video>
    
      <div  className='flex justify-between'>
    <div style={{ padding: '2rem' }}>
      <h1 className="text-[60px] font-bold font-['Poppins'] leading-[65px]">Create Your Blog</h1>
      <form onSubmit={handleSubmit}>
      <div className='mt-16'>
          <label className="text-[16px] font-medium font-['Poppins'] "> Add the initial of your name here!</label>
          <input
            type="text"
            value={initial}
            onChange={(e) => setInitial(e.target.value)}
            required
            placeholder='Eg. M for Maya'
            className='flex flex-col border-b-[1px] focus:outline-none mt-5 text-base'
          />
        </div>
      <div className='mt-10'>
          <label className="text-[16px] font-medium font-['Poppins'] "> {`What's your name?`}</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            placeholder='Eg. Maya'
            className='flex flex-col border-b-[1px] focus:outline-none mt-5 '
          />
        </div>
        <div className='mt-10'>
          <label className="text-[16px] font-medium font-['Poppins'] "> What is your blog about?</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder='Trip to South'
            className='flex flex-col border-b-[1px] focus:outline-none mt-5 '
          />
        </div>
        <div className='flex flex-col mt-10'>
          <label className="text-[16px] font-medium font-['Poppins'] ">Write your blog</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder='Enter your blog content...'
            className='flex flex-col border-b-[1px] focus:outline-none pb-56 mt-3'
          />
        </div>
       
        <button
          className='p-4 px-8 bg-[#DDBD97] font-bold rounded-full mt-10'
          type="submit"
        >
          Post Blog
        </button>
      </form>
    </div>

    {/* Side Video */}
    <div>
      <img className=" hidden md:block h-[1100px] sticky w-[800px] object-cover" src="road.jpg" alt="" />

    </div>
    </div>
    </main>
  );
};

export default CreateBlog;
