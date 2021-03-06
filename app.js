//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
          teachers: [{
        name: '陆宇量',
        id: '250801',
        password: 'passwd',
        avatar: '/img/luyuliang.jpg'
      }, {
        name: '任菲',
        id: '250802',
        password: 'passwd',
        avatar: '/img/renfei.jpg'
      }, {
        name: '阮凯珊',
        id: '250803',
        password: 'passwd',
        avatar: '/img/ruankaishan.jpg'
      }, {
        name: '魏嘉宝',
        id: '250804',
        password: 'passwd',
        avatar: '/img/weijiabao.jpg'
      }, {
        name: '唐安怡',
        id: '250805',
        password: 'passwd',
        avatar: '/img/tanganyi.jpg'
      }, {
        name: '余婉慧',
        id: '250806',
        password: 'passwd',
        avatar: '/img/yuwanhui.jpg'
      }],
      students: [{
        name: '灌嘉键',
        id: '24045501',
        password: 'passwd',
        avatar: '/img/guanjiajian.jpg'
      }, {
        name: '陈嘉欣',
        id: '24045502',
        password: 'passwd',
        avatar: '/img/chenjiaxin.jpg'
      }, {
        name: '陈美君',
        id: '24045503',
        password: 'passwd',
        avatar: '/img/chenmeijun.jpg'
      }, {
        name: '刘维斌',
        id: '24045505',
        password: 'passwd',
        avatar: '/img/liuweibin.jpg'
      }, {
        name: '张洁莹',
        id: '24045506',
        password: 'passwd',
        avatar: '/img/zhangjieying.jpg'
      }]
  }
})