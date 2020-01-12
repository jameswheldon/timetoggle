let mPrevYear = document.getElementById('prev-yr');
let mNextYear = document.getElementById('next-yr');
let crntYr = document.getElementById('current-yr');

// When m-year loads (currently empty), insert current year
window.onload  = () =>{   
    let defaultYr = new Date().getFullYear();
    crntYr.innerHTML = defaultYr;
}


// current year control incre/decre-ments
mPrevYear.onclick = () => {
    crntYr.innerHTML --;

}

mNextYear.onclick = () => {
    crntYr.innerHTML ++ ;
    
}



