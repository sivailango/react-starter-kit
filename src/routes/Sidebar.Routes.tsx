const sideBarRoutes = [
  {
    index: 0,
    path: '/home',
    label: 'Dashboard',
    icon: 'icon mdi mdi-home-outline',
    submenus: [
      {
        path: '/pages/sub-menu-1',
        label: 'People',
        icon: '',
      },
      {
        path: '/pages/sub-menu-1',
        label: 'Revenue',
        icon: '',
      },
    ],
  },
  {
    index: 1,
    path: '/home',
    label: 'Forms',
    icon: 'icon mdi mdi-home-outline',
    submenus: [
      {
        path: '/pages/sub-menu-1',
        label: 'JSON Form',
        icon: '',
      },
      {
        path: '/pages/sub-menu-1',
        label: 'Components',
        icon: '',
      },
    ],
  },
  {
    index: 2,
    path: '/profile',
    label: 'Charts',
    icon: 'icon mdi mdi-book-outline',
  },
  {
    index: 3,
    path: '/pages',
    label: 'Table',
    icon: 'icon mdi mdi-settings-outline',
    submenus: [
      {
        path: '/pages/sub-menu-1',
        label: 'Simple',
        icon: '',
      },
      {
        path: '/pages/sub-menu-1',
        label: 'Data Table',
        icon: '',
      },
    ],
  },
];

export default sideBarRoutes;
