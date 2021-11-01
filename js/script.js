fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
 .then((data) =>{
     console.log(data);
     let play = document.getElementById('layout')
     let html = "";
     data.forEach(element => {
         html +=`
         
         <div class="col-md-4 mb-3">
         <a href="post.html" class="text-decoration-none text-black" onclick="myfucntion(${element.id})">
         <div class="card h-100 shadow">
             <div class="card-body">
                <div class="d-flex justify-content-end">
                    <h3 class="text-primary">${element.id}</h3>
                </div>
                   <h4 class="title mb-3">${element.title}</h4>
                   <p><i>${element.body}</i></p>
             </div>
         </div>
         </a>
     </div>
         `
     });
     play.innerHTML = html;
 });

function myfucntion(num) {
    localStorage.setItem('postid', num );
}