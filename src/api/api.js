import api from "../plugins/axios"

export const getUser = (p) => api.get('/test/appUser/user', p)

export const getUser2 = () => api({
  method: 'get',
  url: '/api/data',
  confirm: true, // 添加二次确认功能
  confirmMessage: '是否确认获取数据？' // 设置确认对话框提示信息
})




