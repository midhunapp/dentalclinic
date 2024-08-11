import type { NavItemConfig } from '../../../types/nav';
import { paths } from '../../../paths';

export const navItems = [
  { key: 'Users', title: 'Employee', href: paths.adminMenu.addUsers, icon: 'users', disabled:false ,external:false},
  { key: 'Treatments', title: 'Treatments', href: paths.adminMenu.addTreatments, icon: 'users', disabled:false,external:false },
  { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' , disabled:false},
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' , disabled:false},
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user', disabled:false },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' , disabled:false},
] satisfies NavItemConfig[];