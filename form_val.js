function form(){

let a = document.getElementById('n1').value;
var b = document.getElementById('n2').value;
let c = document.getElementById('n3').value;
let d = document.getElementById('n4').value;

if(a=='' || b=='' || c=='' || d==''){
    
    alert('All fileds are required');
    
}
else if(isNaN(b)){
    alert('Contact must be digits')
}

else if(b.length>11 || b.length<11){
    alert('Contact must be 11 digits')
}

else if(c!==d){
    alert('Password does not matched')
}

else{
    alert('Your form has been submited')
}
}