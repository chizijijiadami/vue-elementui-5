import axios from 'axios'
import ErrorMessage from './errorMessage'
import { MessageBox } from 'element-ui'
var instance = axios.create({
    baseURL: '',
    timeout: 5000
});
// 添加请求拦截器
instance.interceptors.request.use(
    // 在发送请求之前做些什么
    config => {
        config.headers['version'] = '1'
        return config
    },
    error => {
        Promise.reject(error)
    }
);

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.status !== 0) {
        return Promise.reject(response)
    } else {
        return Promise.resolve(response)
    }
}, function (error) {
    // 对响应错误做点什么
    if (!error.response) {
        // 服务器请求失败时错误提示
        MessageBox({
            message: `请求超时${ErrorMessage.API_ERROR_LOAD}`,
            showCancelButton: false,
            confirmButtonText: '确定',
            type: 'error',
            callback() { }
        })
    } else {
        let errorStatus = error.response.status
        switch (errorStatus) {
            case 400:
                error.message = ErrorMessage.STATUS_400
                break
            case 401:
                error.message = ErrorMessage.STATUS_401
                break
            case 403:
                error.message = ErrorMessage.STATUS_403
                break
            case 404:
                error.message = ErrorMessage.STATUS_404
                break
            case 408:
                error.message = ErrorMessage.STATUS_408
                break
            case 500:
                error.message = ErrorMessage.STATUS_500
                break
            case 501:
                error.message = ErrorMessage.STATUS_501
                break
            case 502:
                error.message = ErrorMessage.STATUS_502
                break
            case 503:
                error.message = ErrorMessage.STATUS_503
                break
            case 504:
                error.message = ErrorMessage.STATUS_504
                break
            case 505:
                error.message = ErrorMessage.STATUS_505
                break
            default:
        }
        MessageBox({
            message: error.response.config.url + " " + error.message,
            showCancelButton: false,
            confirmButtonText: '确定',
            type: 'error',
            callback() {
                if (errorStatus == 404) {
                    console.log('44444444444');
                }
            }
        })
    }
    return Promise.reject(error);
});
export default function (config) {
    let _config = {
        url: '',
        method: 'get'
    }
    _config = Object.assign(_config, config)
    _config.params = _config.params
        ? _config.filter
            ? _config.filter.request(JSON.parse(JSON.stringify(_config.params)))
            : _config.params
        : ''
    if (_config.method.toLowerCase() != 'get') {
        _config.data = _config.params
        _config.params = {}
    }
    return new Promise((resolve, reject) => {
        return instance(_config)
            .then(response => {
                resolve(_config.filter ? _config.filter.response(response.data) : response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}