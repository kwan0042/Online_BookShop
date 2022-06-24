function validateForm(){
    var valid=true;
//First Name
    if(document.getElementById("fName").value == ""){
        document.getElementById("fNameError").innerText="*Please enter your First Name*";
        valid=false;
    }else if (document.getElementById("fName").value.length <1 || document.getElementById("fName").value.length > 30){
        document.getElementById("fNameError").innerText="*Max/Min Length of first name should be 1 and 20.*";
        valid=false;
    }
//Last Name
    if(document.getElementById("lName").value == ""){
        document.getElementById("lNameError").innerText="*Please enter your Last Name*";
        valid=false;
    }else if (document.getElementById("lName").value.length <1 || document.getElementById("lName").value.length > 30){
        document.getElementById("lNameError").innerText="*Max/Min Length of last name should be 1 and 20.*";
        valid=false;
    }
//Age
    if(document.getElementById("age").value ==""){
        document.getElementById("ageError").innerHTML="*Please enter the age*";
        valid=false;
    }else if (document.getElementById("age").value.length <1 || document.getElementById("age").value.length > 100){
        document.getElementById("ageError").innerText="*Max/Min Length of age should be 1 and 100.*";
        valid=false;
    }


    if(!(document.getElementById("selfPickUp").checked || document.getElementById("delivery").checked || document.getElementById("exDelivery").checked)){
        document.getElementById("deliveryMethodError").innerText = "*Please select a Delivery Method.*";
        submit = false;
    }

//xmas date error
    const selfPickUpDatecheck = new Date(document.getElementById("selfPickUpDate").value);
    const receivedDatecheck = new Date(document.getElementById("receivedDate").value);
    var selfPickUpinputDate = selfPickUpDatecheck.getDate();
    var receivedinputDate = receivedDatecheck.getDate();
    
    if (document.getElementById("selfPickUp").checked && (document.getElementById("selfPickUpDate").value == "")){  
        document.getElementById("selfPickUpDateError").innerText = "*Please select a Date.*";
        valid = false;
    }else if (selfPickUpinputDate==24){
        document.getElementById("selfPickUpDateError").innerText = "*We have Xmas break! Please select another day.*";
        valid=false;
    }
    
    if (document.getElementById("locationOption").value == ""){
        document.getElementById("locationError").innerText = "*Please select or enter the Pick-up Address.*";
        valid=false;
    }

    if (document.getElementById("delivery").checked && (document.getElementById("receivedDate").value == "")){  
        document.getElementById("receivedDateError").innerText = "*Please select a Date.*";
        valid = false;
    }else if (receivedinputDate==24){
        document.getElementById("receivedDateError").innerText = "*We have Xmas break! Please select another day.*";
        valid=false;
    }

    if (document.getElementById("exDelivery").checked && (document.getElementById("receivedDate").value == "")){  
        document.getElementById("receivedDateError").innerText = "*Please select a Date.*";
        valid = false;
    }else if (receivedinputDate==24){
        document.getElementById("receivedDateError").innerText = "*We have Xmas break! Please select another day.*";
        valid=false;
    }

    if (document.getElementById("address").value == ""){
        document.getElementById("addressError").innerText = "*Please enter your address.*";
        valid=false;
    }
    

    if(valid){
        alert("Thank you");
    }

    return valid;
}