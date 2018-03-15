//index.js
//获取应用实例

// import regeneratorRuntime from '../../libs/regenerator-runtime'
const app = getApp()
var _this = "";
Page({
    data: {
        picture: {
            bg: "../../static/mainBg.png",
            map: "../../static/map.png",
            person: "../../static/person.png"
        },
        notice: false,
        loadingText: "加载中"
    },
    onLoad(options) {
        _this = this;
        app.wx.getLocation()
        setInterval(
            ()=>{
                let nowText = this.data.loadingText;
                let nextText = "";
                switch(nowText){
                    case "加载中":
                    case "加载中。":
                    case "加载中。。":
                    nextText = nowText + "。"
                    break;
                    case "加载中。。。":
                    nextText = "加载中"
                    break;
                }
                this.setData({
                    loadingText: nextText
                })
            }
            ,1000)
        wx.request({
            url: app.Page.main.Aritice,
            success: (res) => {
                if (res.data.status == 200) {
                    _this.setData({
                        notice: res.data.data
                    })
                } else {
                    //不给加载TODO
                }
            },
            fail: (res) => {
                console.log(res.data)
            }
        })
    },
    scan() {
        wx.navigateTo({
            url: "../scan/index"
        })
    },
    map() {
        wx.navigateTo({
            url: "../map/index"
        })
    },
    person() {
      // wx.showModal({
      //   title:"操作失败",
      //   content:"你附近没有智能云柜，无法进入下一步",
      //   showCancel:false
      // })
        wx.navigateTo({
            url:'/pages/person/takeout/index'
        })
    }
})