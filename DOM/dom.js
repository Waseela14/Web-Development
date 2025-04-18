let par = document.querySelector("p");
//par.setAttribute('class','para'); //// remove properties of prevoius class

par.classList.add('para'); //get properties of prevoius class and new class
par.classList.remove('pr'); // we can remove any class

let save = document.querySelector('#save');
save.onclick = () =>{
    console.log('save button is clicked ')
};

let btn1 = document.querySelector('#bt1'); 
btn1.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

btn1.onclick = () =>{
    console.log('you clciked it');
};

///  EVENT LISTNER
// node.addEventListener(evt, callback);
// node.removeEventListener(event, callback); //callback reference should same to remove

let bck = document.querySelector('#back');

bck.addEventListener('click', ()=>{
    console.log("you have click Back button 1");
})
bck.addEventListener('click', ()=>{
    console.log("you have click Back button 2");
})
bck.addEventListener('click', ()=>{
    alert("you have click Back button 3" );
})

const hndlr4 = ()=>{
    console.log('you have clicked back button 4')
}

bck.addEventListener('click', hndlr4)

// now remove console 2 statement
bck.removeEventListener('click', ()=>{
    console.log("you have click Back button 2");
}) 
// it is not removing it because it has created a seperate object in memory

bck.removeEventListener('click', hndlr4)





let mde = document.getElementById('#mode');
let C_mode = 'light';

const modechanger =  ()=>{
    if (C_mode === 'light'){
        C_mode = 'dark';
        document.querySelector('body').style.backgroundColor = 'black'
    }
    else {
        C_mode = 'light';
        document.querySelector('body').style.backgroundColor = 'white'
    }
    console.log(C_mode)
}
// mde.addEventListener('click', modechanger);
//save.addEventListener('click', modechanger)
