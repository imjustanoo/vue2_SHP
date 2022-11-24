//axios的二次封装
import axios from "axios";


const requests = axios.create({
	//基础路径
	baseURL: "/mock",
	// 超时时间
	timeout: 5000,

})

// 请求拦截器对象
requests.interceptors.request.use((config) => {


	return config
})


// 响应拦截器
requests.interceptors.response.use((res) => {

	return res.data

}, (err) => {


})

export default requests