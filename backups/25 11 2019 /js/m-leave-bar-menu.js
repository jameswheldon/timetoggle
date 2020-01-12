let mReqMy = document.getElementById('m-cal-menu-my');
let mReqTeam = document.getElementById('m-cal-menu-myTeam');
let mReqOther = document.getElementById('m-cal-menu-otherTeam');
let mReqPerson = document.getElementById('m-cal-menu-person');

mReqMy.onclick = () => {
    mReqMy.style.backgroundImage = "linear-gradient(#0c3053, #004369)";            
    
    mReqMy.style.color = 'white';
        
        // reset others
        mReqTeam.style.backgroundImage = "initial";
        mReqTeam.style.color = '#0c3053';

        mReqOther.style.backgroundImage = "initial";
        mReqOther.style.color = '#0c3053';

        mReqPerson.style.backgroundImage = "initial";
        mReqPerson.style.color = '#0c3053';
}




mReqTeam.onclick = () => {
    mReqTeam.style.backgroundImage = "linear-gradient(#0c3053, #004369)";
    mReqTeam.style.color = 'white';
        
        // reset others
        mReqMy.style.backgroundImage = "initial";
        mReqMy.style.color = '#0c3053';

        mReqOther.style.backgroundImage = "initial";
        mReqOther.style.color = '#0c3053';

        mReqPerson.style.backgroundImage = "initial";
        mReqPerson.style.color = '#0c3053';
    }





    mReqOther.onclick = () => {
        mReqOther.style.backgroundImage = "linear-gradient(#0c3053, #004369)";
        mReqOther.style.color = 'white';
            
            // reset others
            mReqMy.style.backgroundImage = "initial";
            mReqMy.style.color = '#0c3053';

            mReqTeam.style.backgroundImage = "initial";
            mReqTeam.style.color = '#0c3053';
            
            mReqPerson.style.backgroundImage = "initial";
            mReqPerson.style.color = '#0c3053';    
        }



    mReqPerson.onclick = () => {
        mReqPerson.style.backgroundImage = "linear-gradient(#0c3053, #004369)";
            mReqPerson.style.color = 'white';
                
                // reset others
                mReqMy.style.backgroundImage = "initial";
                mReqMy.style.color = '#0c3053';
    
                mReqTeam.style.backgroundImage = "initial";
                mReqTeam.style.color = '#0c3053';

                mReqOther.style.backgroundImage = "initial";
                mReqOther.style.color = '#0c3053';
                
            }        