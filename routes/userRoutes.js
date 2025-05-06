
const userController = require('../controller/userController');
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
        method : 'GET',
        path : '/user/{userId}/leavesUsed/{leaveTypeId}',
        handler : userController.getLeavesCountTakenByUser  // leaves count that the specific user taken leave in specific leave type.
    },
    {
        method : 'GET',
        path : '/user/{userId}/leavesRemaining/{leaveTypeId}',
        handler : userController.getRemainingLeavesForUser  //leaves count that the user have leaves in specific leave type.
    }
]