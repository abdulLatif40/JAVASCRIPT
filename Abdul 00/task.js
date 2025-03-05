let title= document.querySelector('#movieTitle')
let publisher = document.querySelector('#moviePublisher')
let image = document.querySelector('#movieImage')

let addmovies= document.querySelector("#addMovie")
let clearmovie =document.querySelector("#clearMovie")

addmovies.addEventListener("click",addMovie);
function addMovie(){
    if (title.value==''){
        alert('please enter title')
        return
}
else if(publisher.value==''){
    alert('please enter publisher')
    return
}
else if (!image.value ){
    alert('please enter iamge url')
    return
}
let movie={
    title:title.value,
    publisher : publisher.value,
    image : image.value
}
console.log(movie);
let movies = JSON.parse(localStorage.getItem('movie')) || []
movies.push(movie)
console.log(movie)
localStorage.setItem('movies', JSON.stringify(movies))
let div = document.createElement('div')

div.classList.add('movie-item')
div.innerHTML =`<img src="${movie.image}" alt="Movie Cover" class="movieimage">
    <div class="movie-details">
        <p class="movie-name">${movie.title}</p>
        <p class="movie-publisher">by${movie.publisher}</p>
    </div>`
document.getElementById('movielist'). appendChild(div)
}

