const { db } = require('../configuration/db');

exports.putLeaveRequestForUser = async (userId, leaveTypeId, startDate, endDate, reason) => {
    if (leaveTypeId == 1) {
        const checkQuery = `SELECT category_leaves_remaining FROM remaining_leaves WHERE user_id = ? AND leave_type_id =?`;
        const [checkResults] = await db.query(checkQuery, [userId, leaveTypeId]);
        const { category_leaves_remaining } = checkResults[0];
        const start = new Date(startDate);
        const end = new Date(endDate);
        const dateDifference = ((end - start) / (1000 * 60 * 60 * 24)) + 1;
        if (dateDifference <= category_leaves_remaining) {
            const query = 'INSERT INTO leave_requests(user_id , leave_type_id , start_date, end_date , reason) VALUES (?,?,?,?,?)';
            const [result] = await db.query(query, [userId, leaveTypeId, startDate, endDate, reason]);
            return result;
        }
        else{
            return ({message : "No sick leave is remaining for the user !"});
        }

    }
    else{
        return ({message : "This is another  type of leave !"});
    }

}

exports.cancelLeaveRequest = async (userId, leaveTypeId) => {
    const query = 'DELETE FROM leave_requests WHERE user_id = ? AND leave_type_id = ?';
    const [result] = await db.query(query, [userId, leaveTypeId]);
    return result;
}

exports.updateLeaveCount = async (leaveRequestId) => {
    const dataQuery = 'SELECT user_id , leave_type_id , start_date , end_date FROM leave_requests WHERE id = ?';
    const [dataResult] = await db.query(dataQuery, [leaveRequestId]);
    const { user_id, leave_type_id, start_date, end_date } = dataResult[0];
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
    const dateDifference = ((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const updateCategoryCountQuery = `
    UPDATE remaining_leaves
    SET
      leaves_used = COALESCE(leaves_used, 0) + ?,
      category_leaves_remaining = category_leaves_remaining - ?
    WHERE user_id = ? AND leave_type_id = ?
  `;

    const updateTotalCountQuery = `
    UPDATE remaining_leaves
    SET total_remaining_days = total_remaining_days - ?
    WHERE user_id = ?
  `;
    await db.query(updateCategoryCountQuery, [dateDifference, dateDifference, user_id, leave_type_id]);
    await db.query(updateTotalCountQuery, [dateDifference, user_id]);

    return ("successfully updated ! 😁");
}

exports.updateManagerStatus = async (leaveRequestId) => {
    const query = `UPDATE leave_requests 
    SET manager_status = 'Approved'
    WHERE id = ?`;
    await db.query(query, [leaveRequestId]);
    return ("Successfully updated 😁");
}

exports.updateDirectorStatus = async (leaveRequestId) => {
    const query = `UPDATE leave_requests 
    SET director_status = 'Approved'
    WHERE id = ?`;
    await db.query(query, [leaveRequestId]);
    return ("Successfully updated !");
}

exports.updateHrStatus = async (leaveRequestId) => {
    const query = `UPDATE leave_requests 
    SET hr_status = 'Approved'
    WHERE id = ?`;
    await db.query(query, [leaveRequestId]);
    return ("Successfully updated !");
}

exports.updateStatus = async (leaveRequestId) => {
    const query = `UPDATE leave_requests 
    SET status = 'Approved'
    WHERE id = ?`;
    await db.query(query, [leaveRequestId]);
    return ("Successfully updated !");
}