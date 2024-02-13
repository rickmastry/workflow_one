document.getElementById('modalLinkAud').addEventListener('click', openModalAud);

function openModalAud(){
   if(document.querySelector('.bg-modal-aud').style.display = 'none'){
    document.querySelector('.bg-modal-aud').style.display = 'flex';
    document.querySelector('.bg-modal-net-two').style.display = 'none';
    document.querySelector('.bg-modal-load').style.display = 'none';
    document.querySelector('.bg-modal-log').style.display = 'none';
    document.querySelector('.bg-modal-net').style.display = 'none';
   }
    
   
}

document.getElementById('modalLinkNet').addEventListener('click', openModalNet);


function openModalNet(){
   document.querySelector('.bg-modal-net').style.display = 'flex';
   document.querySelector('.bg-modal-net-two').style.display = 'none';
   document.querySelector('.bg-modal-load').style.display = 'none';
   document.querySelector('.bg-modal-aud').style.display = 'none';
   document.querySelector('.bg-modal-log').style.display = 'none';
}

document.getElementById('modalLinkLoad').addEventListener('click', openModalLoad);


function openModalLoad(){
    if( document.querySelector('.bg-modal-load').style.display = 'none'){
        document.querySelector('.bg-modal-load').style.display = 'flex';
        document.querySelector('.bg-modal-net-two').style.display = 'none';
        document.querySelector('.bg-modal-net').style.display = 'none';
        document.querySelector('.bg-modal-aud').style.display = 'none';
        document.querySelector('.bg-modal-log').style.display = 'none';
    }
  }
document.getElementById('modalLinkLog').addEventListener('click', openModalLog);


function openModalLog(){
    if( document.querySelector('.bg-modal-log').style.display = 'none'){
        document.querySelector('.bg-modal-log').style.display = 'flex';
        document.querySelector('.bg-modal-net-two').style.display = 'none';
        document.querySelector('.bg-modal-net').style.display = 'none';
        document.querySelector('.bg-modal-aud').style.display = 'none';
        document.querySelector('.bg-modal-load').style.display = 'none';
    }
  }
   
  
const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', closeModal);
})


function closeModal(){
    document.querySelector('.bg-modal-net').style.display = 'none';
    document.querySelector('.bg-modal-net-two').style.display = 'none';
    document.querySelector('.bg-modal-load').style.display = 'none';
    document.querySelector('.bg-modal-aud').style.display = 'none';
    document.querySelector('.bg-modal-log').style.display = 'none';
}


document.getElementById('btn-blue-modal-one').addEventListener('click', openModalNetTwo);


function openModalNetTwo(){
    if( document.querySelector('.bg-modal-net').style.display = 'flex'){
        document.querySelector('.bg-modal-net').style.display = 'none';
        document.querySelector('.bg-modal-aud').style.display = 'none';
        document.querySelector('.bg-modal-load').style.display = 'none';
        document.querySelector('.bg-modal-log').style.display = 'none';
        document.querySelector('.bg-modal-net-two').style.display = 'flex';
    }
  

}

document.getElementById('modalLinkNetBack').addEventListener('click', openModalNetBack);


function openModalNetBack(){
    if( document.querySelector('.bg-modal-net').style.display = 'none'){
        document.querySelector('.bg-modal-net').style.display = 'flex';
        document.querySelector('.bg-modal-net-two').style.display = 'none';
        document.querySelector('.bg-modal-load').style.display = 'none';
    }
  

}


document.getElementById('btn-blue-modal-load').addEventListener('click', openModalNetFromLoad);

function openModalNetFromLoad(){
    if( document.querySelector('.bg-modal-net').style.display = 'none'){
        document.querySelector('.bg-modal-net').style.display = 'flex';
        document.querySelector('.bg-modal-net-two').style.display = 'none';
        document.querySelector('.bg-modal-load').style.display = 'none';
    }
}



//document.getElementById('modalLinkAud').addEventListener('click', openModal);
//document.getElementById('modalLinkLoad').addEventListener('click', openModal);