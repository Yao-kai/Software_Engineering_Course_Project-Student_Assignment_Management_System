// pages/adduser/adduser.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usertype: '',
    name: '',
    id: '',
    password: '',
    files: [],
    uploaded: 0,
    error: ''
  },
  chooseImage: function (e) {
      var that = this;
      wx.chooseImage({
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              that.setData({
                  files: that.data.files.concat(res.tempFilePaths)
              });
              that.setData({
                uploaded: 1
              })
          }
      })
  },
  inputName: function (e) {
    this.setData({
        name: e.detail.value
    })
  },
  inputID: function (e) {
    this.setData({
        id: e.detail.value
    })
  },
  inputPassword: function (e) {
    this.setData({
        password: e.detail.value
    })
  },
  submitForm() {
    if (this.data.name != "" && this.data.id != "" && this.data.password != "" && this.data.avatar != "") {
      if (this.data.usertype == 0) {
        var newTeacher = {
          name: this.data.name,
          id: this.data.id,
          password: this.data.password,
          avatar: this.data.files[0]
        }
        app.globalData.teachers.push(newTeacher)
      } else {
        var newStudent = {
          name: this.data.name,
          id: this.data.id,
          password: this.data.password,
          avatar: this.data.files[0]
        }
        app.globalData.students.push(newStudent)
      }
      wx.showToast({
        title: '添加成功',
      }),
      setTimeout(function () {
        wx.navigateBack({
          delta: 0,
        })
      }, 700)
    } else {
      this.setData ({
        error: '请重新键入'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      usertype: options.usertype
    })
    if (this.data.usertype == 0) {
      wx.setNavigationBarTitle({
        title: '添加老师',
      })
    } else {
      wx.setNavigationBarTitle({
        title: '添加学生',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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