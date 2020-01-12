let mReqCurrent = document.getElementById('m-requests-my');
let mReqTeam = document.getElementById('m-requests-team');
let mReqDrafts = document.getElementById('m-requests-drafts');
let mReqPrevious = document.getElementById('m-requests-previous');


mReqCurrent.onclick = () => {
    mReqCurrent.style.backgroundColor = 'rgb(189, 218, 255)';
    mReqCurrent.style.color = '#0c3053';

    mReqTeam.style.backgroundColor ='initial';
    mReqTeam.style.color = 'white';

    mReqDrafts.style.backgroundColor ='initial';
    mReqDrafts.style.color = 'white';
    
    mReqPrevious.style.backgroundColor ='initial';
    mReqPrevious.style.color = 'white';
}



mReqTeam.onclick = () => {
    mReqCurrent.style.backgroundColor = 'initial';
    mReqCurrent.style.color = 'white';

    mReqTeam.style.backgroundColor ='rgb(189, 218, 255)';
    mReqTeam.style.color = '#0c3053';

    mReqDrafts.style.backgroundColor ='initial';
    mReqDrafts.style.color = 'white';

    mReqPrevious.style.backgroundColor ='initial';
    mReqPrevious.style.color = 'white';
}


mReqDrafts.onclick = () => {
    mReqDrafts.style.backgroundColor = 'rgb(189, 218, 255)';
    mReqDrafts.style.color = '#0c3053';

    mReqTeam.style.backgroundColor ='initial';
    mReqTeam.style.color = 'white';

    mReqCurrent.style.backgroundColor ='initial';
    mReqCurrent.style.color = 'white';

    mReqPrevious.style.backgroundColor ='initial';
    mReqPrevious.style.color = 'white';
}

mReqPrevious.onclick = () => {

    mReqPrevious.style.backgroundColor = 'rgb(189, 218, 255)';
    mReqPrevious.style.color = '#0c3053';

    mReqTeam.style.backgroundColor ='initial';
    mReqTeam.style.color = 'white';

    mReqCurrent.style.backgroundColor ='initial';
    mReqCurrent.style.color = 'white';

    mReqDrafts.style.backgroundColor ='initial';
    mReqDrafts.style.color = 'white';

}

