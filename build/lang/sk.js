(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery", "moment" ], factory);
    }
    else {
        factory(jQuery, moment);
    }
})(function($, moment) {

// moment.js language configuration
// language : slovak (sk)
// author : Martin Minka : https://github.com/k2s
// based on work of petrbela : https://github.com/petrbela


var months = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
    monthsShort = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

function plural(n) {
    return (n > 1) && (n < 5);
}

function translate(number, withoutSuffix, key, isFuture) {
    var result = number + " ";
    switch (key) {
    case 's':  // a few seconds / in a few seconds / a few seconds ago
        return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
    case 'm':  // a minute / in a minute / a minute ago
        return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
    case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
        if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'minúty' : 'minút');
        } else {
            return result + 'minútami';
        }
        break;
    case 'h':  // an hour / in an hour / an hour ago
        return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
    case 'hh': // 9 hours / in 9 hours / 9 hours ago
        if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'hodiny' : 'hodín');
        } else {
            return result + 'hodinami';
        }
        break;
    case 'd':  // a day / in a day / a day ago
        return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
    case 'dd': // 9 days / in 9 days / 9 days ago
        if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'dni' : 'dní');
        } else {
            return result + 'dňami';
        }
        break;
    case 'M':  // a month / in a month / a month ago
        return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
    case 'MM': // 9 months / in 9 months / 9 months ago
        if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'mesiace' : 'mesiacov');
        } else {
            return result + 'mesiacmi';
        }
        break;
    case 'y':  // a year / in a year / a year ago
        return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
    case 'yy': // 9 years / in 9 years / 9 years ago
        if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'roky' : 'rokov');
        } else {
            return result + 'rokmi';
        }
        break;
    }
}

moment.lang('sk', {
    months : months,
    monthsShort : monthsShort,
    monthsParse : (function (months, monthsShort) {
        var i, _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months, monthsShort)),
    weekdays : "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
    weekdaysShort : "ne_po_ut_st_št_pi_so".split("_"),
    weekdaysMin : "ne_po_ut_st_št_pi_so".split("_"),
    longDateFormat : {
        LT: "H:mm",
        L : "DD.MM.YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd D. MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[dnes o] LT",
        nextDay: '[zajtra o] LT',
        nextWeek: function () {
            switch (this.day()) {
            case 0:
                return '[v nedeľu o] LT';
            case 1:
            case 2:
                return '[v] dddd [o] LT';
            case 3:
                return '[v stredu o] LT';
            case 4:
                return '[vo štvrtok o] LT';
            case 5:
                return '[v piatok o] LT';
            case 6:
                return '[v sobotu o] LT';
            }
        },
        lastDay: '[včera o] LT',
        lastWeek: function () {
            switch (this.day()) {
            case 0:
                return '[minulú nedeľu o] LT';
            case 1:
            case 2:
                return '[minulý] dddd [o] LT';
            case 3:
                return '[minulú stredu o] LT';
            case 4:
            case 5:
                return '[minulý] dddd [o] LT';
            case 6:
                return '[minulú sobotu o] LT';
            }
        },
        sameElse: "L"
    },
    relativeTime : {
        future : "za %s",
        past : "pred %s",
        s : translate,
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Slovak initialisation for the jQuery UI date picker plugin. */
/* Written by Vojtech Rinik (vojto@hmm.sk). */
$.fullCalendar.datepickerLang('sk', 'sk', {
	closeText: 'Zavrieť',
	prevText: '&#x3C;Predchádzajúci',
	nextText: 'Nasledujúci&#x3E;',
	currentText: 'Dnes',
	monthNames: ['január','február','marec','apríl','máj','jún',
	'júl','august','september','október','november','december'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Máj','Jún',
	'Júl','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['nedeľa','pondelok','utorok','streda','štvrtok','piatok','sobota'],
	dayNamesShort: ['Ned','Pon','Uto','Str','Štv','Pia','Sob'],
	dayNamesMin: ['Ne','Po','Ut','St','Št','Pia','So'],
	weekHeader: 'Ty',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("sk", {
	buttonText: {
		month: "Mesiac",
		week: "Týždeň",
		day: "Deň",
		list: "Rozvrh"
	},
	allDayText: "Celý deň"
});

});