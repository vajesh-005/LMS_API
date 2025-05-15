const userController = require("../controller/userController");
const authController = require("../controller/authController");
const { verifyToken } = require("../middleware/verification");
module.exports = [
  {
    method: "GET",
    path: "/userswithleaves/{managerid}",
    handler: userController.getAllUsersWithLeavesForManager, // for manager to see their mapped employees total leaves remaining.
  },
  {
    method: "GET",
    path: "/users/{id}/leaves",
    handler: userController.getLeavesForUser, //total remaining leaves for specific user.
  },
  {
    method: "GET",
    path: "/users/{id}/leaves/{leaveid}",
    handler: userController.getCategoryLeavesForUser, //to see the specific user's category leaves remaining.
  },
  {
    method: "GET",
    path: "/user/{userid}/leavesused/{leavetypeid}",
    handler: userController.getLeavesCountTakenByUser, // leaves count that the specific user taken leave in specific leave type.
  },
  {
    method: "GET",
    path: "/userswithrequest/{managerid}",
    handler: userController.getRequestForManager,
  },
  {
    method: "GET",
    path: "/pendingleaverequest/{userid}",
    handler: userController.getPendingRequest,
  },
  {
    method: "GET",
    path: "/latestleaverequest/{userid}",
    handler: userController.getLatestRequests,
    options: {
        pre: [{ method: verifyToken }] 
      }
  },
  {
    method: "POST",
    path: "/login",
    handler: authController.loginUser,
    options: {
        pre: [{ method: verifyToken }] 
      }
  },
  {
    method: "POST",
    path: "/user",
    handler: authController.addUser,
  },
];
