// Get user ID from URL parameters
const urlPar = new URLSearchParams(window.location.search);
const userId = urlPar.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userDetails = document.getElementById('user-details');
        userDetails.innerHTML = `
                    <p>ID: ${user.id}</p>
                    <p>Name: ${user.name}</p>
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p>Geo: Lat ${user.address.geo.lat}, Lng ${user.address.geo.lng}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                    <p>Company: ${user.company.name}</p>
                    <p>Catch Phrase: ${user.company.catchPhrase}</p>
                    <p>BS: ${user.company.bs}</p>
                `;
    })