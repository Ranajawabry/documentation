
const copy=(x,button)=>{
    
        navigator.clipboard.writeText(document.getElementById(x).innerHTML)
        .then(() => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-copy');
            icon.classList.add('fa-check');
            setTimeout(() => {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-copy');
            }, 1000)
        })
        .catch((error) => {
            console.error("Failed to copy: ", error);
        });
        
        
  
console.log('jjjj')
}


            





