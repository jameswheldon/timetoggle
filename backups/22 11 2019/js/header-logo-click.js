



/*

// Desktop logo
 let logoClick = document.getElementById('header-logo');

const invertedLogoURL = 'img/logo-inv.png';

logoClick.onclick = () => {
    logoClick.src = invertedLogoURL;
}
*/



// Mobile logo
let mLogoClick = document.getElementById('m-header-logo');

let notifIcon = document.getElementById('m-header-notif');





notifIcon.onclick = () => {
    //function
    document.querySelector('.m-subheader').style.display = 'flex';
    document.querySelector('.m-submenu-parent').style.marginTop = '0px';
   
    document.querySelector('#m-header-notif').src = 'img/m/up-notif.png'
    
}

