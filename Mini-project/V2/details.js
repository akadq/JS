const id = localStorage.getItem('looking');
let fullDetails = [];
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        output(iterate(value));
    });


const iterate = (obj) => {
    Object.keys(obj).forEach(key => {

        // console.log(`key: ${key}, value: ${obj[key]}`)
        if (typeof obj[key] !== 'object') {
            fullDetails.push([key, obj[key]]);
        }

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            iterate(obj[key])
        }
    })
    return fullDetails;
}

function output(details) {
    const content = document.getElementById('content');
    const btn = document.createElement('button');
    btn.innerHTML = 'post of current user';
    btn.id = 'mainBtn';
    details.forEach(detail => {
        const item = document.createElement('h4');
        item.innerHTML = `${detail[0]}: ${detail[1]}`;
        content.append(item);
    });
    btn.onclick = (e) => {
        btn.disabled = true;
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value => {
                // console.log(value.length);
                const wrapPosts = document.createElement('div')
                wrapPosts.id = 'wrapPosts';
                for (let i = 0; i <= value.length - 1; i++) {
                    const item = document.createElement('p');
                    item.className = 'posts';
                    // item.style.display = 'inline-block';
                    const btn2 = document.createElement('button');
                    btn2.innerHTML = 'Post details';
                    btn2.className = 'postBtn';
                    item.innerHTML = `Title ${i + 1}: ${value[i].title}`;
                    btn2.onclick = (ev => {
                        localStorage.setItem('postId', value[i].id)
                        window.open('post-details.html', '_parent');
                    })
                    item.append(btn2);
                    wrapPosts.append(item);
                    content.append(wrapPosts);
                }
            });
    }
    content.append(btn);
}