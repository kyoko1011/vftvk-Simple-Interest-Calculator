var result_html = 'If you deposit <span id="principal_r" class="highlight"></span>,<br/>at an interest rate of <span id="rate_r" class="highlight"></span>%.<br/>You will receive an amount of <span id="result_r" class="highlight"></span>,<br/>in the year <span id="year_r" class="highlight"></span'
function compute()
{
    //First get data from text fields
    let principal_str = document.getElementById("principal").value;
    let interest_str = document.getElementById("rate").value;
    let years_str = document.getElementById("years").value;
    //Clean data
    let principal = parseFloat(principal_str);
    let interest = parseFloat(interest_str);
    let years = parseInt(years_str, 10);
    let year = new Date().getFullYear() + years;
    //Check if principal is entered correctly
    if (isNaN(principal) || principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    //Calculate
    let result = principal*interest*years/100;
    //Return item to correct HTML element
    let result_box =  document.getElementById("result");
    result_box.innerHTML = result_html;
    document.getElementById("principal_r").innerText = principal;
    document.getElementById("rate_r").innerText = interest;
    document.getElementById("result_r").innerText = result;
    document.getElementById("year_r").innerText = year;
}
        
//Function for range slider
function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}