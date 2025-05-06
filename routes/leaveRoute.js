const userController = require('../controller/userController');
module.exports=[
    {
        method : 'POST',
        path : '/requestLeave/{id}',
        handler : userController.requestLeaveById //posting a leave request.
    } ,
    {
        method : 'DELETE',
        path : '/cancelLeave/{userId}/{leaveId}',
        handler : userController.canceleavebyId //cancelling a leave request by employee.
    },
    {
        method : 'PUT',
        path : '/leaveApproved/{leaveRequestId}',
        handler : userController.updateLeaveCount  //updating leave count in remaining leaves table.
    },
    {
        method : 'PUT',
        path : '/managerApproved/{leaveRequestId}',
        handler : userController.updateManagerStatus // manager accepts the request.
    },
    {
        method : 'PUT',
        path : '/directorApproved/{leaveRequestId}',
        handler : userController.updateDirectorStatus //director accepts the request.
    },
    {
        method :'PUT',
        path : '/hrApproved/{leaveRequestId}',
        handler : userController.updateHrStatus  //HR accepts the request.
    },
    {
        method : 'PUT',
        path : '/statusApproval/{leaveRequestId}',
        handler : userController.updateStatus   //overall status updation.
    }
]