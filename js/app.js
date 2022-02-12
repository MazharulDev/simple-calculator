document.getElementById('clear').addEventListener('click',function(){
    const clear=document.getElementById('output');
    clear.value='';
})
function calc(x){
    const output=document.getElementById('output');
    output.value=output.value+x;
}
function equal(){
    const output=document.getElementById('output');
    output.value=eval(output.value);
}