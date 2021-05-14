function getCommentData() {
  let postId = document.getElementById("postId").value;
  let email = document.getElementById("email").value;
  let personName = document.getElementById("personName").value;
  let comment = document.getElementById("content").value;

  console.log(postId, email, personName, comment);
}
