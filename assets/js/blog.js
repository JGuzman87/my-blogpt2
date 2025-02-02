const backBtn = document.querySelector("#back-btn");
const modeBtn = document.querySelector("#mode-btn");

document.addEventListener("DOMContentLoaded", function () {
  function renderBlog() {
    let blog = JSON.parse(localStorage.getItem("blogPost")) ;
   
    if (blog !== null) {
      document.getElementById("saved-title").textContent = blog.title;
      document.getElementById("saved-username").textContent = blog.username;
      document.getElementById("saved-content").textContent = blog.content;
    }
  }



  renderBlog();
});

backBtn.addEventListener('click', () => {
  window.location.href = "index.html";
  console.log('it works');
});

modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.footer.classList.toggle('dark-mode');
});