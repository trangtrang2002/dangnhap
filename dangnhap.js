var btndangnhap=document.querySelector(".btndangnhap")
var dangnhap=document.querySelectorAll(".btnlogin ")
var dangki=document.querySelectorAll(".createaccout")
var closes=document.querySelector(".close")
var login=document.querySelector(".login")
var register=document.querySelector(".register")


btndangnhap.addEventListener("click",function(){
    login.style.display="block";
        login.style.display="flex";
        closes.style.display="block";   
})
closes.addEventListener("click",function(){
    login.style.display="none";
       register.style.display="none";
       closes.style.display="none";
})
dangnhap.forEach(function(btnlogin){
    btnlogin.addEventListener("click",function(){
        login.style.display="block";
        login.style.display="flex";
        register.style.display="none";
})
    
});

dangki.forEach(function(createaccout){
    createaccout.addEventListener("click", function(){
        login.style.display="none";
        register.style.display="block";
      register.style.display="flex";
       
    })
})


    




