function changeMoney() {
    var amount = document.getElementById("Amount").value;
    var from = document.getElementById("From").value;
    var to = document.getElementById("To").value;
    var result;
    if (from == "USD" && to == "VND") {
        result = "Result: " + (amount * 23000) + " Đ";
    } else if (from == "VND" && to == "USD") {
        result = "Result: " + (amount / 23000) + " $";
    } else if (from == "VND") {
        result = "Result: " + amount + " Đ";
    } else {
        result = "Result: " + amount + " $";
    }
    document.getElementById("result").innerHTML = result;
}