// pages/scan/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:{},
    markers:[],
    circles:[],
    controls:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // return;
    let location = app.wx.getLocation()
    this.setData({
      location: location,
      circles: [{
          latitude: location.latitude,
          longitude: location.longitude,
          color: '#FF0000DD',
          fillColor: '#7cb5ec88',
          radius: 600,
          strokeWidth: 1
        }],
      markers: [{
        id: 0,
        iconPath:"/static/mapt.png",
        latitude: location.latitude,
        longitude: location.longitude,
        width: 30,
        height: 30,
        callout: {
          content:"我的位置",
          bgColor:"#CCFF33",
          padding: 10,
          borderRadius: 15,
          alpha:0.5
        }
      }],
      controls:{

      }
    })

    console.log(this.data.location)
    console.log(this.data.markers)
  },
  bindmark(e){
    console.log(e)
  },
  find(){
    wx.showToast({
      title:"正在搜索",
      icon:"loading",
    })
    setTimeout(()=>{
         wx.showModal({
          title:"操作失败",
          content:"很遗憾，你附近没有智能云柜",
          showCancel:false
        })
    },1500)
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
            wx.redirectTo({
              url:"../main/index"
            })
          }
        })
      }
    })
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