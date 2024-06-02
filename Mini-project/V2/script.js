fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(result => {
        const content = document.getElementById('content');
        result.forEach(user => {
            const innerDiv = document.createElement('div')
            const btn = document.createElement('button');
            btn.innerHTML = 'Details';
            btn.className = 'btn';
            innerDiv.className = 'innerdiv'
            innerDiv.innerHTML = `<h3>ID: ${user.id}</h3>
                            <h3>Name: ${user.name}</h3>`;
            btn.onclick = (e) => {
                // e.preventDefault();
                localStorage.setItem('looking', user.id);
                window.open('user-details.html', '_parent');
            }
            innerDiv.append(btn);
            content.append(innerDiv);
        })
    });