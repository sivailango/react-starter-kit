const sideBarRoutes = [
  {
    index: 0,
    path: '/home',
    label: 'Home',
    icon: 'icon mdi mdi-home-outline',
    submenus: [
      {
        path: '/pages/sub-menu-1',
        label: 'Sub Menu 1',
        icon: '',
      },
      {
        path: '/pages/sub-menu-1',
        label: 'Sub Menu 2',
        icon: '',
      },
    ],
  },
  {
    index: 1,
    path: '/profile',
    label: 'Profile',
    icon: 'icon mdi mdi-book-outline',
  },
  {
    index: 2,
    path: '/pages',
    label: 'Pages',
    icon: 'icon mdi mdi-settings-outline',
    submenus: [
      {
        path: '/pages/sub-menu-1',
        label: 'Sub Menu 1',
        icon: '',
      },
      {
        path: '/pages/sub-menu-1',
        label: 'Sub Menu 2',
        icon: '',
      },
    ],
  },
  {
    index: 3,
    path: '/settings',
    label: 'Settings',
    icon: 'icon mdi mdi-settings-outline',
  },
];

export default sideBarRoutes;
