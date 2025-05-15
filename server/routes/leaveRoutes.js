const leaveController = require('../controller/leaveController')
module.exports=[
    {
        method : 'POST',
        path : '/requestleave/{id}',
        handler : leaveController.requestLeaveById //posting a leave request.
    } ,
    {
        method : 'PUT',
        path : '/cancelleave/{leaverequestid}',
        handler : leaveController.canceleavebyId //cancelling a leave request by employee.
    },
    {
        method : 'PUT',
        path : '/leaveapproved/{leaverequestid}',
        handler : leaveController.updateLeaveCount  //updating leave count in remaining leaves table.
    },
    {
        method : 'PUT',
        path : '/managerapproved/{leaverequestid}',
        handler : leaveController.updateManagerStatus // manager accepts the request.
    },
    {
        method : 'PUT',
        path : '/directorapproved/{leaverequestid}',
        handler : leaveController.updateDirectorStatus //director accepts the request.
    },
    {
        method :'PUT',
        path : '/hrapproved/{leaverequestid}',
        handler : leaveController.updateHrStatus  //HR accepts the request.
    },
    {
        method : 'PUT',
        path : '/statusapproval/{leaverequestid}',
        handler : leaveController.updateStatus   //overall status updation.
    },
    {
        method : 'GET',
        path : '/totalleavesused/{userid}',
        handler : leaveController.getleavesUsed //leaves used for employee
    },
    {
        method : 'GET',
        path : '/leaveslist/{userid}',
        handler : leaveController.getLeavesList
    },
    {
        method : 'GET',
        path : '/leavename',
        handler : leaveController.getName
    }
]