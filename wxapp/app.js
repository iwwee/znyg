//app.js
import base from 'config/base'
import page from 'config/page'
import my_wx from 'config/wx'

let Config = {};
Object.assign(Config,base);

App({
	onLaunch(){
		my_wx.getOpenId();
	},
	Config,
	Page: page,
	wx: my_wx
})