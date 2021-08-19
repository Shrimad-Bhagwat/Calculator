function display(val) {
    
    document.getElementById("result").value += val;
}

function solve() {
    let x = document.getElementById("result").value;
    try {
        let y = eval(x);
        if(Number.isInteger(y) || typeof(y) == "number"){
            
            document.getElementById("result").value = y;
        }

    } catch (error) {
        document.getElementById("result").value = "Error";
        
    }

}
function clr() {
    console.log("Clear")
    document.getElementById("result").value = "";
    
}