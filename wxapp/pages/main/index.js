//index.js
//获取应用实例
const app = getApp()
var _this = "";

Page({
  data: {
    picture:{
      bg: "../../static/mainBg.png",
      map: "../../static/map.png",
      person: "../../static/person.png"
    },
    notice: false
  },
  onLoad(options){
    _this = this;
    wx.request({
      url: app.Page.main.Aritice,
      success: (res)=>{
        if(res.data.status==200){
          _this.setData({notice:res.data.data})
        }else{
          //不给加载TODO
        }
      },
      fail: (res)=>{
        console.log(res.data)
      }
    })
  },
  scan(){
  	       wx.redirectTo({
              url:"../scan/index"
          })
  },
  map(){
           wx.redirectTo({
              url:"../map/index"
          })
  }
})