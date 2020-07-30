const utils = {
    formatYear(date) {
        return date.getFullYear().toString();
    },
    formatMonth(date) {
        return this.formatDateNumber(date.getMonth() + 1);
    },
    formatDay(date) {
        return this.formatDateNumber(date.getDate());
    },
    formatHour(date) {
        return this.formatDateNumber(date.getHours());
    },
    formatMinutes(date) {
        return this.formatDateNumber(date.getMinutes());
    },
    formatSeconds(date) {
        return this.formatDateNumber(date.getSeconds());
    },
    formatDateNumber(num) {
        return num >= 10 ? num.toString() : '0' + num;
    },
    formatDate(date) {
        const newDate = new Date(date);
        return this.formatYear(newDate) + '-' + this.formatMonth(newDate) + '-' + this.formatDay(newDate);
    },
    formatDateTime(date) {
        if (date) {
            const newDate = new Date(date);
            return this.formatYear(newDate) + '-' + this.formatMonth(newDate) + '-' + this.formatDay(newDate) +
                ' ' + this.formatHour(newDate) + ':' + this.formatMinutes(newDate) + ':' + this.formatSeconds(newDate);
        } else {
            return null;
        }
    },
    formatShortDateTime() {
        const newDate = new Date();
        return this.formatYear(newDate) + this.formatMonth(newDate) + this.formatDay(newDate) +
            this.formatHour(newDate) + this.formatMinutes(newDate) + this.formatSeconds(newDate);
    },
    getMenus(routes = []) {
        if (routes.length === 0) {
            return [];
        }
        return this.filterRoute(this.filterRoute(routes)[0].children);
    },
    filterRoute(routes) {
        return routes.filter(item => item.fdId && item.fdId !== null);
    },
    judgeArray(firstArr, seconArr) {
        return firstArr.every(item => {
            return seconArr.indexOf(item) !== -1;
        });
    },
    ArrMove(arr, index, tindex) { // 数组移动，arr目标数组，index当前下标，tindex目标下标
        if (index > tindex) {
            arr.splice(tindex, 0, arr[index]);
            arr.splice(index + 1, 1);
        } else {
            arr.splice(tindex + 1, 0, arr[index]);
            arr.splice(index, 1);
        }
        return arr;
    },
    getResourceIds(v) {
        const tempArr = [];
        getId(v);

        function getId(v) {
            v.forEach(item => {
                if (+item.resourceType === 3 && item.resourceId) {
                    tempArr.push(item.resourceId);
                } else if (item.subResources) {
                    getId(item.subResources);
                }
            });
        }
        return tempArr;
    },
    IE11RouterFix() {
        return {
            methods: {
                _hashChangeHandler: function () {
                    this.$router.push(window.location.hash.substring(1, window.location.hash.length));
                },
                _isIE11: function () {
                    return !!window.MSInputMethodContext && !!document.documentMode;
                }
            },
            mounted: function () {
                if (this._isIE11()) {
                    window.addEventListener('hashchange', this._hashChangeHandler);
                }
            },
            destroyed: function () {
                if (this._isIE11()) {
                    window.removeEventListener('hashchange', this._hashChangeHandler);
                }
            }
        };
    }
};
export default utils;
