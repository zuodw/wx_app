//index.js
import left from '../../resource/js/menu.js'
Page({
  data: {
    imgUrls: [
'http://y.gtimg.cn/music/photo_new/T003R720x288M000000rVobR3xG73f.jpg',
'http://y.gtimg.cn/music/photo_new/T003R720x288M000000j6Tax0WLWhD.jpg',
'http://y.gtimg.cn/music/photo_new/T003R720x288M000000a4LLK2VXxvj.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiperCurrent: 0,
    
    toView: 'blue',
    menu: 'menu'
  },
  selectMenu:function(event){
    let item = event.currentTarget.dataset
    this.setData({
      toView: item.tag
    })
    // this.data.toView = 'red'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onScroll:function(e){
    console.log(e)
  }
})