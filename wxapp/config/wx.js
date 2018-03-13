import base from 'base'
import regeneratorRuntime from '../libs/regenerator-runtime'
let OpenId = false;

let Api = {
	openid: "/openid"
};

let openid = (js_code)=>base.Url + Api.openid + "?js_code=" + js_code;

let getOpenId = function() {
	if(OpenId)
		return OpenId;
        wx.login({
            success: (res) => {
            	let url = openid(res.code);
            	wx.request({
            		url:url,
            		success:(res)=>{
            			OpenId = res.data.openid;
            			console.log("获取成功")
            			return OpenId;
            		}
            	})
            }
        })
}

let request = async function(e,data,f){
	return new Promise((resolve, reject) => {
		e.success = resolve()
		wx.request({
			url:url,
			data:data,
			success:(res)=>{
				resolve(f(res))
			}
		})
	});
}

export default {
	getOpenId
}