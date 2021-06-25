export default {
  pages: [
    'pages/index/index',
    'pages/control/index',
    'pages/situation/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    // color: '#ccc',
    borderStyle: 'black',
    // selectedColor: '#000',
    backgroundColor: '#fff',
    list: [
      {
        text: 'dd',
        iconPath: '/static/learn-tab_off.png',
        selectedIconPath: '/static/learn-tab_off.png',
        pagePath: 'pages/control/index'
      },
      {
        text: 'ss',
        iconPath: '/static/learn-tab_off.png',
        selectedIconPath: '/static/learn-tab_off.png',
        pagePath: 'pages/situation/index'
      },
      {
        text: 'cc',
        iconPath: '/static/learn-tab_off.png',
        selectedIconPath: '/static/learn-tab_off.png',
        pagePath: 'pages/index/index'
      }
    ]
  }
}
