const { db } = require('../configuration/db');

exports.fetchAllUsersWithLeaves = async (managerId) => {
    const query = 'SELECT user_id , total_remaining_days FROM users JOIN remaining_leaves ON users.id = remaining_leaves.user_id WHERE users.manager_id = ?';
    const [results] = await db.query(query , [managerId]);
    return results;
};


exports.fetchTotalLeavesForUser = async (id) => {
    const query = 'SELECT user_id,total_remaining_days FROM remaining_leaves WHERE user_id = ?';
    const [results] = await db.query(query, [id]);
    return results;
}


exports.fetchTotalCategoryLeavesForUser = async (userId, leaveId) => {
    const query = 'SELECT user_id, category_leaves_remaining from remaining_leaves WHERE user_id = ? AND leave_type_id = ?';
    const [results] = await db.query(query, [userId, leaveId]);
    return results;
}


