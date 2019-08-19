const sideBarRoutes = [
  {
    index: 0,
    path: '/app/dashboard',
    label: 'Dashboard',
    icon: 'icon mdi mdi-home-outline',
  },
  {
    index: 1,
    path: '/home',
    label: 'Forms',
    icon: 'icon mdi mdi-home-outline',
    submenus: [
      {
        path: '/app/forms/json',
        label: 'JSON Form',
        icon: '',
      },
      {
        path: '/app/forms/components',
        label: 'Components',
        icon: '',
      },
    ],
  },
  {
    index: 2,
    path: '/app/charts',
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
        path: '/app/table/basic',
        label: 'Simple',
        icon: '',
      },
      {
        path: '/app/table/dataTable',
        label: 'Data Table',
        icon: '',
      },
    ],
  },
  {
    index: 4,
    path: '/app/blank',
    label: 'Blank',
    icon: 'icon mdi mdi-book-outline',
  },
];

export default sideBarRoutes;
