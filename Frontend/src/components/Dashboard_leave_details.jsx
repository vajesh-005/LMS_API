import React, { useEffect, useState } from 'react';
import '../style/dashboard_top.css'
function Dashboard_leave_details() {
   const [leaveRemaining, setLeaveRemaining] = useState(null);
   const [leavesUsed, setLeavesUsed] = useState(null);


   useEffect(() => {
      const fetchAll = async () => {
         try {
            const [leaveRes, profileRes] = await Promise.all([
               fetch('http://localhost:2406/users/8/leaves'),
               fetch('http://localhost:2406/totalleavesused/8')
            ]);

            const [leaveJson, profileJson] = await Promise.all([
               leaveRes.json(),
               profileRes.json()
            ]);
            setLeaveRemaining(leaveJson);
            setLeavesUsed(profileJson);
            console.log(leaveJson)
         } catch (err) {
            console.log(err.message)
         }
      };

      fetchAll();
   }, []);

   return (
      <div className='dashboard-leaves-details'>
         <div className="days-remaining">
            <div className='day-count'>{leaveRemaining && leaveRemaining ? leaveRemaining.total_remaining_days : 0}</div>
            <p>Total remaining days</p>
         </div>
         <div className="days-used">
            <div className='day-count'>{leavesUsed?.total_leaves_used || 0}</div>
            <p>Leaves used </p>
         </div>
      </div>
   );
}

export default Dashboard_leave_details;

