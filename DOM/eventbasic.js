// type, timestamp, preventDefault
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY

// capturing and bubbling phase

// document.getElementById('owl').addEventListener('click', function(e ){    // where e is event object.
//     // alert('owl clicked')
//     console.log(e);
    
// })

document.querySelector('.pic').addEventListener("click", function(e){
    if(e.target.id == 'owl'){
         alert('owl clicked')
        // console.log('owl clicked');  
    }else{
        // console.log('clicked');
         alert('clicked')
    }
})
