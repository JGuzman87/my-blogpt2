const userName = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitBtn = document.getElementById('submit');

function storeBlog() {
  const blogPost = {
    username: userName.value,
    title: title.value,
    content: content.value,
  };

  localStorage.setItem('blogPost', JSON.stringify(blogPost));
}

function renderBlog() {

}


// localStorage.getItem()

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    storeBlog();
    console.log('it works')
})