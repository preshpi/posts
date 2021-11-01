

const post =  localStorage.getItem('postid')

const url = `https://jsonplaceholder.typicode.com/posts/${post}`
fetch(url)
.then(response => response.json())
.then((data) => {
    console.log(data);
    let play = document.getElementById('posts-layout')
    let html = `<div class="">
        <div class=" text-center p-3 card">
        <h1 class="">${data.id}</h1>
              <h5 class="title mb-3">${data.title}</h5>
              <p><i>${data.body}</i></p>
        </div>
        <div class="py-2">
        <a href="index.html"><button class='btn btn-lg btn-primary'>Back</button></a>
        </div>
</div>`
play.innerHTML = html;
})