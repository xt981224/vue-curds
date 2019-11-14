import {request} from './request'
export function getuseralldata(){
	return request({
		url:'/users'
	})
}

export function  delecust(id){
	return request({
		url:'/users/'+id,
		 method:'delete',
	})
}

export function getuserdata(id){
	return request({
			url:'/users/',id,
	})
}
export function editdata(id){
	return request({
			url:'/users/'+id,
	})
}
