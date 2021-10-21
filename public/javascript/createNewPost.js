async function createNewPost(e) {
    e.preventDefault();

    document.location.replace('/dashboard/new')
}

document.getElementById('new-post').addEventListener('click', createNewPost);