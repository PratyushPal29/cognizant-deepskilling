import React from "react";

function BlogDetails({ blogs }) {
  return (
    <div>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
          <h3>{blog.subheading}</h3>
          <p>{blog.subauthor}</p>
          <p>{blog.note}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
