// import http from '@/utils/http';
// import config from '@/config/user.env';

// const findCurrUserUrl = '/api-auth/userInfo/getLogIn';
// const getResuorceBySysAuthUrl = `/mframework/sys/authority/sysAuthResource/getResuorceBySysAuth?appId=${config.appId}`;
// const switchLangUrl = '/mframework/sys/org/savePersonConf';
// const getAllTenantsUrl = '/api-auth/tenant/getUserAllTenants';
// const getApplication = '/api-auth/getUserApplications';
// const logoutAPI = '/api-auth/ssoLogout';

/**
 * 登录后查找当前用户信息
 */
// export function findCurrUser() {
//     return http({
//         url: findCurrUserUrl,
//         method: 'get'
//     });
// }

// /**
//  * 登录后获取当前租户信息
//  */
// export function getUserAllTenants(params) {
//     return http({
//         url: getAllTenantsUrl,
//         method: 'get',
//         params: params
//     });
// }

// /**
//  * 退出登录
//  */
// export function Logout() {
//     return http({
//         url: logoutAPI,
//         method: 'get'
//     });
// }

// /**
//  * 设置租户
//  */
// export function setTenant(data) {
//     return http({
//         url: `/api-auth/setTenant/${data.tenantCode}`,
//         method: 'put'
//     });
// }

// /**
//  * 获取应用
//  */
// export function getUserApplications(params) {
//     return http({
//         url: getApplication,
//         method: 'get',
//         params: params
//     });
// }

// /**
//  * 获取菜单
//  */
// export function getResuorceBySysAuth() {
//     return http({
//         url: getResuorceBySysAuthUrl,
//         method: 'get'
//     });
// }

// /**
//  * 语言切换
//  */
// export function switchLang(langType) {
//     // debugger;
//     return http({
//         url: switchLangUrl,
//         method: 'post',
//         data: {
//             langType
//         }
//     });
// }

// /**
//  * 获取菜单
//  */
// export const getAllResources = (params) => {
//     return http({
//         url: `/api-auth/getAllResources`,
//         method: 'get',
//         params: params
//     });
// };