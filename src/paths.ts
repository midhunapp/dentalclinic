export const paths = {
    home: '/',
    auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
    admin:{adminhome:'pages/admin/adminhome'},
    dashboard: {
      overview: '/dashboard',
      account: '/dashboard/account',
      customers: '/dashboard/customers',
      integrations: '/dashboard/integrations',
      settings: '/dashboard/settings',
    },
    errors: { notFound: '/errors/not-found' },
  } as const;