async function newPost(e) {
  e.preventDefault();

  const title = document.querySelector('#new-post-title-field').value;
  const post_content = document.querySelector('#new-post-content-field').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Something went wrong, please try again!');
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newPost);