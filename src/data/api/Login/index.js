import axiosApi from '@/common/utils/axiosApi'
import * as filter from './filter'
export function toLogin(params) {
    return axiosApi({
        url: '/toLogin',
        method: 'post',
        filter: filter.toLogin,
        params: params
    })
}