const commentName = document.querySelector(".input-block__name-input");
const commentMessage = document.querySelector(".input-block__message-input");
const addCommentButton = document.querySelector(".input-block__btn");
const outputComment = document.querySelector(".comments");

addCommentButton.addEventListener("click", addComment);
commentName.addEventListener("change", validateName);
commentMessage.addEventListener("change", validateMessage);

function addComment() {
  const name = commentName.value;
  const message = commentMessage.value;

  if (!name) {
    commentName.classList.add("error");
    return false;
  }

  if (!message) {
    commentMessage.classList.add("error");
    return false;
  }

  outputComment.innerHTML =
    outputComment.innerHTML +
    `<div class = "comments-block">
  <p class = "comments-block__comment-message">${message}</p>
  <p class = "comments-block__comment-name">${name}</p>
  </div>
  `;

  commentName.value = "";
  commentMessage.value = "";
}

function validateName() {
  commentName.classList.remove("error");
}

function validateMessage() {
  commentMessage.classList.remove("error");
}
