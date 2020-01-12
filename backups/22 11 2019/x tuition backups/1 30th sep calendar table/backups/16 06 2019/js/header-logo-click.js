
/*
THIS CODE IS JQUERY BUT FOR SOME REASON,
JQUERY ISN'T WORKING. AT BOTTOM IS NORMAL
JS CODE WHICH WORKS.


$(document).ready(

$('.header-menu-notif').on('click', () => {
    $('.header-menu-notif').hide();
});


);


*/


 let logoClick = document.getElementById('header-logo');

const invertedLogoURL = 'img/logo-inv.png';

logoClick.onclick = () => {
    logoClick.src = invertedLogoURL;
}