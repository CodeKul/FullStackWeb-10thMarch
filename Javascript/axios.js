function getCommentData() {
  let postId = document.getElementById("postId").value;
  let email = document.getElementById("email").value;
  let personName = document.getElementById("personName").value;
  let comment = document.getElementById("content").value;

  let commentPost = {
    postId: postId,
    email: email,
    personName: personName,
    comment: comment,
  };
  return commentPost;
}

function sendComment() {
  let commentData = getCommentData();
  let p = axios.post(
    "https://jsonplaceholder.typicode.com/comments",
    JSON.stringify(commentData),
    {
      "Content-type": "application",
    }
  );
  p.then(function (response) {
    console.log(response.data);
  });
}
