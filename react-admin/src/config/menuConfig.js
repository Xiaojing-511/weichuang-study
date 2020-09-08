const menuList = [
  {
    title: "欢迎",
    path: '/home',
    icon: 'iconhome',
    key: '1'
  },
  {
    title: "轮播图信息",
    path: '/banner',
    icon: 'icontupianx',
    key: '2'
  },
  {
    title: "用户管理",
    path: '/user',
    icon: 'iconuser',
    key: '3',
    children: [
      {
        title: "创建用户",
        path: '/user/add',
        key: '7',
      },
      {
        title: "用户列表",
        path: '/user/list',
        key: '8',
      },
    ]
  },
  {
    title: "课程分类",
    path: '/classify',
    icon: 'iconfenlei',
    key: '4',
    children: [
      {
        title: "分类列表",
        path: '/classify/list',
        key: '9',
      },
      {
        title: "path列表",
        path: '/classify/path',
        key: '10',
      },
    ]
  },
  {
    title: "教师信息",
    path: '/teacher',
    icon: 'iconteam',
    key: '5'
  },
  {
    title: "课程信息",
    path: '/course',
    icon: 'iconcourse',
    key: '6'
  }
]

export default menuList;