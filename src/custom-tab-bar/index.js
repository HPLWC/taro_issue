Component({
  data: {
    selected: 0,
    color: '#ccc',
    selectedColor: '#000',
    list: [
      {
        pagePath: '/pages/control/index',
        iconPath: '/static/learn-tab_off.png',
        selectedIconPath: '/static/learn-tab_on.png',
        text: 'dd'
      },
      {
        pagePath: '/pages/situation/index',
        iconPath: '/static/learn-tab_off.png',
        selectedIconPath: '/static/learn-tab_on.png',
        text: 'ss'
      },
      {
        pagePath: '/pages/index/index',
        iconPath: '/static/learn-tab_off.png',
        selectedIconPath: '/static/learn-tab_on.png',
        text: 'cc'
      },
    ]
  },
  methods: {
    handleClick(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.key
      })
    }
  }
})