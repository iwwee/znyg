import base from 'base'
import regeneratorRuntime from '../libs/regenerator-runtime'
let OpenId = false;
let Location = false;

let Api = {
	openid: base.Url + "/openid"
};

let getLocation = function() {
	if(Location)
		return Location;
    wx.getLocation({
        type: 'gcj02',
        success:(e)=>{
           Location = e
           console.log("获取Location成功")
           return e;
        },
        fail:()=>{
            console.log("获取Location失败")
			wx.showModal({
				title:"操作失败",
				content:"请进入小程序设置打开定位权限",
				showCancel:false
			})
			return false;
        }
    })
}

let openid = (js_code)=> Api.openid + ".php?js_code=" + js_code;

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
        			console.log("获取OpenId成功")
        			return OpenId;
        		}
        	})
        }
    })
}

let request = async function(e,data){
	return new Promise((resolve, reject) => {
		wx.request({
			url:e,
			data:data,
			success:(res)=>{
				resolve(res)
			}
		})
	});
}

export default {
	getOpenId,
	getLocation,
	request
}