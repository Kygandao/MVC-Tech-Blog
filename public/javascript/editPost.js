async function editPost(e) {
  e.preventDefault();

  const title = document.getElementById('edit-post-title').value;
  const post_content = document.getElementById('edit-post-post-content-field').value.trim();
  const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({
          title,
          post_content
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  if (response.ok) {
      document.location.replace('/dashboard');
  } else {
      alert(response.statusText);
  }
}

document.getElementsByClassName('edit-form').addEventListener('submit', editPost);