import { NextResponse } from 'next/server';

// In-memory storage for simplicity (for now)
const blogs: Array<{ title: string; description: string; image?: string; initial: string; author:string }> = [];

export async function POST(request: Request) {
    try {
      const { title, description, image, initial, author } = await request.json();
      console.log('Blog Data:', {
        title,
        description,
        image,
        author,
        initial,
      });
      if (!title || !description || !initial || !author) {
        return NextResponse.json({ error: 'Title and description are required.' }, { status: 400 });
      }
  
      if (image && typeof image !== 'string') {
        return NextResponse.json({ error: 'Image must be a valid string URL.' }, { status: 400 });
      }
  
      // Add the new blog to the in-memory storage
      const newBlog = { title, description, image, initial, author };
      blogs.push(newBlog);
  
      return NextResponse.json({ message: 'Blog created successfully!', blog: newBlog });
    } catch {
      return NextResponse.json({ message: 'Failed to create blog' }, { status: 500 });
    }
  }
  
  export async function GET() {
    // Assign default image for blogs without an image
    const blogsWithDefaultImages = blogs.map(blog => ({
      ...blog,
      image: blog.image || '/default-placeholder.png', // Ensure this file is in the `public` directory
    }));
  
    return NextResponse.json(blogsWithDefaultImages);
  }