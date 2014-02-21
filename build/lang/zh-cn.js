(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery", "moment" ], factory);
    }
    else {
        factory(jQuery, moment);
    }
})(function($, moment) {

// moment.js language configuration
// language : chinese
// author : suupic : https://github.com/suupic
// author : Zeno Zeng : https://github.com/zenozeng


moment.lang('zh-cn', {
    months : "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
    monthsShort : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays : "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
    weekdaysShort : "周日_周一_周二_周三_周四_周五_周六".split("_"),
    weekdaysMin : "日_一_二_三_四_五_六".split("_"),
    longDateFormat : {
        LT : "Ah点mm",
        L : "YYYY-MM-DD",
        LL : "YYYY年MMMD日",
        LLL : "YYYY年MMMD日LT",
        LLLL : "YYYY年MMMD日ddddLT",
        l : "YYYY-MM-DD",
        ll : "YYYY年MMMD日",
        lll : "YYYY年MMMD日LT",
        llll : "YYYY年MMMD日ddddLT"
    },
    meridiem : function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return "凌晨";
        } else if (hm < 900) {
            return "早上";
        } else if (hm < 1130) {
            return "上午";
        } else if (hm < 1230) {
            return "中午";
        } else if (hm < 1800) {
            return "下午";
        } else {
            return "晚上";
        }
    },
    calendar : {
        sameDay : function () {
            return this.minutes() === 0 ? "[今天]Ah[点整]" : "[今天]LT";
        },
        nextDay : function () {
            return this.minutes() === 0 ? "[明天]Ah[点整]" : "[明天]LT";
        },
        lastDay : function () {
            return this.minutes() === 0 ? "[昨天]Ah[点整]" : "[昨天]LT";
        },
        nextWeek : function () {
            var startOfWeek, prefix;
            startOfWeek = moment().startOf('week');
            prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
            return this.minutes() === 0 ? prefix + "dddAh点整" : prefix + "dddAh点mm";
        },
        lastWeek : function () {
            var startOfWeek, prefix;
            startOfWeek = moment().startOf('week');
            prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
            return this.minutes() === 0 ? prefix + "dddAh点整" : prefix + "dddAh点mm";
        },
        sameElse : 'LL'
    },
    ordinal : function (number, period) {
        switch (period) {
        case "d":
        case "D":
        case "DDD":
            return number + "日";
        case "M":
            return number + "月";
        case "w":
        case "W":
            return number + "周";
        default:
            return number;
        }
    },
    relativeTime : {
        future : "%s内",
        past : "%s前",
        s : "几秒",
        m : "1分钟",
        mm : "%d分钟",
        h : "1小时",
        hh : "%d小时",
        d : "1天",
        dd : "%d天",
        M : "1个月",
        MM : "%d个月",
        y : "1年",
        yy : "%d年"
    },
    week : {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
$.fullCalendar.datepickerLang('zh-cn', 'zh-CN', {
	closeText: '关闭',
	prevText: '&#x3C;上月',
	nextText: '下月&#x3E;',
	currentText: '今天',
	monthNames: ['一月','二月','三月','四月','五月','六月',
	'七月','八月','九月','十月','十一月','十二月'],
	monthNamesShort: ['一月','二月','三月','四月','五月','六月',
	'七月','八月','九月','十月','十一月','十二月'],
	dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
	dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
	dayNamesMin: ['日','一','二','三','四','五','六'],
	weekHeader: '周',
	dateFormat: 'yy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '年'});


$.fullCalendar.lang("zh-cn", {
	buttonText: {
		month: "月",
		week: "周",
		day: "日",
		list: "日程"
	},
	allDayText: "全天"
});

});