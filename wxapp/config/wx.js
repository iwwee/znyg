import base from 'base'
let OpenId = false;

let jscode2session = (js_code)=>"https://api.weixin.qq.com/sns/jscode2session?appid=" + base.appid + "&secret=" + base.secret + "&js_code=" + js_code + "&grant_type=authorization_code";

let getOpenId = function() {
	if(OpenId)
		return OpenId;
        wx.login({
            success: (res) => {
            	let url = jscode2session(res.code);
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
export default {
	getOpenId
}