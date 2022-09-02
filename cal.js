let Output=document.getElementById("output-s");  

function display(num){
    Output.value += num;
}

function calculate(){
    try{
        Output.value=eval(Output.value);

    }
    catch(err)
    {
        alert("invalid")
    }
}
function clear(){
    Output.value= "";
}
function del(){
    Output.value = Output.value.slice(0,-2);
}