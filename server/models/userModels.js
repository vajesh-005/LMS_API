const { db } = require('../configuration/db');

exports.fetchAllUsersWithLeaves = async (managerId) => {
    const query = `SELECT user_id , total_remaining_days
    FROM users
    JOIN remaining_leaves 
    ON user.id = remaining_leaves.user_id
    WHERE users.manager_id =?`;
    try {
        const [results] = await db.query(query, [managerId]);
        return results;
    }
    catch (error) {
        console.log('error occurred in model !', error.message);
        return;
    }
};


exports.fetchTotalLeavesForUser = async (id) => {
    const query = `SELECT user_id , total_remaining_days 
    FROM remaining_leaves
    WHERE user_id = ?
    LIMIT 1`;
    try {
        const [results] = await db.query(query, [id]);
        return results;
    }
    catch (error) {
        console.log('error occurred in model !', error.message);
        return;
    }
}


exports.fetchTotalCategoryLeavesForUser = async (userId, leaveId) => {
    const query = `SELECT user_id , category_leaves_remaining 
    FROM remaining_leaves 
    WHERE user_id = ? AND leave_type_id =?`;
    try {
        const [results] = await db.query(query, [userId, leaveId]);
        return results;
    }
    catch (error) {
        console.log('error occurred in model !', error.message);
        return;
    }
}

exports.getTakenLeaves = async (userId, leaveTypeId) => {
    const query = `SELECT user_id , leave_type_id , leaves_used 
    FROM remaining_leaves 
    WHERE user_id =? AND leave_type_id = ?`;
    try {
        const [result] = await db.query(query, [userId, leaveTypeId]);
        return result;
    }
    catch (error) {
        console.log('error occurred in model !', error.message);
        return;
    }

}

exports.getRemainingLeaves = async (userId, leaveTypeId) => {
    const query = `SELECT user_id , leave_type_id , category_leaves_remaining 
    FROM remaining_leaves
    WHERE user_id = ? AND leave_type_id =?`;
    try {
        const [result] = await db.query(query, [userId, leaveTypeId]);
        return result;
    }
    catch (error) {
        console.log('error occurred in model !', error.message);
        return;
    }
}

exports.getRequestForManager = async (managerId) => {
    const query = `SELECT lr.*
    FROM leave_requests lr
    JOIN users u ON lr.user_id = u.id
    WHERE u.manager_id = ?;`;
    try {
        const [result] = await db.query(query, [managerId]);
        return result;
    }
    catch (error) {
        console.log('error occurred in model !', error.message);
        return;
    }
}


exports.getPendingRequests = async (userId) => {
    const query = `SELECT * FROM leave_requests 
    WHERE user_id = ? AND status = 'Pending'`;
    try {
        const [results] = await db.query(query, [userId]);
        return results;
    }
    catch (error) {
        console.log('error occurred in model !', error.message);
        return;
    }

}