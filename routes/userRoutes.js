
const userController = require('../controller/userController')
module.exports =[
    {
        method : 'GET',
        path : '/usersWithLeaves/{manager_id}',
        handler : userController.getAllUsersWithLeavesForManager // for manager to see their mapped employees total leaves remaining.
    } , 
    {
        method : 'GET',
        path : '/users/{id}/leaves',
        handler : userController.getLeavesForUser //total remaining leaves for specific user.
    } ,
    {
        method : 'GET',
        path : '/users/{id}/leaves/{leaveId}',
        handler : userController.getCategoryLeavesForUser //to see the specific user's category leaves remaining.
    },
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
        handler : userController.updateStatus
    }
]