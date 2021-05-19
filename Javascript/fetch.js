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
  let comment = getCommentData();
  //console.log(comment)
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(comment),
  })
    .then(function (response) {
      console.log(response.json());
    })
    .catch(function (errMsg) {
      console.log(errMsg);
    });
  //console.log(returnValue);
}

function getAllComments() {
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(function (response) {
      let output = response.json();
      return output;
    })
    .then(function (output) {
      let commentsTable = `<table>
        <tr>
            <th>Post ID</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
        </tr>`;
        
      output.map((comment, id) => {
        commentsTable = commentsTable +  `<tr>
                <td>${comment.postId}</td>
                <td>${comment.id}</td>
                <td>${comment.name}</td>
                <td>${comment.email}</td>
                <td>${comment.body}</td>
            </tr>`;
      });
      document.getElementById("output").innerHTML = commentsTable;
    })
    .catch(function(errMsg){
        console.log(errMsg)
    })
}
