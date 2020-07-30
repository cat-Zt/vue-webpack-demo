/*eslint-disable*/
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';
// import store from '../../store/index';
// import '../../utils/directive/display';
// import { checkLogin } from '../../utils/index';
// import '../../../theme/index.css';
// import '../../styles/base.less';

// import 'babel-polyfill';
import utils from '@/utils/common';
// const whiteList = [];

// checkLogin(router, whiteList);

// store.dispatch('UPDATE_LANG').then(i18n => {
    // Vue.use(ElementUI, {
    //     i18n: (path, options) => {
    //         const value = i18n.t(path, options);
    //         if (value) return value;
    //         return '';
    //     }
    // });
    new Vue({
        router,
        mixins: [utils.IE11RouterFix()],
        render: h => h(App)
    }).$mount('#app');
// });