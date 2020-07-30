import cookies from 'js-cookie';
// import config from '../config/user.env';
// import { Logout } from '@/modules/index/api/user';
import store from '@/store/index';
/**
 * 退出登录
 */
export function logout() {
    cookies.remove(config.MAS_TGC, { domain: '.midea.com' });
    cookies.remove('OAM_ID', { domain: '.midea.com' });
    Logout();
    window.location.href = config.singlePointLogin + window.location.href;
}

/**
 * 判断是否登录
 * @param {*} router 路由
 */
export function checkLogin(router, whiteList) {
    router.beforeEach((to, from, next) => {
        const masTGC = cookies.get(config.MAS_TGC);
        if (whiteList && whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            if (masTGC) {
                const { userCode } = store.getters.user;
                if (userCode) {
                    next();
                } else {
                    store.dispatch('initSystem').then(res => {
                        if (res) {
                            next();
                        }
                    });
                }
            } else {
                logout();
            }
        }
    });
}

export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null;
    }
    const date = new Date(time);
    let fmt = cFormat || 'yyyy-MM-dd hh:mm:ss';
    const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3) // 季度
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    Object.keys(o).forEach(k => {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    });
    return fmt;
}
