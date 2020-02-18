//var name = "vikrant";
//var last = "kumar";
//var dateOfBirth = "10-09-82";
//var age = 30;
//var img = 'http://coolpicks/john.jpg'
//var shootingscrore = 45.6;
//
//var loginmsg = "Welcome, "+name+". happy " +age+"th birthday.";//
//var message = "Hi my name is "+name+" and i am "+age+" years old.";
//            
//alert(message);
//console.log(loginmsg);
//

//******************** Percetage Program********************

var x = document.getElementById('numx');
var y = document.getElementById('numy');
var result = document.getElementById('result');
var form = document.getElementById('percentage');

var alert;

function calc(event){
    if (!x.value || !y.value){
            alert("Please enter values");
    }
    else{
        var numx = parseFloat(x.value);
        var numy = parseFloat(y.value);
        
        var resu = (numx*100)/numy;
        result.innerText = "Answer : " + resu + "%";
        event.preventDefault();
    }
}

form.addEventListener('submit', calc);
//************ iline style**********************
    
//form.addEventListener("submit", function(event){
//    alert("");
//});
