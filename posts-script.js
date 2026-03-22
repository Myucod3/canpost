document.getElementById('upl-form').addEventListener("submit", e => {
    e.preventDefault();

    savePosts();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function savePosts(){
    const imgData = canvas.toDataURL('image/png');
    document.getElementById('upl-pg').innerHTML = '<h3>Uploads</h3>';
    
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(imgData);

    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts(){
    const post = JSON.parse(localStorage.getItem('posts') || '[]');

    post.forEach(item => {
        const img = document.createElement('img');
        img.src = item;
        img.id = "uploaded-post"
        document.getElementById('upl-pg').appendChild(img);
    })
}

window.onload = function(){
    loadPosts();
}
