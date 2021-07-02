import React from "react";
import { Link, Route } from "react-router-dom";
import BlogContent from "./BlogContent";
function Blog({ topics }) {
  return (
    <div>
      {topics.map((topic, id) => (
        <li key={id}>
          <Link to={`/blog/${topic.id}`}>{topic.topicName}</Link>
        </li>
      ))}
    </div>
  );
}

export default Blog;
