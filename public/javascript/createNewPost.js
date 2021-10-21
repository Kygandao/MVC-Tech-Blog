async function createNewPost(e) {
    e.preventDefault();

    document.location.replace('/dashboard/new')
}

document.querySelector('#new-post').addEventListener('click', createNewPost);