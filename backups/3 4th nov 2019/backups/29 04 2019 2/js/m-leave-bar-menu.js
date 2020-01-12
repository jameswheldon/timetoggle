let allMobRequests = document.getElementById('m-cal-menu-all');
let pendingMobRequests = document.getElementById('m-cal-menu-pending');
let approvedMobRequests = document.getElementById('m-cal-menu-approved');
let declinedMobRequests = document.getElementById('m-cal-menu-declined');

allMobRequests.onclick = () => {
    allMobRequests.style.backgroundColor ='#00CCFF';
    allMobRequests.style.marginTop = '0px';
    allMobRequests.style.fontSize = '1rem';
    allMobRequests.style.color = 'white';
        
        // reset others
        pendingMobRequests.style.backgroundColor ='';
        pendingMobRequests.style.marginTop = '2px';
        pendingMobRequests.style.fontSize = '0.8rem';
        pendingMobRequests.style.color = '#3f3f40';

        approvedMobRequests.style.backgroundColor ='';
        approvedMobRequests.style.marginTop = '2px';
        approvedMobRequests.style.fontSize = '0.8rem';
        approvedMobRequests.style.color = '#51b639';

        declinedMobRequests.style.backgroundColor ='';
        declinedMobRequests.style.marginTop = '2px';
        declinedMobRequests.style.fontSize = '0.8rem';
        declinedMobRequests.style.color = '#9a1e14';


}




pendingMobRequests.onclick = () => {
    pendingMobRequests.style.backgroundColor ='#587994';
    pendingMobRequests.style.marginTop = '0px';
    pendingMobRequests.style.fontSize = '1rem';
    pendingMobRequests.style.color = 'white';
        
        // reset others
        allMobRequests.style.backgroundColor ='';
        allMobRequests.style.marginTop = '2px';
        allMobRequests.style.fontSize = '0.8rem';
        allMobRequests.style.color = '#103961';

        approvedMobRequests.style.backgroundColor ='';
        approvedMobRequests.style.marginTop = '2px';
        approvedMobRequests.style.fontSize = '0.8rem';
        approvedMobRequests.style.color = '#51b639';

        declinedMobRequests.style.backgroundColor ='';
        declinedMobRequests.style.marginTop = '2px';
        declinedMobRequests.style.fontSize = '0.8rem';
        declinedMobRequests.style.color = '#9a1e14';
    }





    approvedMobRequests.onclick = () => {
        approvedMobRequests.style.backgroundColor ='#51b639';
        approvedMobRequests.style.marginTop = '0px';
        approvedMobRequests.style.fontSize = '1rem';
        approvedMobRequests.style.color = 'white';
            
            // reset others
            allMobRequests.style.backgroundColor ='';
            allMobRequests.style.marginTop = '2px';
            allMobRequests.style.fontSize = '0.8rem';
            allMobRequests.style.color = '#103961';

            pendingMobRequests.style.backgroundColor ='';
            pendingMobRequests.style.marginTop = '2px';
            pendingMobRequests.style.fontSize = '0.8rem';
            pendingMobRequests.style.color = '#3f3f40';
            
            declinedMobRequests.style.backgroundColor ='';
            declinedMobRequests.style.marginTop = '2px';
            declinedMobRequests.style.fontSize = '0.8rem';
            declinedMobRequests.style.color = '#9a1e14';    
        }



        declinedMobRequests.onclick = () => {
            declinedMobRequests.style.backgroundColor ='#9a1e14';
            declinedMobRequests.style.marginTop = '0px';
            declinedMobRequests.style.fontSize = '1rem';
            declinedMobRequests.style.color = 'white';
                
                // reset others
                allMobRequests.style.backgroundColor ='';
                allMobRequests.style.marginTop = '2px';
                allMobRequests.style.fontSize = '0.8rem';
                allMobRequests.style.color = '#103961';
    
                pendingMobRequests.style.backgroundColor ='';
                pendingMobRequests.style.marginTop = '2px';
                pendingMobRequests.style.fontSize = '0.8rem';
                pendingMobRequests.style.color = '#3f3f40';

                approvedMobRequests.style.backgroundColor ='';
                approvedMobRequests.style.marginTop = '2px';
                approvedMobRequests.style.fontSize = '0.8rem';
                approvedMobRequests.style.color = '#51b639';
                
            }        