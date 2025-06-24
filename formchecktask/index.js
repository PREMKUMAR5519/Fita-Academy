
function handleSubmit(){
    let emailInput = document.getElementById("emailinput")
     let results = document.getElementById("results")
    // console.log("submiting....")
    // console.log(emailInput.value)
    if(emailInput.value== ""){
 /// failure case 
        console.log("pls fill the email")
        results.innerText = "Pls fill the email"
        emailInput.style.border = "1px solid red"
    }else{
        //success case
        console.log("form submitted")
        results.innerText = "Form submitted"


    }



}


