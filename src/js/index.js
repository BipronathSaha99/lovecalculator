// Love Calculator 

//function for checking the love percentage 
function checkper(){
    //to find the name and lover name initialize the value
    let name = document.getElementById("Yname").value ;
    let lname = document.getElementById("Lname").value;
    
    //To check the validation for own name
    if(name == ""){alert("Please input your name...");}
    else if(name.length<=2){alert("Plese input valid name...");}
    else if(!isNaN(name)){alert("Number is not allowed in name...");}
    //To check the validation for love name
    else if(lname == ""){alert("Please input your name...");}
    else if(lname.length<=2){alert("Plese input valid name...");}
    else if(!isNaN(lname)){alert("Number is not allowed in name...");}
    else{
        let lovePercent = Math.floor(Math.random()*100);
        document.getElementById("love_value").value = lovePercent + "%";
    }
}

//function for cleaning the percentage to restart the checking
function clearper(){
    document.getElementById("Yname").value = "";
    document.getElementById("Lname").value = "";
    document.getElementById("love_value").value = "";    
}
