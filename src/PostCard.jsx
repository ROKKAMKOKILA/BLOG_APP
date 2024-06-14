import React from "react";

const PostCard = ({ post, deletePost, setCurrentPost }) => {
  const { _id, title, content, imageUrl } = post;

  return (
    <div className="postcard">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <h2 className="postcard-title">{title}</h2>
      <p className="postcard-content">{content}</p>
      <button onClick={() => setCurrentPost(post)}>Edit</button>
      <button onClick={() => deletePost(_id)}>Delete</button>
    </div>
  );
};

export default PostCard;
