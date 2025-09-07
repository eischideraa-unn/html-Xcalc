// give varibles in function
function multiplyNumbers(){
    
    // varible, get values
    let no1 = document.getElementById("No1").value;
    let no2 = document.getElementById("No2").value;

    // error message that the input is not a number
    if(isNaN(no1) || isNaN(no2) || no1 === "" || no2 === ""){
        alert("Not a number");
        return;
    }

    // Here this is to multiply the inputed number
    let total = Number(no1) * Number(no2);

    // this result show here
    document.getElementById("result").textContent = "Result: "+ total;
}