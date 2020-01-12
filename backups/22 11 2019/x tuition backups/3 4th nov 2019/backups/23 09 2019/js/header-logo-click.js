

$(document).ready(

    $('header-menu-notif').on('click', () => {
        $('header-menu-notif').hide();
    }
    
    ));
    



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

const mInvertedLogoURL = 'img/logo-inv.png';

mLogoClick.onclick = () => {
    mLogoClick.src = mInvertedLogoURL;
}