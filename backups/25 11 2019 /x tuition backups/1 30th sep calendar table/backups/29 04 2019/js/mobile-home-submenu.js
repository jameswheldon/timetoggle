let mSubCalendar = document.getElementById('m-sub-calendar');
let mSubLeave = document.getElementById('m-sub-leave');
let mSubOvertime = document.getElementById('m-sub-overtime');
let mSubAbsence = document.getElementById('m-sub-absence');

mSubCalendar.onclick = () => {
    mSubCalendar.style.backgroundColor = '#0c3053';
    mSubCalendar.style.color = 'white';
    mSubCalendar.style.fontWeight = '600';
    mSubCalendar.style.marginTop = '3px';

        // reset others
        mSubLeave.style.backgroundColor = '';
        mSubLeave.style.color = '';
        mSubLeave.style.fontWeight = '300';

        mSubOvertime.style.backgroundColor = '';
        mSubOvertime.style.color = '';
        mSubOvertime.style.fontWeight = '300';

        mSubAbsence.style.backgroundColor = '';
        mSubAbsence.style.color = '';
        mSubAbsence.style.fontWeight = '300';

}




mSubLeave.onclick = () => {
    mSubLeave.style.backgroundColor = '#0c3053';
    mSubLeave.style.color = 'white';
    mSubLeave.style.fontWeight = '600';
    mSubLeave.style.marginTop = '3px';


        // reset others
        mSubCalendar.style.backgroundColor = '';
        mSubCalendar.style.color = '';
        mSubCalendar.style.fontWeight = '300';
    
        mSubOvertime.style.backgroundColor = '';
        mSubOvertime.style.color = '';
        mSubOvertime.style.fontWeight = '300';
    
        mSubAbsence.style.backgroundColor = '';
        mSubAbsence.style.color = '';
        mSubAbsence.style.fontWeight = '300';
}

mSubOvertime.onclick = () => {
    mSubOvertime.style.backgroundColor = '#0c3053';
    mSubOvertime.style.color = 'white';
    mSubOvertime.style.fontWeight = '600';
    mSubOvertime.style.marginTop = '3px';


        // reset others
        mSubCalendar.style.backgroundColor = '';
        mSubCalendar.style.color = '';
        mSubCalendar.style.fontWeight = '300';
    
        mSubLeave.style.backgroundColor = '';
        mSubLeave.style.color = '';
        mSubLeave.style.fontWeight = '300';
    
        mSubAbsence.style.backgroundColor = '';
        mSubAbsence.style.color = '';
        mSubAbsence.style.fontWeight = '300';
}

mSubAbsence.onclick = () => {
    mSubAbsence.style.backgroundColor = '#0c3053';
    mSubAbsence.style.color = 'white';
    mSubAbsence.style.fontWeight = '600';
    mSubAbsence.style.marginTop = '3px';

        // reset others
        mSubCalendar.style.backgroundColor = '';
        mSubCalendar.style.color = '';
        mSubCalendar.style.fontWeight = '300';
    
        mSubLeave.style.backgroundColor = '';
        mSubLeave.style.color = '';
        mSubLeave.style.fontWeight = '300';
    
        mSubOvertime.style.backgroundColor = '';
        mSubOvertime.style.color = '';
        mSubOvertime.style.fontWeight = '300';
}


