const urlPar = new URLSearchParams(window.location.search);
const userId = urlPar.get('id');
let username;

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {
        const userDetails = document.getElementById('user-details');
        username = `${user.name}`;
        userDetails.innerHTML = `<p>ID: ${user.id}</p>
                    <p>Name: ${user.name}</p>
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p>Geo: Lat ${user.address.geo.lat}, Lng ${user.address.geo.lng}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                    <p>Company: ${user.company.name}</p>
                    <p>Catch Phrase: ${user.company.catchPhrase}</p>
                    <p>BS: ${user.company.bs}</p>`;
    });

const btnPosts = document.getElementById('post-titles');
btnPosts.addEventListener('click', posts);


function posts() {
    btnPosts.disabled = true;
    const postsList = document.getElementById('posts-list')
    const postsTitle = document.createElement('h4');
    postsTitle.innerHTML = `${username} post titles:`;
    document.body.appendChild(postsTitle);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postsElement = document.createElement('li');
                const postBtn = document.createElement('button');
                postBtn.innerHTML = 'Post details';
                postBtn.addEventListener('click', (btn) => {
                    window.open(`post-details.html?postid=${post.id}&userid=${post.userId}`);
                })
                postsElement.innerHTML = post.title;
                postsElement.classList.add('post-element');
                postBtn.classList.add('post-btn');
                postsElement.appendChild(postBtn);
                postsList.appendChild(postsElement);
            })
            document.body.appendChild(postsList);
        })
}