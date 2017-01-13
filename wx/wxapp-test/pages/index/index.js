//index.js
//import left from './resources/js/menu.js'
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
    
    menu: "menu"
  },
   selectMenu:function(event){
    let item = event.currentTarget.dataset
    this.setData({
      toView: item.tag
    })
    // this.data.toView = 'red'
  },
})