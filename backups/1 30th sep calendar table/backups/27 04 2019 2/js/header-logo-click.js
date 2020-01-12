let logoClick = document.getElementById('header-logo');

const invertedLogoURL = 'img/logo-inv.png';

logoClick.onclick = () => {
    logoClick.src = invertedLogoURL;
}