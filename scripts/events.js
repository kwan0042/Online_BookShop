//First Name
document.getElementById("fName").addEventListener("input", function(){
    if(this.value !== ""){
        document.getElementById("fNameError").innerText = "";
        document.getElementById("sumName").innerText = 
        document.getElementById("fName").value + ","+
        document.getElementById("lName").value 
    }
});

//Last Name
document.getElementById("lName").addEventListener("input", function(){
    if(this.value !== ""){
        document.getElementById("lNameError").innerText = "";
        document.getElementById("sumName").innerText = 
        document.getElementById("fName").value + ","+
        document.getElementById("lName").value 
    }
});

//age
document.getElementById("age").addEventListener("input", function(){
    if(this.value !== ""){
        document.getElementById("ageError").innerText = "";
        document.getElementById("sumAge").innerText =
        document.getElementById("age").value
    }
});


//Delivery Method
document.getElementById("selfPickUp").addEventListener("click",function(){
    if(this.checked){
        document.getElementById("deliveryMethodError").innerText = "";
        document.getElementById("sumDeliveryMethod").innerText =
        document.getElementById("selfPickUp").value
    }
});

document.getElementById("delivery").addEventListener("click",function(){
    if(this.checked){
        document.getElementById("deliveryMethodError").innerText = "";
        document.getElementById("sumDeliveryMethod").innerText =
        document.getElementById("delivery").value
    }
});

document.getElementById("exDelivery").addEventListener("click",function(){
    if(this.checked){
        document.getElementById("deliveryMethodError").innerText = "";
        document.getElementById("sumDeliveryMethod").innerText =
        document.getElementById("exDelivery").value
    }
});



//Pick-up Date
document.getElementById("selfPickUpDate").addEventListener("change",function(){
    if(this.value !== ""){
        document.getElementById("selfPickUpDateError").innerText = "";
        document.getElementById("sumReceivedDate").innerText =
        document.getElementById("selfPickUpDate").value
    }
});
document.getElementById("showSD").style.display = "none";
document.getElementById("showL").style.display = "none";
document.getElementById("selfPickUp").addEventListener("click", function(){
    if(this.checked){
        document.getElementById("showSD").style.display = "block";
        document.getElementById("showL").style.display = "block";
    }else{
        document.getElementById("showSD").style.display = "none";
        document.getElementById("showL").style.display = "none";
    }
});
//Pick-up address
document.getElementById("locationOption").addEventListener("input",function(){
    if(this.value !== ""){
        document.getElementById("locationError").innerText = "";
        document.getElementById("sumDeliveryAddress").innerText =
        document.getElementById("locationOption").value
    }
});




//Received Date
document.getElementById("receivedDate").addEventListener("change",function(){
    if(this.value !== ""){
        document.getElementById("receivedDateError").innerText = "";
        document.getElementById("sumReceivedDate").innerText =
        document.getElementById("receivedDate").value
    }
});
document.getElementById("showRD").style.display = "none";
document.getElementById("showA").style.display = "none";
document.getElementById("delivery").addEventListener("click", function(){
    if(this.checked){
        document.getElementById("showRD").style.display = "block";
        document.getElementById("showA").style.display = "block";
    }else{
        document.getElementById("showRD").style.display = "none";
        document.getElementById("showA").style.display = "none";
    }
});

document.getElementById("showRD").style.display = "none";
document.getElementById("showA").style.display = "none";
document.getElementById("exDelivery").addEventListener("click", function(){
    if(this.checked){
        document.getElementById("showRD").style.display = "block";
        document.getElementById("showA").style.display = "block";
    }else{
        document.getElementById("showRD").style.display = "none";
        document.getElementById("showA").style.display = "none";
    }
});

//Delivery address

document.getElementById("address").addEventListener("input",function(){
    if(this.value !== ""){
        document.getElementById("addressError").innerText = "";
        document.getElementById("sumDeliveryAddress").innerText =
        document.getElementById("address").value
    }
});

//Calculate Amount and diplay picked item

const sumpickedItems = document.querySelectorAll(".pHP")
const productsAmount = document.querySelectorAll(".productsAmount");
const productsPrice = document.querySelectorAll(".productsPrice");
const productsSubtotal = document.querySelectorAll(".productsSubtotal");
const totalAmount = document.getElementById("totalAmount");
var pickedItems = [0,0,0,0,0,0,0];
for (let i = 0 ; i < 7 ; i++){
    productsAmount[i].innerText = pickedItems[i];
    productsSubtotal[i].innerText = "0";
    sumpickedItems[i].innerText="0"
}
document.getElementById("productsImg1").addEventListener("click", function(){
    pickedItems[0]++;
    productsAmount[0].innerText = pickedItems[0];
    sumpickedItems[0].innerText= productsAmount[0].innerText; 
    calculateAmount(0);
});

document.getElementById("productsImg2").addEventListener("click", function(){
    pickedItems[1]++;
    productsAmount[1].innerText = pickedItems[1];
    sumpickedItems[1].innerText= productsAmount[1].innerText; 
    calculateAmount(1);
});

document.getElementById("productsImg3").addEventListener("click", function(){
    pickedItems[2]++;
    productsAmount[2].innerText = pickedItems[2];
    sumpickedItems[2].innerText= productsAmount[2].innerText; 
    calculateAmount(2);
});

document.getElementById("productsImg4").addEventListener("click", function(){
    pickedItems[3]++;
    productsAmount[3].innerText = pickedItems[3];
    sumpickedItems[3].innerText= productsAmount[3].innerText; 
    calculateAmount(3);
});

document.getElementById("productsImg5").addEventListener("click", function(){
    pickedItems[4]++;
    productsAmount[4].innerText = pickedItems[4];
    sumpickedItems[4].innerText= productsAmount[4].innerText; 
    calculateAmount(4);
});

document.getElementById("productsImg6").addEventListener("click", function(){
    pickedItems[5]++;
    productsAmount[5].innerText = pickedItems[5];
    sumpickedItems[5].innerText= productsAmount[5].innerText; 
    calculateAmount(5);
});

document.getElementById("productsImg7").addEventListener("click", function(){
    pickedItems[6]++;
    productsAmount[6].innerText = pickedItems[6];
    sumpickedItems[6].innerText= productsAmount[6].innerText; 
    calculateAmount(6);
});

function calculateAmount(pID){
    let subTotal = 0;
    productsSubtotal[pID].innerText = parseInt(productsPrice[pID].innerText) * parseInt(pickedItems[pID]) ;
    let total = 0;
    for (let i = 0 ; i< 7 ; i++){
        total = total + parseInt(productsSubtotal[i].innerText);
    }
    totalAmount.value = parseInt(total);
}

document.form2.addEventListener("submit", validateForm);


document.form2.addEventListener("reset", reset);
function reset() {
    document.getElementById("fNameError").innerText = "";
    document.getElementById("lNameError").innerText = "";
    document.getElementById("ageError").innerText = "";
    document.getElementById("deliveryMethodError").innerText = "";
    document.getElementById("deliveryMethodError").innerText = "";
    document.getElementById("deliveryMethodError").innerText = "";
    document.getElementById("selfPickUpDateError").innerText = "";
    document.getElementById("locationError").innerText = "";
    document.getElementById("addressError").innerText = "";
    document.getElementById("showSD").style.display = "none";
    document.getElementById("showL").style.display = "none";
    document.getElementById("showRD").style.display = "none";
    document.getElementById("showA").style.display = "none";
}




