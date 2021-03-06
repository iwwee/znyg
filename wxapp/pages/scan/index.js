// pages/scan/index.js
const app = getApp()
var form_id = false;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  scan() {
    wx.scanCode({
      onlyFromCamera:true,
      complete:(res)=>{
        wx.showModal({
          title:"扫描失败",
          content:"很抱歉，您扫描的不是我们的储物柜",
          showCancel:false,
          success:(e)=>{
            let data = {}
            data.openid = app.wx.getOpenId();
            data.formId = form_id
            console.log(data)
            app.wx.request(app.Page.scan.sendTemplate,data)
            wx.redirectTo({
              url:"../main/index"
            })
          }
        })
      }
    })
  },
    formSubmit(e){
      form_id = e.detail.formId
    },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})