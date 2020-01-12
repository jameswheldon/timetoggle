let mPrevYear = document.getElementById('prev-yr');
let mNextYear = document.getElementById('next-yr');
let crntYr = document.getElementById('current-yr');

// When m-year loads (currently empty), insert current year
window.onload  = () =>{   
    crntYr.innerHTML = new Date().getFullYear();
}


// current year control incre/decre-ments
mPrevYear.onclick = () => {
    crntYr.innerHTML --;

}

mNextYear.onclick = () => {
    crntYr.innerHTML ++ ;
    
}



