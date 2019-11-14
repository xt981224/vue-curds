import axios from 'axios'
export function request(config){
	//1.创建axios实例
	const instance = axios.create({
	baseURL:'http://localhost:3000',
    timeout:5000
   });
     return instance(config)
}
