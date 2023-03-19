let comments = [];
loadComments();

document.getElementById("comment-add").onclick = function () {
  let commentName = document.getElementById("comment-name");
  let commentBody = document.getElementById("comment-body");

  let comment = {
    name: commentName.value,
    body: commentBody.value,
    time: Math.floor(Date.now() / 1000),
  };

  if (commentName.value == "") {
    alert("Введите ваше имя");
  } else if (commentBody.value == "") {
    alert("Оставьте комментарий");
  } else {
    comments.push(comment);
  }

  saveComments();
  showComments();
};

document.getElementById("dell").onclick = function () {
  let commentName = document.getElementById("comment-name");
  let commentBody = document.getElementById("comment-body");

  let comment = {
    name: commentName.value,
    body: commentBody.value,
    time: Math.floor(Date.now() / 1000),
  };

  comments.pop(comment);
  saveComments();
  showComments();
};

function saveComments() {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
  if (localStorage.getItem("comments"))
    comments = JSON.parse(localStorage.getItem("comments"));
  showComments();
}

function showComments() {
  let commentField = document.getElementById("comment-field");
  let out = "";

  comments.forEach(function (item) {
    out += `<p class="text-right small"><em>${timeConverter(
      item.time
    )}</em></p>`;
    out += `<p class="alert alert-primary" role="alert">${item.name}</p>`;
    out += `<p class="alert alert-success" role="alert">${item.body}</p>`;
  });
  commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}
