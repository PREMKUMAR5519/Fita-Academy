let welcomeText = document.getElementById("welcome")
let divElement = document.querySelector("div")
let Newbody = document.getElementsByTagName('body')
// let para = document.querySelectorAll('p')
// // console.log(divElement.innerHTML)

// // console.log(para[0])


// para[0].innerText = "go back";

// para[0].style.color ="green";
// para[0].style.backgroundColor ="gray";

// para[1].setAttribute("id","updated")


// para[1].remove()
// let NewTag = document.createElement("p")

// NewTag.innerText = "This is new paragraph"

// divElement.appendChild(NewTag)






  let FirstPara = document.querySelectorAll('p')[0]
  let secondPara = document.querySelectorAll('p')[1]
  let background = document.querySelector('div')
  let FirstButton = document.getElementById('firstbutton')

function changeTheme (){

  FirstPara.style.color ="white"
  secondPara.style.color ="white"
  background.style.backgroundColor= "black"
  FirstButton.style.backgroundColor = "transparent"
  FirstButton.style.border = "1px solid white"
  FirstButton.style.color ="white"

}

function removeTheme (){

  FirstPara.style.color ="black"
  secondPara.style.color ="black"
  background.style.backgroundColor= "white"

}