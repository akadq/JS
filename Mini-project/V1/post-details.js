const urlPar = new URLSearchParams(window.location.search);
const userId = urlPar.get('userid');
const postId = urlPar.get('postid');
const postDetails = document.getElementById('post-details');
const postComments = document.getElementById('post-comments');
let commentDiv;


fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(res => res.json())
    .then(info => {
        info.forEach((post) => {
            if (post.id === +postId) {
                const postTitle = document.createElement('li');
                const postBody = document.createElement('li');
                postTitle.innerHTML = `Title: ${post.title}`;
                postBody.innerHTML = `Body: ${post.body}`;
                postDetails.append(postTitle, postBody);
            }
        })
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res => res.json())
    .then(comments => {
        comments.forEach((comment) => {
            commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            const commentName = document.createElement('li');
            const commentEmail = document.createElement('li');
            const commentBody = document.createElement('li');
            commentName.innerHTML = `Name: ${comment.name}`;
            commentEmail.innerHTML = `Email: ${comment.email}`;
            commentBody.innerHTML = `Body: ${comment.body}`;
            commentDiv.append(commentName, commentEmail, commentBody);
            document.body.appendChild(commentDiv);
        });
    })