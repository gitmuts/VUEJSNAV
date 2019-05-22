const menus = [
  { title: 'Dashboard', icon: 'dashboard', component: '/' },
  { title: 'About', icon: 'question_answer', component: 'About' },
  {
    icon: 'keyboard_arrow_up',
    'icon-alt': 'keyboard_arrow_down',
    title: 'Roles',
    model: false,
    children: [
      { icon: 'add', title: 'Create Role' },
      { icon: 'view_list', title: 'View Roles' }
    ]
  },
  {
    icon: 'keyboard_arrow_up',
    'icon-alt': 'keyboard_arrow_down',
    title: 'Permissions',
    model: false,
    children: [
      { icon: 'add', title: 'Create Permission' },
      { icon: 'view_list', title: 'View Permission' }
    ]
  }
]
export default menus
