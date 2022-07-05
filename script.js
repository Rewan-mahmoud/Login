var nameInput = document.querySelector("#nameInput")
var emailInput = document.querySelector("#emailInput")
var passInput = document.querySelector("#passInput")
var signUp = document.querySelector("#btnSignUp")
var emailLogin = document.querySelector("#emailLogin")
var passLogin = document.querySelector("#passLogin")
var loginBtn=document.querySelector("#loginBtn")
var SignInBtn = document.querySelector("#SignInBtn")
var SignUp = document.querySelector("#SignUp")
var logOut=document.querySelector("#logOut")
var container=[];

if (localStorage.getItem("info") !==null)
{
container = JSON.parse(localStorage.getItem("info")) 
}
else{
    container=[];
}

btnSignUp.addEventListener("click",function(){
if (Validation()==true ){
   
    var inputsContainer={
        name:nameInput.value,
        email:emailInput.value,
        pass:passInput.value
        };
       if(checkExists()!==true){
        container.push(inputsContainer);
        localStorage.setItem("info", JSON.stringify(container));
       }
      

   
    
}
 

});


SignInBtn.addEventListener("click" , function(){

    document.getElementById("login").classList.replace("d-none","d-block" )
    document.getElementById("register").classList.replace("d-block","d-none" )

  
})
SignUp.addEventListener("click" , function(){

    document.getElementById("register").classList.replace( "d-none","d-block")
    document.getElementById("login").classList.replace( "d-block","d-none" )

})




loginBtn.addEventListener("click" , function()
{ 
     for(i=0 ;i<container.length ;i++)
    {
        if(container[i].email==emailLogin.value && container[i].pass==passLogin.value)
        {       
            document.getElementById("home").classList.replace("d-none" ,"d-block")
            document.getElementById("login").classList.replace("d-block","d-none")
            document.getElementById("loginError").classList.replace("d-block" ,"d-none")
            document.getElementById('nameWelcome').innerHTML= ( "Welcome "+container[i].name)
        }
          if(emailLogin.value=="" || passLogin.value=="")
         {

          document.getElementById("errors").classList.replace("d-none","d-block")
          document.getElementById("loginError").classList.replace("d-block","d-none")
      
         }
        else{
            document.getElementById("loginError").classList.replace("d-none","d-block")
            document.getElementById("errors").classList.replace("d-block","d-none")
        }
     
    }

    })

logOut.addEventListener("click" ,function(){
    document.getElementById("home").classList.add("d-none")
    document.getElementById("login").classList.remove("d-none")
}
)

function Validation()
{

if ((nameInput.value)!==""&& (emailInput.value)!==""&&(passInput.value)!=="")
{
    document.getElementById("error").classList.replace("d-block" , "d-none")
    document.getElementById("Success").classList.replace("d-none" , "d-block")
    return true;
}
else {
  
    document.getElementById("error").classList.replace("d-none" , "d-block")
    document.getElementById("Success").classList.replace("d-block","d-none")
    return false
}}




function checkExists(){
    for(var i=0; i<container.length; i++)
{
   
    if(container[i].email==emailInput.value)
    {
        document.getElementById("Success").classList.replace("d-block","d-none")
        document.getElementById("alreadyExists").classList.replace("d-none","d-block")
       return true
      
    }
    else{
        document.getElementById("Success").classList.replace("d-none","d-block")
        document.getElementById("alreadyExists").classList.replace("d-block","d-none")
    }

}
}

