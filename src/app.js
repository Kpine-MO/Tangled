
function showMenu() {
 let show = document.querySelector('.magic');

 if (show.style.display == 'none') {
    console.log('hello')
    show.style.display="block";
 } else {
    show.style.display="none";
 }

}

document.querySelector('#sign-up').addEventListener('click', function() {
   let show = document.querySelector('.sign-up-container');

   if (show.style.display == 'none') {
      console.log('hello')
      show.style.display="block";
   } else {
      show.style.display="none";
   }
})

document.querySelector("#profile-btn").addEventListener("click",function(e) {
   e.preventDefault();
   fetch('https://jsonplaceholder.typicode.com/posts')
     .then((res) => res.text())
     .then((data) => {
      var object= JSON.parse(data);
      console.log(object)
     })
     
   
})
























