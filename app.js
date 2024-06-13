var inp = document.getElementById("inp");
var one = document.getElementById("one");
var two = document.getElementById("two");
var selectTo = document.querySelector(".selectTo");
var img = document.getElementById("img");    
var b = document.getElementById("rs");

function generate() {
one.innerText = inp.value;
fetch('https://v6.exchangerate-api.com/v6/fa2d0ea33f086ddf19e7b4c1/latest/USD')
.then(function (data) {
return data.json()
})
.then(function (data1) {
    var a = data1.conversion_rates;
    console.log(a);
    var c = inp.value;
    for(var key in a)
        {
            // console.log(key);  INR
            if(b === key && c !== 0)
                {
                    two.innerText = c * (a[key].toFixed(2)) + ' ' + key;
                    console.log(key);
                    console.log(a[key]);
                    console.log(b);
                    inp.value = '';
                }
        }
    })
}

function clk() {
    // console.log(selectTo.value); IN
    // b = INR
    img.src = `https://flagsapi.com/${selectTo.value}/flat/64.png`
    b = selectTo.options[selectTo.selectedIndex].innerText
}
