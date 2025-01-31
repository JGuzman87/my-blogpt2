document.addEventListener("DOMContentLoaded", function () {
  function renderBlog() {
    const blog = JSON.parse(localStorage.getItem("blogPost"));

    if (blog) {
      document.getElementById("saved-title").textContent = blog.title;
      document.getElementById("saved-username").textContent = blog.username;
      document.getElementById("saved-content").textContent = blog.content;
    }
  }

  renderBlog();
});
