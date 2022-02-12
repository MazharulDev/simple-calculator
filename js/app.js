document.getElementById('clear').addEventListener('click',function(){
    const clear=document.getElementById('output');
    clear.value='';
})
function calc(show){
    const output=document.getElementById('output');
    output.value=output.value+show;
}
function equal(){
    const output=document.getElementById('output');
    output.value=eval(output.value);
}