let email_error = true;
let password_error = true;
function handleEmail(){
    const regex = /^(?=.*@)(?=.*\.).{3,}$/;
    let pElement = document.getElementById("error1")
    let input = document.getElementById("email").value
    if(regex.test(input)){
        pElement.style.display="none"
        email_error = false
        render_success()
    }
    else{
        email_error = true
        pElement.style.display = "block"
        render_success()
    }
}
function handlePassword(){
    const regex = /^.{8,}$/;
    let pElement = document.getElementById("error2")
    let input = document.getElementById("password").value
    if(regex.test(input)){
        pElement.style.display="none"
        password_error = false
        render_success()
    }
    else{
        password_error = true
        pElement.style.display = "block"
        render_success()
    }
}
function render_success(){
    if(email_error == false && password_error==false){
        let container = document.getElementById("successContainer")
        let p = document.createElement("p")
        p.setAttribute("id","success")
        p.innerHTML = "All good to go"
        container.appendChild(p)
    }
    else{
        let p = document.getElementById("success")
        p.remove()
    }
}
function handleSubmit(event){
    event.preventDefault()
    let text = "Are you sure you want to submit?"
    if(confirm(text)==true){
        alert("successful signup!")
        event.preventDefault()
    }
    else{
        location.reload()
    }
}