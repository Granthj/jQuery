$(document).ready(function(){
            
    let isValid = true;
    $("#myForm").submit(function(event){
        event.preventDefault();

        //  Name
        const name = $("#name").val();
        console.log(name);
        if(name.trim()===""){
            isValid = false;
            $("#nameError").text("Name is required");
        }
        else{
            $("#nameError").text("");
        }
        // Email
        const email = $("#email").val();
        console.log(email);
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailPattern.test(email)){
            isValid = false;
            $("#emailError").text("Invalid Email address");
        }
        else{
            $("#emailError").text("");
        }
        // Password
        const password = $("#password").val();
        const passVal = /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/;

        console.log(password);
        if(!passVal.test(password)){
            isValid = false;
            $("#passwordError").text("Password must contain numbers");
        }
        else{
            $("#passwordError").text("");
        }
        console.log(isValid)
        if(isValid){
            this.submit();
        }
    })
})