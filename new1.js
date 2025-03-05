let user = document.getElementById('user_text');
let btn = document.getElementById('save');
let dis = document.getElementById('dis');
let j

function display (){
    dis.innerHTML +=`<h1>${user.value}</h1>`
    j = dis.innerHTML
    localStorage.setItem("j",JSON.stringify(j))
}


j = JSON.parse(localStorage.getItem("j"))
dis.innerHTML = j

