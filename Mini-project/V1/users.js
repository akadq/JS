let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

users.then(users => {
    users.forEach(user => {
        const usersDiv = document.getElementById('content');
        const userDiv = document.createElement('div');
        userDiv.className = 'userDiv';
        const credentials = `${user.id} ${user.name}`;
        const linkCredential = document.createElement('a');
        linkCredential.href = `user-details.html?id=${user.id}`;
        linkCredential.textContent = credentials;
        userDiv.appendChild(linkCredential);
        usersDiv.appendChild(userDiv);
    });
})