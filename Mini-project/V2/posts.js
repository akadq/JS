const postId = localStorage.getItem('postId');
// debugger;
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(value => value.json())
    .then(value => {
        const content = document.getElementById('content');
        value.forEach(val => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML =
                `<p>PostID: </p> ${val.postId}
                <p>ID: </p> ${val.id}
                <p>Name: </p> ${val.name}
                <p>Email: </p> ${val.email}
                <p>Body: </p>${val.body}`;
            content.append(item);
        })
    })