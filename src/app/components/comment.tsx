import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (!newComment.trim()) return; // Prevent empty comments
    setComments([...comments, newComment]);
    setNewComment(""); // Clear the input
  };

  return (
    <div className="p-4  ">
      
      <div className="space-y-2 mb-4">
        {comments.length === 0 ? (
          <p className=""></p>
        ) : (
          comments.map((comment, index) => (
            <div
              key={index}
              className="flex gap-x-4 items-center p-2"
            >
            
            <img className="w-7" src="profile-user.png" alt="" />
              {comment}
            </div>
          ))
        )}
      </div>
      <div className="-ml-5 -mt-5  flex space-x-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 p-2 border-b-[1px]"
        />
        <button
          onClick={addComment}
          className="bg-[#DDBD97] text-white px-6 py-2 rounded "
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
