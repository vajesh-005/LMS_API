const leaveController = require('../controller/leaveController')
module.exports=[
    {
        method : 'POST',
        path : '/requestLeave/{id}',
        handler : leaveController.requestLeaveById //posting a leave request.
    } ,
    {
        method : 'DELETE',
        path : '/cancelLeave/{userId}/{leaveId}',
        handler : leaveController.canceleavebyId //cancelling a leave request by employee.
    },
    {
        method : 'PUT',
        path : '/leaveApproved/{leaveRequestId}',
        handler : leaveController.updateLeaveCount  //updating leave count in remaining leaves table.
    },
    {
        method : 'PUT',
        path : '/managerApproved/{leaveRequestId}',
        handler : leaveController.updateManagerStatus // manager accepts the request.
    },
    {
        method : 'PUT',
        path : '/directorApproved/{leaveRequestId}',
        handler : leaveController.updateDirectorStatus //director accepts the request.
    },
    {
        method :'PUT',
        path : '/hrApproved/{leaveRequestId}',
        handler : leaveController.updateHrStatus  //HR accepts the request.
    },
    {
        method : 'PUT',
        path : '/statusApproval/{leaveRequestId}',
        handler : leaveController.updateStatus   //overall status updation.
    },
    {
        method : 'GET',
        path : '/totalLeavesUsed/{userId}',
        handler : leaveController.getleavesUsed
    },
    {
        method : 'GET',
        path : '/leavesList/{userId}',
        handler : leaveController.getLeavesList
    }
]