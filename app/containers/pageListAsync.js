import Loadable from 'react-loadable';
import Loading from 'enl-components/Loading';

export const DashboardPage = Loadable({
  loader: () => import('./Pages/Dashboard'),
  loading: Loading,
});
export const Table = Loadable({
  loader: () => import('./Pages/Table/BasicTable'),
  loading: Loading,
});
export const Form = Loadable({
  loader: () => import('./Pages/Forms/ReduxForm'),
  loading: Loading,
});
export const LoginFullstack = Loadable({
  loader: () => import('./Pages/UsersFullstack/Login'),
  loading: Loading,
});
export const RegisterFullstack = Loadable({
  loader: () => import('./Pages/UsersFullstack/Register'),
  loading: Loading,
});
export const ResetPasswordFullstack = Loadable({
  loader: () => import('./Pages/UsersFullstack/ResetPassword'),
  loading: Loading,
});
// export const Login = Loadable({
//   loader: () => import('./Pages/Users/Login'),
//   loading: Loading,
// });
export const Register = Loadable({
  loader: () => import('./Pages/Users/Register'),
  loading: Loading,
});
export const ResetPassword = Loadable({
  loader: () => import('./Pages/Users/ResetPassword'),
  loading: Loading,
});
export const ComingSoon = Loadable({
  loader: () => import('./Pages/ComingSoon'),
  loading: Loading,
});
export const BlankPage = Loadable({
  loader: () => import('./Pages/BlankPage'),
  loading: Loading,
});
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});
export const Error = Loadable({
  loader: () => import('./Pages/Error'),
  loading: Loading,
});
export const Maintenance = Loadable({
  loader: () => import('./Pages/Maintenance'),
  loading: Loading,
});
export const Parent = Loadable({
  loader: () => import('./Parent'),
  loading: Loading,
});
export const NotFoundDedicated = Loadable({
  loader: () => import('./Pages/Standalone/NotFoundDedicated'),
  loading: Loading,
});
// export const Login = Loadable({
//   loader: () => import('./Pages/Users/Login'),
//   loading: Loading,
// });
/* ------ TEST LIB ----- */
export const Testlib = Loadable({
  loader: () => import('./App/Testlib'),
  loading: Loading,
});
/* ------ 2Fast page ------- */
/* ------ 2Fast Dashboard Home ------- */
export const DashboardHome = Loadable({
  loader: () => import('./TwoFast/Application/DashboardHome/DashboardHome'),
  loading: Loading,
});
/* ------ 2Fast User ------- */
export const ManageUser = Loadable({
  loader: () => import('./TwoFast/Application/Users/ManageNewUser/ManageUser'),
  loading: Loading,
});
export const UserDetail = Loadable({
  loader: () => import('./TwoFast/Application/Users/ManageUser/UserDetail/UserDetail'),
  loading: Loading,
});
/* ------ 2Fast Team ------- */
export const ManageTeam = Loadable({
  loader: () => import('./TwoFast/Application/Team/Main/ManageTeam'),
  loading: Loading,
});
export const TeamDetail = Loadable({
  loader: () => import('./TwoFast/Application/Team/TeamDetail/TeamDetail'),
  loading: Loading,
});
/* ------ 2Fast project ------- */
export const ListProject = Loadable({
  loader: () => import('./TwoFast/Application/Project/ListProject/ListProject'),
  loading: Loading,
});

export const DetailProject = Loadable({
  loader: () => import('./TwoFast/Application/Project/detailProjectInCard/DetailProject'),
  loading: Loading,
});
/* ------ 2Fast job ------- */
export const DetailJob = Loadable({
  loader: () => import('./TwoFast/Application/Job/detailJob/DetailJob'),
  loading: Loading,
});
