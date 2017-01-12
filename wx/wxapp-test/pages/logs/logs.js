//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: 'zuodw_wx_app',
      desc: '[wx app by zuodw]',
      path: '/pages/logs/logs'
    }
  }
})
