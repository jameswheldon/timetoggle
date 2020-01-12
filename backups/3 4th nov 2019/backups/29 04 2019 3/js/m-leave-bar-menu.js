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
        pendingMobRequests.style.color = '#919191';

        approvedMobRequests.style.backgroundColor ='';
        approvedMobRequests.style.marginTop = '2px';
        approvedMobRequests.style.fontSize = '0.8rem';
        approvedMobRequests.style.color = '#51b639';

        declinedMobRequests.style.backgroundColor ='';
        declinedMobRequests.style.marginTop = '2px';
        declinedMobRequests.style.fontSize = '0.8rem';
        declinedMobRequests.style.color = '#c2524a';


}




pendingMobRequests.onclick = () => {
    pendingMobRequests.style.backgroundColor ='#00CCFF';
    pendingMobRequests.style.marginTop = '0px';
    pendingMobRequests.style.fontSize = '1rem';
    pendingMobRequests.style.color = 'white';
        
        // reset others
        allMobRequests.style.backgroundColor ='rgba(255, 255, 255, 0)';
        allMobRequests.style.marginTop = '2px';
        allMobRequests.style.fontSize = '0.8rem';
        allMobRequests.style.color = 'white';

        approvedMobRequests.style.backgroundColor ='';
        approvedMobRequests.style.marginTop = '2px';
        approvedMobRequests.style.fontSize = '0.8rem';
        approvedMobRequests.style.color = '#51b639';

        declinedMobRequests.style.backgroundColor ='';
        declinedMobRequests.style.marginTop = '2px';
        declinedMobRequests.style.fontSize = '0.8rem';
        declinedMobRequests.style.color = '#c2524a';
    }





    approvedMobRequests.onclick = () => {
        approvedMobRequests.style.backgroundColor ='#00CCFF';
        approvedMobRequests.style.marginTop = '0px';
        approvedMobRequests.style.fontSize = '1rem';
        approvedMobRequests.style.color = 'white';
            
            // reset others
            allMobRequests.style.backgroundColor ='rgba(255, 255, 255, 0)';
            allMobRequests.style.marginTop = '2px';
            allMobRequests.style.fontSize = '0.8rem';
            allMobRequests.style.color = 'white';

            pendingMobRequests.style.backgroundColor ='';
            pendingMobRequests.style.marginTop = '2px';
            pendingMobRequests.style.fontSize = '0.8rem';
            pendingMobRequests.style.color = '#919191';
            
            declinedMobRequests.style.backgroundColor ='';
            declinedMobRequests.style.marginTop = '2px';
            declinedMobRequests.style.fontSize = '0.8rem';
            declinedMobRequests.style.color = '#c2524a';    
        }



        declinedMobRequests.onclick = () => {
            declinedMobRequests.style.backgroundColor ='#00CCFF';
            declinedMobRequests.style.marginTop = '0px';
            declinedMobRequests.style.fontSize = '1rem';
            declinedMobRequests.style.color = 'white';
                
                // reset others
                allMobRequests.style.backgroundColor ='rgba(255, 255, 255, 0)';
                allMobRequests.style.marginTop = '2px';
                allMobRequests.style.fontSize = '0.8rem';
                allMobRequests.style.color = 'white';
    
                pendingMobRequests.style.backgroundColor ='';
                pendingMobRequests.style.marginTop = '2px';
                pendingMobRequests.style.fontSize = '0.8rem';
                pendingMobRequests.style.color = '#919191';

                approvedMobRequests.style.backgroundColor ='';
                approvedMobRequests.style.marginTop = '2px';
                approvedMobRequests.style.fontSize = '0.8rem';
                approvedMobRequests.style.color = '#51b639';
                
            }        