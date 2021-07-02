import React from "react";
import { useParams } from "react-router-dom";

function BlogContent({topics}) {
  const topic = useParams();
  //console.log(topic);
  return <div>{topic.topicId}</div>;
}

export default BlogContent;
