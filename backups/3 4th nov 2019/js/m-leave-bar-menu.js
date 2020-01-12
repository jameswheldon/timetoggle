let allMobRequests = document.getElementById('m-cal-menu-all');
let pendingMobRequests = document.getElementById('m-cal-menu-pending');
let approvedMobRequests = document.getElementById('m-cal-menu-approved');
let declinedMobRequests = document.getElementById('m-cal-menu-declined');

allMobRequests.onclick = () => {
    allMobRequests.style.backgroundColor ='#0b4b8b';
    allMobRequests.style.color = 'white';
        
        // reset others
        pendingMobRequests.style.backgroundColor ='';
        pendingMobRequests.style.color = '#0c3053';

        approvedMobRequests.style.backgroundColor ='';
        approvedMobRequests.style.color = '#51b639';

        declinedMobRequests.style.backgroundColor ='';
        declinedMobRequests.style.color = '#e77269';
}




pendingMobRequests.onclick = () => {
    pendingMobRequests.style.backgroundColor ='#919191';
    pendingMobRequests.style.color = 'white';
        
        // reset others
        allMobRequests.style.backgroundColor ='#d3eeff';
        allMobRequests.style.color = '#0c3053';

        approvedMobRequests.style.backgroundColor ='';
        approvedMobRequests.style.color = '#51b639';

        declinedMobRequests.style.backgroundColor ='';
        declinedMobRequests.style.color = '#e77269';
    }





    approvedMobRequests.onclick = () => {
        approvedMobRequests.style.backgroundColor ='#51b639';
        approvedMobRequests.style.color = 'white';
            
            // reset others
            allMobRequests.style.backgroundColor ='rgba(255, 255, 255, 0)';
            allMobRequests.style.color = '#0c3053';

            pendingMobRequests.style.backgroundColor ='';
            pendingMobRequests.style.color = '#0c3053';
            
            declinedMobRequests.style.backgroundColor ='';
            declinedMobRequests.style.color = '#e77269';    
        }



        declinedMobRequests.onclick = () => {
            declinedMobRequests.style.backgroundColor ='#e77269';
            declinedMobRequests.style.color = 'white';
                
                // reset others
                allMobRequests.style.backgroundColor ='rgba(255, 255, 255, 0)';
                allMobRequests.style.color = '#0c3053';
    
                pendingMobRequests.style.backgroundColor ='';
                pendingMobRequests.style.color = '#0c3053';

                approvedMobRequests.style.backgroundColor ='';
                approvedMobRequests.style.color = '#51b639';
                
            }        