export const roleInfo = [
  {"username": "normal", "password": "123456", "role": "normal"},
  {"username": "manage", "password": "123456", "role": "manage"},
  {"username": "highmanage", "password": "123456", "role": "highmanage"},
]

export const routeConfig = [
  {route: '/login', role: ['normal', 'manage', 'highmanage']},
  {route: '/normal', role: ['normal', 'manage', 'highmanage']},
  {route: '/manage', role: ['manage','highmanage']},
  {route: '/highmanage', role: ['highmanage']},
  {route: '/notadmit', role: ['normal', 'manage', 'highmanage']},
]

export const menuConfig = [
  {name: '普通用户', index: '/normal', role: ['normal', 'manage', 'highmanage']},
  {name: '管理员', index: '/manage', role: ['manage','highmanage']},
  {name: '高级管理员', index: '/highmanage', role: ['highmanage']},
]