
function validate(){
    const email = document.getElementById("email").value

    const input = document.querySelector("input")

    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    const pElement = document.getElementById("validity")


    if(regx.test(email)){
        pElement.innerHTML=`<em>Valid Email<\em>`;
        pElement.style.color = "green"
        input.style.border = "1px solid green"

        
    }
    else {
        pElement.innerHTML=`<em>Please provide a valid email address<\em>`;
        pElement.style.color = "red"
        input.style.border = "1px solid red"

       
    }
}





