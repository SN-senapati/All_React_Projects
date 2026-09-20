let count = 0;
function btnClick(){
    count++
    document.getElementById("count").textContent = count;
    console.log(count)
}

function OnFocus(){
    document.querySelector("input").focus()
}