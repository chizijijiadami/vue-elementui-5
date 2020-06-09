import axiosApi from '@/common/utils/axiosApi'
import * as filter from './filter'
export function getPermission(params) {
    return axiosApi({
        url: '/permission',
        method: 'get',
        filter: filter.getPermission,
        params: params
    })
}
