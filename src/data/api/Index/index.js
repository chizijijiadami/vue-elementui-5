import axiosApi from '@/common/utils/axiosApi'
import * as filter from './filter'
export function getList(params) {
    return axiosApi({
        url: '/list',
        method: 'get',
        filter: filter.getList,
        params: params
    })

}

export function getTitle(params) {
    return axiosApi({
        url: '/title',
        method: 'get',
        filter: filter.getTitle,
        params: params
    })

}

export function getCrossDomainList(params) {
    console.log(process.env.NODE_ENV);

    return axiosApi({
        url: process.env.VUE_APP_CROSS_DOMAIN + "/index.php",
        //url: (process.env.NODE_ENV === "development" ? process.env.VUE_APP_CROSS_DOMAIN : "") + "/index.php",
        method: 'get',
        filter: filter.getCrossDomainList,
        params: params
    })

}
