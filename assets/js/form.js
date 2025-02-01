const modeBtn = document.querySelector("#mode-btn");

document.addEventListener("DOMContentLoaded", function () {
  const userName = document.getElementById("username");
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const submitBtn = document.getElementById("submit");

  function storeBlog() {
    const blogPost = {
      username: userName.value,
      title: title.value,
      content: content.value,
    };

    localStorage.setItem("blogPost", JSON.stringify(blogPost));

    // Redirect to the blog page
    window.location.href = "blog.html";
  }

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    storeBlog();
  });
});

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});