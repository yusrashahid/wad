var information =
{
    title:"Yusra Shahid",
    balance:10000,
    currency:"PKRS",
    IBAN:"PKN1234654321"
}
display();
function display() {
    document.getElementById("title").innerText =information.title;
    document.getElementById("balance").innerText =information.balance;
    document.getElementById("currency").innerText =information.currency;
    document.getElementById("IBAN").innerText =information.IBAN;
}

function deposit(e,v)
{
    if(e.key=="Enter")
    {
        information.balance=(information.balance + parseInt(v));
        display();
    }
   // var v=document.getElementById("deposite").value;

}

function withdraw(e,v) {
    if(e.key=="Enter") {
        if (v > information.balance) {
           document.getElementById("withdraw-msg").innerHTML="don't have enough balance in your account";
        }
        else
        {
            information.balance=(information.balance - parseInt(v));
            display();
        }
    }
}