



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


let statusBarCollapse = document.getElementById('profile-image-collapse');


notifIcon.onclick = () => {
    //function
    document.querySelector('.m-subheader').style.display = 'flex';
    document.querySelector('.m-submenu-parent').style.marginTop = '0px';
    document.querySelector('#m-header-notif').style.display = 'none';
    document.querySelector('#profile-image-collapse').style.display = 'flex';

    
}

statusBarCollapse.onclick = () => {
    document.querySelector('.m-subheader').style.display = 'none';
    document.querySelector('.m-submenu-parent').style.marginTop = '-30px';
    document.querySelector('#m-header-notif').style.display = 'flex';
    document.querySelector('#profile-image-collapse').style.display = 'none';




}


