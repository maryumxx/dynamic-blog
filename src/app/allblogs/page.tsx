"use client";
import CommentSection from "../components/comment";
import Header from "../components/header";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AllBlogs() {
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
      <Link href="/create-blog">
      <button className="fixed bottom-12 right-4 md:right-12 bg-black text-white w-14 h-14 md:w-20 md:h-20 pt-1 md:pt-2 text-4xl md:text-6xl rounded-full  hover:text-[#dab07c]">
    +
  </button>
  </Link>
      <div className="p-4 md:ml-32 md:mr-32 mr-3 ml-3">
        <h1 className="text-[60px] text-[#DDBD97] font-bold mb-4">Featured</h1>

        <div className="grid grid-cols-1 gap-6">
          <div className=" rounded  overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-start gap-x-3">
                <div className="p-2 px-4 text-[18px] font-['Caveat'] text-white rounded-full bg-[#DDBD97]">
                  V
                </div>
                <p> - </p>
                <div className="text-[13px] tracking-wider hover:underline underline-offset-4">
                  VULPUTATE
                </div>
              </div>
              <h2 className="text-[40px] font-['Poppins'] font-bold mb-2 mt-3">
                Not All Who Wander Are Lost
              </h2>
              <p className="text-gray-600">
                They say the best journeys answer questions that in the
                beginning, you {`didn’t`} even think to ask. For me, this was
                never truer than during my recent adventure to Hunza Valley—a
                place of awe-inspiring beauty tucked into the heart of
                {`Pakistan’s`} northern mountains. This trip {`wasn’t`} planned; it was
                the result of an impulsive need to escape the {`city’s`} concrete
                confines and reconnect with nature. Little did I know, it would
                be a journey that reshaped my perspective on life itself.
                <br />
                It started with a backpack, a sturdy pair of hiking boots, and a
                one-way ticket to Gilgit. The winding roads of the Karakoram
                Highway, flanked by towering peaks that seem to pierce the
                heavens, were a humbling prelude to what awaited me. The
                {`journey’s`} rhythm was set by the gentle hum of the jeep engine,
                punctuated by the occasional gasp as yet another snow-capped
                giant came into view. I arrived in Karimabad, the heart of
                Hunza, late in the evening. The air was crisp and tinged with
                the scent of apricot blossoms. The stars, unblemished by city
                lights, blanketed the sky like a celestial roadmap—a reminder of
                how small we truly are in the grand scheme of things.
                <br /> <br />
                Hunza is not just about landscapes; {`it’s`} about its people. I
                stayed with a local family who welcomed me as if I were an old
                friend returning home. Over cups of freshly brewed chai, they
                shared tales of their ancestors, who thrived in these rugged
                terrains. Their hospitality was as warm as the sunlit mornings,
                and their stories painted a vivid picture of resilience and
                harmony with nature. One evening, the {`family’s`} matriarch
                shared a simple yet profound observation: “The mountains teach
                patience. They remind you to wait, to watch, to listen.” Her
                words lingered with me, becoming a mantra for the days ahead.
                <br /> <br />
                {`Hunza’s`} natural beauty is unparalleled. From the terraced
                fields that cascade down the valley to the emerald waters of
                Attabad Lake, every corner feels like a masterpiece painted by
                an unseen hand. But it was the trek to Rakaposhi Base Camp that
                truly tested and rewarded me. The trail was challenging—rocky,
                steep, and at times, unforgiving. Yet, with every step, I felt a
                deeper connection to the earth beneath my feet. The sight of{" "}
                {`Rakaposhi’s`} gleaming facade, standing tall against an azure
                sky, was nothing short of majestic. In that moment, every ache,
                every bead of sweat, felt worth it. On my way back, I paused at
                a quiet stream to rest. The water, clear as glass, mirrored the
                surrounding peaks. It struck me then: this {`wasn’t`} just a
                physical journey; it was a spiritual one. Each mountain, each
                river, seemed to whisper truths about strength, resilience, and
                the transient nature of life.
                <br /> <br />
                As I prepared to leave Hunza, I found myself reluctant to say
                goodbye. This {`wasn’t`} just a place; it was an experience—one
                that left an indelible mark on my soul. I had come seeking
                escape, but I found so much more: clarity, inspiration, and a
                profound respect for the simpler, quieter ways of life. If{" "}
                {`there’s`} one thing I learned from this journey, {`it’s`} that
                wandering {`isn’t`} about getting lost; {`it’s`} about finding
                what truly matters. In Hunza, I discovered that sometimes, the
                best way to move forward is to pause and let the world come to
                you. And in doing so, you might just find yourself. So{" "}
                {`here’s`} to the mountains, the stars, and the stories they
                inspire. Not all who wander are lost; some of us are just
                finding our way back home.
              </p>
              <hr className="mt-5" />
              <div className="flex items-center gap-x-4 mt-3">
                <img className="w-[36px] " src="like.png" alt="Like" />
                <img className="w-[50px] " src="comment.png" alt="comment" />
              </div>
              <div>
                <CommentSection />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-[60px] text-[#DDBD97] font-bold mb-4">
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
                <p className="text-gray-600">{blog.description}</p>
              </div>
              <hr className="mt-5" />
              <div className="flex items-center gap-x-4 mt-3">
                <img className="w-[36px] " src="like.png" alt="Like" />
                <img className="w-[50px] " src="comment.png" alt="comment" />
              </div>
              <div>
                <CommentSection />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
