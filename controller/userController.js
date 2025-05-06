const userModel = require('../models/userModels');
const leaveModel = require('../models/leaveModels');

exports.getAllUsersWithLeavesForManager = async function (request, h) {
  try {
    const managerId = request.params.manager_id;
    const users = await userModel.fetchAllUsersWithLeaves(managerId);
    return h.response(users).code(200);
  } catch (error) {
    console.error("Error occurred:", error.message);
    return h.response("Internal Server Error").code(500);
  }
};

exports.getLeavesForUser = async function (request, h) {
  try {
    const id = request.params.id;
    const user = await userModel.fetchTotalLeavesForUser(id);
    if (!user) return h.response("Not found !").code(404);
    else return h.response(user).code(200);
  } catch (error) {
    console.log("error occurred", error.message);
    return h.response("Internal Server Error").code(500);
  }
}

exports.getCategoryLeavesForUser = async function (request, h) {
  try {
    const userId = request.params.id;
    const leaveId = request.params.leaveId;
    const user = await userModel.fetchTotalCategoryLeavesForUser(userId, leaveId);
    if (!user) return h.response("User not found !").code(404);
    else return h.response(user).code(200);
  }
  catch (error) {
    console.log("error occurred !", error.message);
    return h.response("Internal Server Error").code(500);
  }
}

exports.requestLeaveById = async (request, h) => {
  try {
    const userId = request.params.id;
    const { leaveTypeId, startDate, endDate, reason } = request.payload;
    const user = await leaveModel.putLeaveRequestForUser(userId, leaveTypeId, startDate, endDate, reason);
    if (!user) return h.response("User not found").code(404);
    else return h.response(user).code(200);
  }
  catch (error) {
    console.log("error occurred", error.message);
    return h.response("Internal server error ! ").code(500);
  }
}


exports.canceleavebyId = async (request, h) => {
  try {
    const userId = request.params.userId;
    const leaveTypeId = request.params.leaveId;
    const user = await leaveModel.cancelLeaveRequest(userId, leaveTypeId);
    if (!user) return h.response("User not found !").code(404);
    else return h.response(user).code(200);
  }
  catch (error) {
    console.log("error occured", error.message);
    return h.response("Internal server error").code(500);
  }
}


exports.updateLeaveCount = async (request, h) => {
  try {
    const leaveRequestId = request.params.leaveRequestId;
    const user = await leaveModel.updateLeaveCount(leaveRequestId);
    if (!user) return h.response("User not found !").code(404);
    else return h.response(user).code(200);
  }
  catch (error) {
    console.log("error occured !", error.message);
    return h.response("Internal server error !").code(500);
  }
}


exports.updateManagerStatus = async (request, h) => {
  try {
    const leaveRequestId = request.params.leaveRequestId;
    const user = await leaveModel.updateManagerStatus(leaveRequestId);
    if (!user) return h.response('user not found !').code(404);
    else return h.response(user).code(200);
  }
  catch (error) {
    console.log("error , occured", error.message);
    return h.response("Internal server error").code(500);
  }
}

exports.updateDirectorStatus = async (request, h) => {
  try {
    const leaveRequestId = request.params.leaveRequestId;
    const user = await leaveModel.updateDirectorStatus(leaveRequestId);
    if (!user) return h.response("User not found !").code(404);
    else return h.response(user).code(200);
  }
  catch (error) {
    console.log("error occured ", error.message);
    return h.response("Internal server error").code(500);
  }
}

exports.updateHrStatus = async (request, h) => {
  try {
    const leaveRequestId = request.params.leaveRequestId;
    const user = await leaveModel.updateHrStatus(leaveRequestId);
    if (!user) return h.response('User not found !').code(404);
    else return h.response(user).code(200);
  }
  catch (error) {
    console.log("error occurred", error.message);
    return h.response("Internal server error").code(500);
  }
}

exports.updateStatus = async (request, h) => {
  try {
    const leaveRequestId = request.params.leaveRequestId;
    const user = await leaveModel.updateStatus(leaveRequestId);
    if (!user) return h.response('User not found !').code(404);
    else return h.response(user).code(200);
  }
  catch (error) {
    console.log('error occurred ', error.message);
    return h.response('Internal server error').code(500);
  }
}


exports.getLeavesCountTakenByUser = async (request, h) => {
  try {
    const userId = request.params.userId;
    const leaveTypeId = request.params.leaveTypeId;
    const user = await userModel.getTakenLeaves(userId, leaveTypeId);
    if (!user) return h.response('User not found').code(404);
    else return h.response(user).code(200);
  } catch (error) {
    console.log("error occurred ", error.message);
    return h.response('Internal server error').code(500);
  }
}


exports.getRemainingLeavesForUser = async (request, h) => {
  try {
    // const { userId, leaveTypeId } = request.params;
    const userId = request.params.userId;
    const leaveTypeId = request.params.leaveTypeId;
    const user = await userModel.getRemainingLeaves(userId, leaveTypeId);
    if (!user) return h.response('User not found !').code(404);
    else return h.response(user).code(200);
  }
  catch (error) {
    console.log('error occurred', error.message);
    return h.response('Internal server error').code(500);
  }
}