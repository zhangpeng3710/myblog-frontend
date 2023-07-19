"use strict";

import Vue from 'vue';
import axios from "axios";
import qs from "qs";
// import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// const vuetify = new Vuetify()

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: "http://localhost:9001",
  timeout: 10 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

// custom switch
let custom_options = Object.assign({
  // cancel repeat request
  repeat_request_cancel: true,
  // display loading layer
  //loading: false,
  // filter response
  reduce_data_format: true,
  // 是否开启接口错误信息展示,默认为true
  error_message_show: true,
  // 是否开启status不为0时的信息提示, 默认为false
  status_message_show: true,
});

const LoadingInstance = {
  _target: null,
  _count: 0
};

const requestPendingMap = new Map();
const REQUEST_SUCCESS = 0;

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  function (config) {
    let {confirm,confirmMessage} = config;
    if (confirm) {
      const confirmed = window.confirm(confirmMessage || '确认发送请求？');
      if (confirmed) {
        return config;
      } else {
        Promise.reject(new Error('取消发送请求'));
      }
    }
    /*if (confirm) {
      // 创建Promise对象
      const promise = new Promise((resolve, reject) => {
        // 弹出Vuetify的确认对话框
        const dialog = Vue.extend({
          vuetify,
          data() {
            return {
              dialog: true,
            }
          },
          template: `
            <v-dialog v-model="dialog" max-width="500">
            <v-card>
              <v-card-title class="headline">确认</v-card-title>
              <v-card-text>确认发送请求？</v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="dialog = false; reject()">取消</v-btn>
                <v-btn color="primary" @click="dialog = false; resolve()">确认</v-btn>
              </v-card-actions>
            </v-card>
            </v-dialog>
          `,
          methods: {
            resolve,
            reject,
          },
        })
  
        // 创建Vuetify的确认对话框实例，并挂载到DOM中
        const component = new dialog()
        component.$mount()
        document.body.appendChild(component.$el)
      })
      return promise.then(() => {
         config;
      }).catch(() => {
        Promise.reject(new Error('取消发送请求'));
      });
    }*/
    
    // if request already exit, cancel this request, then add a new record
    removePendingRequest(config);
    custom_options.repeat_request_cancel && addPendingRequest(config);
    
    // create loading instance for Element UI
    // if (custom_options.loading) {
    //   LoadingInstance._count++;
    //   if(LoadingInstance._count === 1) {
    //     LoadingInstance._target = ElLoading.service(loadingOptions);
    //   }
    // }
    
    // add token
    const token = localStorage.getItem('token')
    
    // （typeof window !== "undefined"）
    // detect whether code is running in a typical browser environment
    // e.g. in node.js window is not exit
    if (token && typeof window !== "undefined") {
      config.headers.Authorization = token;
    }
    
    // set general headers
    if (!config.headers["content-type"]) {
      if (config.method === 'post') {
        config.headers["content-type"] = "application/x-www-form-urlencoded;charset=UTF-8";
        // serialize data, e.g. form data
        config.data = qs.stringify(config.data);
      } else {
        config.headers["content-type"] = "application/json;charset=UTF-8";
      }
    }
    // set custom headers
    config.headers['X-Custom-Header'] = 'Roc'
    
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    removePendingRequest(response.config);
    
    custom_options.loading && closeLoading(custom_options);
    
    // backend custom error code, only return 0, when request success
    if (custom_options.status_message_show && response.data && response.data.status !== REQUEST_SUCCESS) {
      alert(
        response.data.message
      )
      // status != REQUEST_SUCCESS,
      return response.data;
    }
    
    return custom_options.reduce_data_format ? response.data : response;
    
  },
  function (error) {
    error.config && removePendingRequest(error.config);
    custom_options.loading && closeLoading(custom_options);
    custom_options.error_message_show && httpErrorStatusHandle(error);
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue) {
  Vue.axios = axiosInstance;
  window.axios = axiosInstance;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axiosInstance;
      }
    },
    $axios: {
      get() {
        return axiosInstance;
      }
    },
  });
};

Vue.use(Plugin)

export default axiosInstance;

/**
 * handle http error
 * @param {*} error
 */
function httpErrorStatusHandle(error) {
  // if the request is cancelled
  if (axios.isCancel(error)) return console.error('repeat request：' + error.message);
  
  let message = '';
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        message = 'Redirect！';
        break;
      case 400:
        message = 'Bad Request！';
        break;
      case 401:
        message = 'Unauthorized！';
        break;
      case 403:
        message = 'Forbidden: permission deny！';
        break;
      case 404:
        message = `Not Found: ${error.response.config.url}`;
        break;
      case 408:
        message = 'Request timeout！';
        break;
      case 409:
        message = 'Conflict: data are already exit！';
        break;
      case 500:
        message = 'Internal Server Error！';
        break;
      case 501:
        message = 'Not Implemented！';
        break;
      case 502:
        message = 'Bad Gateway！';
        break;
      case 503:
        message = 'Service Unavailable！';
        break;
      case 504:
        message = 'Gateway Timeout！';
        break;
      case 505:
        message = 'HTTP Version Not Supported！';
        break;
      default:
        message = 'Something error, connect application administer';
        break
    }
  }
  if (error.message.includes('timeout')) message = 'Request timeout！';
  if (error.message.includes('Network')) message = window.navigator.onLine ? 'Server fail！' : 'You are offline,check your network！';
  console.log(message);
  
}

/**
 *
 * @param {*} _options
 */
function closeLoading(_options) {
  if (_options.loading && LoadingInstance._count > 0) LoadingInstance._count--;
  if (LoadingInstance._count === 0) {
    LoadingInstance._target.close();
    LoadingInstance._target = null;
  }
}

/**
 * store the unique cancel key
 * @param {*} config
 */
function addPendingRequest(config) {
  const pendingKey = getRequestKey(config);
  config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
    if (!requestPendingMap.has(pendingKey)) {
      requestPendingMap.set(pendingKey, cancel);
    }
  });
}

/**
 *
 * @param {*} config
 */
function removePendingRequest(config) {
  const pendingKey = getRequestKey(config);
  if (requestPendingMap.has(pendingKey)) {
    const cancelToken = requestPendingMap.get(pendingKey);
    // cancel
    cancelToken(pendingKey);
    requestPendingMap.delete(pendingKey);
  }
}

/**
 * generate request key
 * @param {*} config
 * @returns
 */
function getRequestKey(config) {
  let {url, method, params, data} = config;
  if (typeof data === 'string') {
    // config.data in response is string
    data = JSON.parse(data);
  }
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('--');
}

