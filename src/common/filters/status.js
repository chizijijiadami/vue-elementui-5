// 订单状态
export function orderStatusFilters(val) {
    if (Number(val) === 0) {
        return '未付款'
    } else if (Number(val) === 1) {
        return '待发货'
    } else if (Number(val) === 2) {
        return '待收货'
    } else if (Number(val) === 3) {
        return '未评价'
    } else if (Number(val) === 4) {
        return '已完成'
    } else if (Number(val) === 5) {
        return '退款'
    } else if (Number(val) === 6) {
        return '退货退款'
    } else if (Number(val) === -1) {
        return '已取消'
    }
}

// 审批状态
export function approvalStatusFilters(val) {
    if (Number(val) === 0) {
        return '未开始'
    } else if (Number(val) === 1) {
        return '审批中'
    } else if (Number(val) === 2) {
        return '已批准'
    } else if (Number(val) === 3) {
        return '已拒绝'
    }
}