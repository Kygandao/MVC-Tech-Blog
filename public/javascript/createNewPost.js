async function createNewPost(e) {
    e.preventDefault();
  
    document.location.replace('/dashboard/new')
  }
  
  document.querySelector('#new-post-btn').addEventListener('click', createNewPost);