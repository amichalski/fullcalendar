(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery", "moment" ], factory);
    }
    else {
        factory(jQuery, moment);
    }
})(function($, moment) {

(function() {

// moment.js language configuration
// language : Moroccan Arabic (ar-ma)
// author : ElFadili Yassine : https://github.com/ElFadiliY
// author : Abdel Said : https://github.com/abdelsaid


moment.lang('ar-ma', {
    months : "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
    monthsShort : "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
    weekdays : "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort : "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
    weekdaysMin : "ح_ن_ث_ر_خ_ج_س".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[اليوم على الساعة] LT",
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "في %s",
        past : "منذ %s",
        s : "ثوان",
        m : "دقيقة",
        mm : "%d دقائق",
        h : "ساعة",
        hh : "%d ساعات",
        d : "يوم",
        dd : "%d أيام",
        M : "شهر",
        MM : "%d أشهر",
        y : "سنة",
        yy : "%d سنوات"
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Arabic Translation for jQuery UI date picker plugin. */
/* Khaled Alhourani -- me@khaledalhourani.com */
/* NOTE: monthNames are the original months names and they are the Arabic names, not the new months name فبراير - يناير and there isn't any Arabic roots for these months */
$.fullCalendar.datepickerLang('ar-ma', 'ar', {
	closeText: 'إغلاق',
	prevText: '&#x3C;السابق',
	nextText: 'التالي&#x3E;',
	currentText: 'اليوم',
	monthNames: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'مايو', 'حزيران',
	'تموز', 'آب', 'أيلول',	'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],
	monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	dayNames: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
	dayNamesShort: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
	dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
	weekHeader: 'أسبوع',
	dateFormat: 'dd/mm/yy',
	firstDay: 6,
  		isRTL: true,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("ar-ma", {
	buttonText: {
		month: "شهر",
		week: "أسبوع",
		day: "يوم",
		list: "أجندة"
	},
	allDayText: "اليوم كله"
});

})();
(function() {

// moment.js language configuration
// language : Arabic (ar)
// author : Abdel Said : https://github.com/abdelsaid
// changes in months, weekdays : Ahmed Elkhatib


moment.lang('ar', {
    months : "يناير/ كانون الثاني_فبراير/ شباط_مارس/ آذار_أبريل/ نيسان_مايو/ أيار_يونيو/ حزيران_يوليو/ تموز_أغسطس/ آب_سبتمبر/ أيلول_أكتوبر/ تشرين الأول_نوفمبر/ تشرين الثاني_ديسمبر/ كانون الأول".split("_"),
    monthsShort : "يناير/ كانون الثاني_فبراير/ شباط_مارس/ آذار_أبريل/ نيسان_مايو/ أيار_يونيو/ حزيران_يوليو/ تموز_أغسطس/ آب_سبتمبر/ أيلول_أكتوبر/ تشرين الأول_نوفمبر/ تشرين الثاني_ديسمبر/ كانون الأول".split("_"),
    weekdays : "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort : "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysMin : "ح_ن_ث_ر_خ_ج_س".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[اليوم على الساعة] LT",
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "في %s",
        past : "منذ %s",
        s : "ثوان",
        m : "دقيقة",
        mm : "%d دقائق",
        h : "ساعة",
        hh : "%d ساعات",
        d : "يوم",
        dd : "%d أيام",
        M : "شهر",
        MM : "%d أشهر",
        y : "سنة",
        yy : "%d سنوات"
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Arabic Translation for jQuery UI date picker plugin. */
/* Khaled Alhourani -- me@khaledalhourani.com */
/* NOTE: monthNames are the original months names and they are the Arabic names, not the new months name فبراير - يناير and there isn't any Arabic roots for these months */
$.fullCalendar.datepickerLang('ar', 'ar', {
	closeText: 'إغلاق',
	prevText: '&#x3C;السابق',
	nextText: 'التالي&#x3E;',
	currentText: 'اليوم',
	monthNames: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'مايو', 'حزيران',
	'تموز', 'آب', 'أيلول',	'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],
	monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	dayNames: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
	dayNamesShort: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
	dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
	weekHeader: 'أسبوع',
	dateFormat: 'dd/mm/yy',
	firstDay: 6,
  		isRTL: true,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("ar", {
	buttonText: {
		month: "شهر",
		week: "أسبوع",
		day: "يوم",
		list: "أجندة"
	},
	allDayText: "اليوم كله"
});

})();
(function() {

// moment.js language configuration
// language : bulgarian (bg)
// author : Krasen Borisov : https://github.com/kraz


moment.lang('bg', {
    months : "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
    monthsShort : "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
    weekdays : "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
    weekdaysShort : "нед_пон_вто_сря_чет_пет_съб".split("_"),
    weekdaysMin : "нд_пн_вт_ср_чт_пт_сб".split("_"),
    longDateFormat : {
        LT : "H:mm",
        L : "D.MM.YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Днес в] LT',
        nextDay : '[Утре в] LT',
        nextWeek : 'dddd [в] LT',
        lastDay : '[Вчера в] LT',
        lastWeek : function () {
            switch (this.day()) {
            case 0:
            case 3:
            case 6:
                return '[В изминалата] dddd [в] LT';
            case 1:
            case 2:
            case 4:
            case 5:
                return '[В изминалия] dddd [в] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : "след %s",
        past : "преди %s",
        s : "няколко секунди",
        m : "минута",
        mm : "%d минути",
        h : "час",
        hh : "%d часа",
        d : "ден",
        dd : "%d дни",
        M : "месец",
        MM : "%d месеца",
        y : "година",
        yy : "%d години"
    },
    ordinal : function (number) {
        var lastDigit = number % 10,
            last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        } else if (last2Digits === 0) {
            return number + '-ен';
        } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        } else if (lastDigit === 1) {
            return number + '-ви';
        } else if (lastDigit === 2) {
            return number + '-ри';
        } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        } else {
            return number + '-ти';
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Bulgarian initialisation for the jQuery UI date picker plugin. */
/* Written by Stoyan Kyosev (http://svest.org). */
$.fullCalendar.datepickerLang('bg', 'bg', {
	closeText: 'затвори',
	prevText: '&#x3C;назад',
	nextText: 'напред&#x3E;',
	nextBigText: '&#x3E;&#x3E;',
	currentText: 'днес',
	monthNames: ['Януари','Февруари','Март','Април','Май','Юни',
	'Юли','Август','Септември','Октомври','Ноември','Декември'],
	monthNamesShort: ['Яну','Фев','Мар','Апр','Май','Юни',
	'Юли','Авг','Сеп','Окт','Нов','Дек'],
	dayNames: ['Неделя','Понеделник','Вторник','Сряда','Четвъртък','Петък','Събота'],
	dayNamesShort: ['Нед','Пон','Вто','Сря','Чет','Пет','Съб'],
	dayNamesMin: ['Не','По','Вт','Ср','Че','Пе','Съ'],
	weekHeader: 'Wk',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("bg", {
	buttonText: {
		month: "Месец",
		week: "Седмица",
		day: "Ден",
		list: "График"
	},
	allDayText: "Цял ден"
});

})();
(function() {

// moment.js language configuration
// language : catalan (ca)
// author : Juan G. Hurtado : https://github.com/juanghurtado


moment.lang('ca', {
    months : "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
    monthsShort : "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
    weekdays : "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
    weekdaysShort : "dg._dl._dt._dc._dj._dv._ds.".split("_"),
    weekdaysMin : "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
    longDateFormat : {
        LT : "H:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay : function () {
            return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        nextDay : function () {
            return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        lastDay : function () {
            return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : "en %s",
        past : "fa %s",
        s : "uns segons",
        m : "un minut",
        mm : "%d minuts",
        h : "una hora",
        hh : "%d hores",
        d : "un dia",
        dd : "%d dies",
        M : "un mes",
        MM : "%d mesos",
        y : "un any",
        yy : "%d anys"
    },
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Inicialització en català per a l'extensió 'UI date picker' per jQuery. */
/* Writers: (joan.leon@gmail.com). */
$.fullCalendar.datepickerLang('ca', 'ca', {
	closeText: 'Tanca',
	prevText: 'Anterior',
	nextText: 'Següent',
	currentText: 'Avui',
	monthNames: ['gener','febrer','març','abril','maig','juny',
	'juliol','agost','setembre','octubre','novembre','desembre'],
	monthNamesShort: ['gen','feb','març','abr','maig','juny',
	'jul','ag','set','oct','nov','des'],
	dayNames: ['diumenge','dilluns','dimarts','dimecres','dijous','divendres','dissabte'],
	dayNamesShort: ['dg','dl','dt','dc','dj','dv','ds'],
	dayNamesMin: ['dg','dl','dt','dc','dj','dv','ds'],
	weekHeader: 'Set',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("ca", {
	buttonText: {
		month: "Mes",
		week: "Setmana",
		day: "Dia",
		list: "Agenda"
	},
	allDayText: "Tot el dia"
});

})();
(function() {

// moment.js language configuration
// language : czech (cs)
// author : petrbela : https://github.com/petrbela


var months = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
    monthsShort = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");

function plural(n) {
    return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
}

function translate(number, withoutSuffix, key, isFuture) {
    var result = number + " ";
    switch (key) {
    case 's':  // a few seconds / in a few seconds / a few seconds ago
        return (withoutSuffix || isFuture) ? 'pár vteřin' : 'pár vteřinami';
    case 'm':  // a minute / in a minute / a minute ago
        return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
    case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
        if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'minuty' : 'minut');
        } else {
            return result + 'minutami';
        }
        break;
    case 'h':  // an hour / in an hour / an hour ago
        return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
    case 'hh': // 9 hours / in 9 hours / 9 hours ago
        if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'hodiny' : 'hodin');
        } else {
            return result + 'hodinami';
        }
        break;
    case 'd':  // a day / in a day / a day ago
        return (withoutSuffix || isFuture) ? 'den' : 'dnem';
    case 'dd': // 9 days / in 9 days / 9 days ago
        if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'dny' : 'dní');
        } else {
            return result + 'dny';
        }
        break;
    case 'M':  // a month / in a month / a month ago
        return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
    case 'MM': // 9 months / in 9 months / 9 months ago
        if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'měsíce' : 'měsíců');
        } else {
            return result + 'měsíci';
        }
        break;
    case 'y':  // a year / in a year / a year ago
        return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
    case 'yy': // 9 years / in 9 years / 9 years ago
        if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'roky' : 'let');
        } else {
            return result + 'lety';
        }
        break;
    }
}

moment.lang('cs', {
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
    weekdays : "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
    weekdaysShort : "ne_po_út_st_čt_pá_so".split("_"),
    weekdaysMin : "ne_po_út_st_čt_pá_so".split("_"),
    longDateFormat : {
        LT: "H:mm",
        L : "DD.MM.YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd D. MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[dnes v] LT",
        nextDay: '[zítra v] LT',
        nextWeek: function () {
            switch (this.day()) {
            case 0:
                return '[v neděli v] LT';
            case 1:
            case 2:
                return '[v] dddd [v] LT';
            case 3:
                return '[ve středu v] LT';
            case 4:
                return '[ve čtvrtek v] LT';
            case 5:
                return '[v pátek v] LT';
            case 6:
                return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        lastWeek: function () {
            switch (this.day()) {
            case 0:
                return '[minulou neděli v] LT';
            case 1:
            case 2:
                return '[minulé] dddd [v] LT';
            case 3:
                return '[minulou středu v] LT';
            case 4:
            case 5:
                return '[minulý] dddd [v] LT';
            case 6:
                return '[minulou sobotu v] LT';
            }
        },
        sameElse: "L"
    },
    relativeTime : {
        future : "za %s",
        past : "před %s",
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


/* Czech initialisation for the jQuery UI date picker plugin. */
/* Written by Tomas Muller (tomas@tomas-muller.net). */
$.fullCalendar.datepickerLang('cs', 'cs', {
	closeText: 'Zavřít',
	prevText: '&#x3C;Dříve',
	nextText: 'Později&#x3E;',
	currentText: 'Nyní',
	monthNames: ['leden','únor','březen','duben','květen','červen',
	'červenec','srpen','září','říjen','listopad','prosinec'],
	monthNamesShort: ['led','úno','bře','dub','kvě','čer',
	'čvc','srp','zář','říj','lis','pro'],
	dayNames: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
	dayNamesShort: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
	dayNamesMin: ['ne','po','út','st','čt','pá','so'],
	weekHeader: 'Týd',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("cs", {
	buttonText: {
		month: "Měsíc",
		week: "Týden",
		day: "Den",
		list: "Agenda"
	},
	allDayText: "Celý den"
});

})();
(function() {

// moment.js language configuration
// language : danish (da)
// author : Ulrik Nielsen : https://github.com/mrbase


moment.lang('da', {
    months : "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
    monthsShort : "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
    weekdays : "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
    weekdaysShort : "søn_man_tir_ons_tor_fre_lør".split("_"),
    weekdaysMin : "sø_ma_ti_on_to_fr_lø".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D. MMMM, YYYY LT"
    },
    calendar : {
        sameDay : '[I dag kl.] LT',
        nextDay : '[I morgen kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[I går kl.] LT',
        lastWeek : '[sidste] dddd [kl] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "om %s",
        past : "%s siden",
        s : "få sekunder",
        m : "et minut",
        mm : "%d minutter",
        h : "en time",
        hh : "%d timer",
        d : "en dag",
        dd : "%d dage",
        M : "en måned",
        MM : "%d måneder",
        y : "et år",
        yy : "%d år"
    },
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Danish initialisation for the jQuery UI date picker plugin. */
/* Written by Jan Christensen ( deletestuff@gmail.com). */
$.fullCalendar.datepickerLang('da', 'da', {
	closeText: 'Luk',
	prevText: '&#x3C;Forrige',
	nextText: 'Næste&#x3E;',
	currentText: 'Idag',
	monthNames: ['Januar','Februar','Marts','April','Maj','Juni',
	'Juli','August','September','Oktober','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'],
	dayNamesShort: ['Søn','Man','Tir','Ons','Tor','Fre','Lør'],
	dayNamesMin: ['Sø','Ma','Ti','On','To','Fr','Lø'],
	weekHeader: 'Uge',
	dateFormat: 'dd-mm-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("da", {
	buttonText: {
		month: "Måned",
		week: "Uge",
		day: "Dag",
		list: "Agenda"
	},
	allDayText: "Hele dagen"
});

})();
(function() {

// moment.js language configuration
// language : german (de)
// author : lluchs : https://github.com/lluchs
// author: Menelion Elensúle: https://github.com/Oire


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [number + ' Tage', number + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [number + ' Monate', number + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [number + ' Jahre', number + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}

moment.lang('de', {
    months : "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort : "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
    weekdays : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    longDateFormat : {
        LT: "H:mm [Uhr]",
        L : "DD.MM.YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd, D. MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Heute um] LT",
        sameElse: "L",
        nextDay: '[Morgen um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gestern um] LT',
        lastWeek: '[letzten] dddd [um] LT'
    },
    relativeTime : {
        future : "in %s",
        past : "vor %s",
        s : "ein paar Sekunden",
        m : processRelativeTime,
        mm : "%d Minuten",
        h : processRelativeTime,
        hh : "%d Stunden",
        d : processRelativeTime,
        dd : processRelativeTime,
        M : processRelativeTime,
        MM : processRelativeTime,
        y : processRelativeTime,
        yy : processRelativeTime
    },
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */
$.fullCalendar.datepickerLang('de', 'de', {
	closeText: 'Schließen',
	prevText: '&#x3C;Zurück',
	nextText: 'Vor&#x3E;',
	currentText: 'Heute',
	monthNames: ['Januar','Februar','März','April','Mai','Juni',
	'Juli','August','September','Oktober','November','Dezember'],
	monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dez'],
	dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
	dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
	dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
	weekHeader: 'KW',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("de", {
	buttonText: {
		month: "Monat",
		week: "Woche",
		day: "Tag",
		list: "Terminübersicht"
	},
	allDayText: "Ganztägig"
});

})();
(function() {

// moment.js language configuration
// language : modern greek (el)
// author : Aggelos Karalias : https://github.com/mehiel


moment.lang('el', {
    monthsNominativeEl : "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
    monthsGenitiveEl : "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
    months : function (momentToFormat, format) {
        if (/D/.test(format.substring(0, format.indexOf("MMMM")))) { // if there is a day number before 'MMMM'
            return this._monthsGenitiveEl[momentToFormat.month()];
        } else {
            return this._monthsNominativeEl[momentToFormat.month()];
        }
    },
    monthsShort : "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
    weekdays : "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
    weekdaysShort : "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
    weekdaysMin : "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'μμ' : 'ΜΜ';
        } else {
            return isLower ? 'πμ' : 'ΠΜ';
        }
    },
    longDateFormat : {
        LT : "h:mm A",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendarEl : {
        sameDay : '[Σήμερα {}] LT',
        nextDay : '[Αύριο {}] LT',
        nextWeek : 'dddd [{}] LT',
        lastDay : '[Χθες {}] LT',
        lastWeek : '[την προηγούμενη] dddd [{}] LT',
        sameElse : 'L'
    },
    calendar : function (key, mom) {
        var output = this._calendarEl[key],
            hours = mom && mom.hours();

        return output.replace("{}", (hours % 12 === 1 ? "στη" : "στις"));
    },
    relativeTime : {
        future : "σε %s",
        past : "%s πριν",
        s : "δευτερόλεπτα",
        m : "ένα λεπτό",
        mm : "%d λεπτά",
        h : "μία ώρα",
        hh : "%d ώρες",
        d : "μία μέρα",
        dd : "%d μέρες",
        M : "ένας μήνας",
        MM : "%d μήνες",
        y : "ένας χρόνος",
        yy : "%d χρόνια"
    },
    ordinal : function (number) {
        return number + 'η';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4st is the first week of the year.
    }
});


/* Greek (el) initialisation for the jQuery UI date picker plugin. */
/* Written by Alex Cicovic (http://www.alexcicovic.com) */
$.fullCalendar.datepickerLang('el', 'el', {
	closeText: 'Κλείσιμο',
	prevText: 'Προηγούμενος',
	nextText: 'Επόμενος',
	currentText: 'Τρέχων Μήνας',
	monthNames: ['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος',
	'Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'],
	monthNamesShort: ['Ιαν','Φεβ','Μαρ','Απρ','Μαι','Ιουν',
	'Ιουλ','Αυγ','Σεπ','Οκτ','Νοε','Δεκ'],
	dayNames: ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο'],
	dayNamesShort: ['Κυρ','Δευ','Τρι','Τετ','Πεμ','Παρ','Σαβ'],
	dayNamesMin: ['Κυ','Δε','Τρ','Τε','Πε','Πα','Σα'],
	weekHeader: 'Εβδ',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("el", {
	buttonText: {
		month: "Μήνας",
		week: "Εβδομάδα",
		day: "Ημέρα",
		list: "Ατζέντα"
	},
	allDayText: "Ολοήμερο"
});

})();
(function() {

// moment.js language configuration
// language : australian english (en-au)


moment.lang('en-au', {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10,
            output = (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* English/Australia initialisation for the jQuery UI date picker plugin. */
/* Based on the en-GB initialisation. */
$.fullCalendar.datepickerLang('en-au', 'en-AU', {
	closeText: 'Done',
	prevText: 'Prev',
	nextText: 'Next',
	currentText: 'Today',
	monthNames: ['January','February','March','April','May','June',
	'July','August','September','October','November','December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});

$.fullCalendar.lang("en-au");

})();
(function() {

// moment.js language configuration
// language : canadian english (en-ca)
// author : Jonathan Abourbih : https://github.com/jonbca


moment.lang('en-ca', {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "YYYY-MM-DD",
        LL : "D MMMM, YYYY",
        LLL : "D MMMM, YYYY LT",
        LLLL : "dddd, D MMMM, YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10,
            output = (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});



$.fullCalendar.lang("en-ca");

})();
(function() {

// moment.js language configuration
// language : great britain english (en-gb)
// author : Chris Gedrim : https://github.com/chrisgedrim


moment.lang('en-gb', {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10,
            output = (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* English/UK initialisation for the jQuery UI date picker plugin. */
/* Written by Stuart. */
$.fullCalendar.datepickerLang('en-gb', 'en-GB', {
	closeText: 'Done',
	prevText: 'Prev',
	nextText: 'Next',
	currentText: 'Today',
	monthNames: ['January','February','March','April','May','June',
	'July','August','September','October','November','December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("en-gb", {
	columnFormat: {
		week: 'ddd D/M'
	}
});

})();
(function() {

// moment.js language configuration
// language : spanish (es)
// author : Julio Napurí : https://github.com/julionc


moment.lang('es', {
    months : "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort : "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
    weekdays : "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
    weekdaysShort : "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
    weekdaysMin : "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
    longDateFormat : {
        LT : "H:mm",
        L : "DD/MM/YYYY",
        LL : "D [de] MMMM [de] YYYY",
        LLL : "D [de] MMMM [de] YYYY LT",
        LLLL : "dddd, D [de] MMMM [de] YYYY LT"
    },
    calendar : {
        sameDay : function () {
            return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextDay : function () {
            return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastDay : function () {
            return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : "en %s",
        past : "hace %s",
        s : "unos segundos",
        m : "un minuto",
        mm : "%d minutos",
        h : "una hora",
        hh : "%d horas",
        d : "un día",
        dd : "%d días",
        M : "un mes",
        MM : "%d meses",
        y : "un año",
        yy : "%d años"
    },
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
$.fullCalendar.datepickerLang('es', 'es', {
	closeText: 'Cerrar',
	prevText: '&#x3C;Ant',
	nextText: 'Sig&#x3E;',
	currentText: 'Hoy',
	monthNames: ['enero','febrero','marzo','abril','mayo','junio',
	'julio','agosto','septiembre','octubre','noviembre','diciembre'],
	monthNamesShort: ['ene','feb','mar','abr','may','jun',
	'jul','ogo','sep','oct','nov','dic'],
	dayNames: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
	dayNamesShort: ['dom','lun','mar','mié','juv','vie','sáb'],
	dayNamesMin: ['D','L','M','X','J','V','S'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("es", {
	buttonText: {
		month: "Mes",
		week: "Semana",
		day: "Día",
		list: "Agenda"
	},
	allDayText: "Todo el día"
});

})();
(function() {

// moment.js language configuration
// language : Persian Language
// author : Ebrahim Byagowi : https://github.com/ebraminio


var symbolMap = {
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
    '0': '۰'
}, numberMap = {
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '۰': '0'
};

moment.lang('fa', {
    months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
    weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
    weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY LT',
        LLLL : 'dddd, D MMMM YYYY LT'
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return "قبل از ظهر";
        } else {
            return "بعد از ظهر";
        }
    },
    calendar : {
        sameDay : '[امروز ساعت] LT',
        nextDay : '[فردا ساعت] LT',
        nextWeek : 'dddd [ساعت] LT',
        lastDay : '[دیروز ساعت] LT',
        lastWeek : 'dddd [پیش] [ساعت] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'در %s',
        past : '%s پیش',
        s : 'چندین ثانیه',
        m : 'یک دقیقه',
        mm : '%d دقیقه',
        h : 'یک ساعت',
        hh : '%d ساعت',
        d : 'یک روز',
        dd : '%d روز',
        M : 'یک ماه',
        MM : '%d ماه',
        y : 'یک سال',
        yy : '%d سال'
    },
    preparse: function (string) {
        return string.replace(/[۰-۹]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    ordinal : '%dم',
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12 // The week that contains Jan 1st is the first week of the year.
    }
});


/* Persian (Farsi) Translation for the jQuery UI date picker plugin. */
/* Javad Mowlanezhad -- jmowla@gmail.com */
/* Jalali calendar should supported soon! (Its implemented but I have to test it) */
$.fullCalendar.datepickerLang('fa', 'fa', {
	closeText: 'بستن',
	prevText: '&#x3C;قبلی',
	nextText: 'بعدی&#x3E;',
	currentText: 'امروز',
	monthNames: [
		'فروردين',
		'ارديبهشت',
		'خرداد',
		'تير',
		'مرداد',
		'شهريور',
		'مهر',
		'آبان',
		'آذر',
		'دی',
		'بهمن',
		'اسفند'
	],
	monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
	dayNames: [
		'يکشنبه',
		'دوشنبه',
		'سه‌شنبه',
		'چهارشنبه',
		'پنجشنبه',
		'جمعه',
		'شنبه'
	],
	dayNamesShort: [
		'ی',
		'د',
		'س',
		'چ',
		'پ',
		'ج',
		'ش'
	],
	dayNamesMin: [
		'ی',
		'د',
		'س',
		'چ',
		'پ',
		'ج',
		'ش'
	],
	weekHeader: 'هف',
	dateFormat: 'yy/mm/dd',
	firstDay: 6,
	isRTL: true,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("fa", {
	buttonText: {
		month: "ماه",
		week: "هفته",
		day: "روز",
		list: "برنامه"
	},
	allDayText: "تمام روز"
});

})();
(function() {

// moment.js language configuration
// language : finnish (fi)
// author : Tarmo Aidantausta : https://github.com/bleadof


var numbers_past = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
    numbers_future = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
                      numbers_past[7], numbers_past[8], numbers_past[9]];

function translate(number, withoutSuffix, key, isFuture) {
    var result = "";
    switch (key) {
    case 's':
        return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
    case 'm':
        return isFuture ? 'minuutin' : 'minuutti';
    case 'mm':
        result = isFuture ? 'minuutin' : 'minuuttia';
        break;
    case 'h':
        return isFuture ? 'tunnin' : 'tunti';
    case 'hh':
        result = isFuture ? 'tunnin' : 'tuntia';
        break;
    case 'd':
        return isFuture ? 'päivän' : 'päivä';
    case 'dd':
        result = isFuture ? 'päivän' : 'päivää';
        break;
    case 'M':
        return isFuture ? 'kuukauden' : 'kuukausi';
    case 'MM':
        result = isFuture ? 'kuukauden' : 'kuukautta';
        break;
    case 'y':
        return isFuture ? 'vuoden' : 'vuosi';
    case 'yy':
        result = isFuture ? 'vuoden' : 'vuotta';
        break;
    }
    result = verbal_number(number, isFuture) + " " + result;
    return result;
}

function verbal_number(number, isFuture) {
    return number < 10 ? (isFuture ? numbers_future[number] : numbers_past[number]) : number;
}

moment.lang('fi', {
    months : "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
    monthsShort : "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
    weekdays : "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
    weekdaysShort : "su_ma_ti_ke_to_pe_la".split("_"),
    weekdaysMin : "su_ma_ti_ke_to_pe_la".split("_"),
    longDateFormat : {
        LT : "HH.mm",
        L : "DD.MM.YYYY",
        LL : "Do MMMM[ta] YYYY",
        LLL : "Do MMMM[ta] YYYY, [klo] LT",
        LLLL : "dddd, Do MMMM[ta] YYYY, [klo] LT",
        l : "D.M.YYYY",
        ll : "Do MMM YYYY",
        lll : "Do MMM YYYY, [klo] LT",
        llll : "ddd, Do MMM YYYY, [klo] LT"
    },
    calendar : {
        sameDay : '[tänään] [klo] LT',
        nextDay : '[huomenna] [klo] LT',
        nextWeek : 'dddd [klo] LT',
        lastDay : '[eilen] [klo] LT',
        lastWeek : '[viime] dddd[na] [klo] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "%s päästä",
        past : "%s sitten",
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
    ordinal : "%d.",
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Finnish initialisation for the jQuery UI date picker plugin. */
/* Written by Harri Kilpiö (harrikilpio@gmail.com). */
$.fullCalendar.datepickerLang('fi', 'fi', {
	closeText: 'Sulje',
	prevText: '&#xAB;Edellinen',
	nextText: 'Seuraava&#xBB;',
	currentText: 'Tänään',
	monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu',
	'Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
	monthNamesShort: ['Tammi','Helmi','Maalis','Huhti','Touko','Kesä',
	'Heinä','Elo','Syys','Loka','Marras','Joulu'],
	dayNamesShort: ['Su','Ma','Ti','Ke','To','Pe','La'],
	dayNames: ['Sunnuntai','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai'],
	dayNamesMin: ['Su','Ma','Ti','Ke','To','Pe','La'],
	weekHeader: 'Vk',
	dateFormat: 'd.m.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("fi", {
	buttonText: {
		month: "Kuukausi",
		week: "Viikko",
		day: "Päivä",
		list: "Tapahtumat"
	},
	allDayText: "Koko päivä"
});

})();
(function() {

// moment.js language configuration
// language : canadian french (fr-ca)
// author : Jonathan Abourbih : https://github.com/jonbca


moment.lang('fr-ca', {
    months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
    monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
    weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "YYYY-MM-DD",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Aujourd'hui à] LT",
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "dans %s",
        past : "il y a %s",
        s : "quelques secondes",
        m : "une minute",
        mm : "%d minutes",
        h : "une heure",
        hh : "%d heures",
        d : "un jour",
        dd : "%d jours",
        M : "un mois",
        MM : "%d mois",
        y : "un an",
        yy : "%d ans"
    },
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : '');
    }
});


/* Canadian-French initialisation for the jQuery UI date picker plugin. */
$.fullCalendar.datepickerLang('fr-ca', 'fr-CA', {
	closeText: 'Fermer',
	prevText: 'Précédent',
	nextText: 'Suivant',
	currentText: 'Aujourd\'hui',
	monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
		'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
	monthNamesShort: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin',
		'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
	dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
	dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
	dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
	weekHeader: 'Sem.',
	dateFormat: 'yy-mm-dd',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
});


$.fullCalendar.lang("fr-ca", {
	buttonText: {
		month: "Mois",
		week: "Semaine",
		day: "Jour",
		list: "Mon planning"
	},
	allDayHTML: "Toute&nbsp;la journée" // allDayHTML is discouraged but used here as a hack to get the breaking correct
});

})();
(function() {

// moment.js language configuration
// language : french (fr)
// author : John Fischer : https://github.com/jfroffice


moment.lang('fr', {
    months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
    monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
    weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Aujourd'hui à] LT",
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "dans %s",
        past : "il y a %s",
        s : "quelques secondes",
        m : "une minute",
        mm : "%d minutes",
        h : "une heure",
        hh : "%d heures",
        d : "un jour",
        dd : "%d jours",
        M : "un mois",
        MM : "%d mois",
        y : "un an",
        yy : "%d ans"
    },
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : '');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* French initialisation for the jQuery UI date picker plugin. */
/* Written by Keith Wood (kbwood{at}iinet.com.au),
			  Stéphane Nahmani (sholby@sholby.net),
			  Stéphane Raimbault <stephane.raimbault@gmail.com> */
$.fullCalendar.datepickerLang('fr', 'fr', {
	closeText: 'Fermer',
	prevText: 'Précédent',
	nextText: 'Suivant',
	currentText: 'Aujourd\'hui',
	monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
		'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
	monthNamesShort: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin',
		'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
	dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
	dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
	dayNamesMin: ['D','L','M','M','J','V','S'],
	weekHeader: 'Sem.',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("fr", {
	buttonText: {
		month: "Mois",
		week: "Semaine",
		day: "Jour",
		list: "Mon planning"
	},
	allDayHTML: "Toute&nbsp;la journée" // allDayHTML is discouraged but used here as a hack to get the breaking correct
});

})();
(function() {

// moment.js language configuration
// language : hindi (hi)
// author : Mayank Singhal : https://github.com/mayanksinghal


var symbolMap = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०'
},
numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};

moment.lang('hi', {
    months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split("_"),
    monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split("_"),
    weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split("_"),
    weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split("_"),
    weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split("_"),
    longDateFormat : {
        LT : "A h:mm बजे",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY, LT",
        LLLL : "dddd, D MMMM YYYY, LT"
    },
    calendar : {
        sameDay : '[आज] LT',
        nextDay : '[कल] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[कल] LT',
        lastWeek : '[पिछले] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "%s में",
        past : "%s पहले",
        s : "कुछ ही क्षण",
        m : "एक मिनट",
        mm : "%d मिनट",
        h : "एक घंटा",
        hh : "%d घंटे",
        d : "एक दिन",
        dd : "%d दिन",
        M : "एक महीने",
        MM : "%d महीने",
        y : "एक वर्ष",
        yy : "%d वर्ष"
    },
    preparse: function (string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return "रात";
        } else if (hour < 10) {
            return "सुबह";
        } else if (hour < 17) {
            return "दोपहर";
        } else if (hour < 20) {
            return "शाम";
        } else {
            return "रात";
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Hindi initialisation for the jQuery UI date picker plugin. */
/* Written by Michael Dawart. */
$.fullCalendar.datepickerLang('hi', 'hi', {
	closeText: 'बंद',
	prevText: 'पिछला',
	nextText: 'अगला',
	currentText: 'आज',
	monthNames: ['जनवरी ','फरवरी','मार्च','अप्रेल','मई','जून',
	'जूलाई','अगस्त ','सितम्बर','अक्टूबर','नवम्बर','दिसम्बर'],
	monthNamesShort: ['जन', 'फर', 'मार्च', 'अप्रेल', 'मई', 'जून',
	'जूलाई', 'अग', 'सित', 'अक्ट', 'नव', 'दि'],
	dayNames: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
	dayNamesShort: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
	dayNamesMin: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
	weekHeader: 'हफ्ता',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("hi", {
	buttonText: {
		month: "महीना",
		week: "सप्ताह",
		day: "दिन",
		list: "कार्यसूची"
	},
	allDayText: "सभी दिन"
});

})();
(function() {

// moment.js language configuration
// language : hrvatski (hr)
// author : Bojan Marković : https://github.com/bmarkovic

// based on (sl) translation by Robert Sedovšek



function translate(number, withoutSuffix, key) {
    var result = number + " ";
    switch (key) {
    case 'm':
        return withoutSuffix ? 'jedna minuta' : 'jedne minute';
    case 'mm':
        if (number === 1) {
            result += 'minuta';
        } else if (number === 2 || number === 3 || number === 4) {
            result += 'minute';
        } else {
            result += 'minuta';
        }
        return result;
    case 'h':
        return withoutSuffix ? 'jedan sat' : 'jednog sata';
    case 'hh':
        if (number === 1) {
            result += 'sat';
        } else if (number === 2 || number === 3 || number === 4) {
            result += 'sata';
        } else {
            result += 'sati';
        }
        return result;
    case 'dd':
        if (number === 1) {
            result += 'dan';
        } else {
            result += 'dana';
        }
        return result;
    case 'MM':
        if (number === 1) {
            result += 'mjesec';
        } else if (number === 2 || number === 3 || number === 4) {
            result += 'mjeseca';
        } else {
            result += 'mjeseci';
        }
        return result;
    case 'yy':
        if (number === 1) {
            result += 'godina';
        } else if (number === 2 || number === 3 || number === 4) {
            result += 'godine';
        } else {
            result += 'godina';
        }
        return result;
    }
}

moment.lang('hr', {
    months : "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
    monthsShort : "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
    weekdays : "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
    weekdaysShort : "ned._pon._uto._sri._čet._pet._sub.".split("_"),
    weekdaysMin : "ne_po_ut_sr_če_pe_su".split("_"),
    longDateFormat : {
        LT : "H:mm",
        L : "DD. MM. YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd, D. MMMM YYYY LT"
    },
    calendar : {
        sameDay  : '[danas u] LT',
        nextDay  : '[sutra u] LT',

        nextWeek : function () {
            switch (this.day()) {
            case 0:
                return '[u] [nedjelju] [u] LT';
            case 3:
                return '[u] [srijedu] [u] LT';
            case 6:
                return '[u] [subotu] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
                return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[jučer u] LT',
        lastWeek : function () {
            switch (this.day()) {
            case 0:
            case 3:
                return '[prošlu] dddd [u] LT';
            case 6:
                return '[prošle] [subote] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
                return '[prošli] dddd [u] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : "za %s",
        past   : "prije %s",
        s      : "par sekundi",
        m      : translate,
        mm     : translate,
        h      : translate,
        hh     : translate,
        d      : "dan",
        dd     : translate,
        M      : "mjesec",
        MM     : translate,
        y      : "godinu",
        yy     : translate
    },
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Croatian i18n for the jQuery UI date picker plugin. */
/* Written by Vjekoslav Nesek. */
$.fullCalendar.datepickerLang('hr', 'hr', {
	closeText: 'Zatvori',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Danas',
	monthNames: ['Siječanj','Veljača','Ožujak','Travanj','Svibanj','Lipanj',
	'Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'],
	monthNamesShort: ['Sij','Velj','Ožu','Tra','Svi','Lip',
	'Srp','Kol','Ruj','Lis','Stu','Pro'],
	dayNames: ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'],
	dayNamesShort: ['Ned','Pon','Uto','Sri','Čet','Pet','Sub'],
	dayNamesMin: ['Ne','Po','Ut','Sr','Če','Pe','Su'],
	weekHeader: 'Tje',
	dateFormat: 'dd.mm.yy.',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("hr", {
	buttonText: {
		month: "Mjesec",
		week: "Tjedan",
		day: "Dan",
		list: "Raspored"
	},
	allDayText: "Cijeli dan"
});

})();
(function() {

// moment.js language configuration
// language : hungarian (hu)
// author : Adam Brunner : https://github.com/adambrunner


var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');

function translate(number, withoutSuffix, key, isFuture) {
    var num = number,
        suffix;

    switch (key) {
    case 's':
        return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
    case 'm':
        return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
    case 'mm':
        return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
    case 'h':
        return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
    case 'hh':
        return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
    case 'd':
        return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
    case 'dd':
        return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
    case 'M':
        return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
    case 'MM':
        return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
    case 'y':
        return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
    case 'yy':
        return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }

    return '';
}

function week(isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
}

moment.lang('hu', {
    months : "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
    monthsShort : "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
    weekdays : "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
    weekdaysShort : "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
    weekdaysMin : "v_h_k_sze_cs_p_szo".split("_"),
    longDateFormat : {
        LT : "H:mm",
        L : "YYYY.MM.DD.",
        LL : "YYYY. MMMM D.",
        LLL : "YYYY. MMMM D., LT",
        LLLL : "YYYY. MMMM D., dddd LT"
    },
    calendar : {
        sameDay : '[ma] LT[-kor]',
        nextDay : '[holnap] LT[-kor]',
        nextWeek : function () {
            return week.call(this, true);
        },
        lastDay : '[tegnap] LT[-kor]',
        lastWeek : function () {
            return week.call(this, false);
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : "%s múlva",
        past : "%s",
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
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Hungarian initialisation for the jQuery UI date picker plugin. */
/* Written by Istvan Karaszi (jquery@spam.raszi.hu). */
$.fullCalendar.datepickerLang('hu', 'hu', {
	closeText: 'bezár',
	prevText: 'vissza',
	nextText: 'előre',
	currentText: 'ma',
	monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június',
	'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún',
	'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
	dayNames: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
	dayNamesShort: ['Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo'],
	dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
	weekHeader: 'Hét',
	dateFormat: 'yy.mm.dd.',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: ''});


$.fullCalendar.lang("hu", {
	buttonText: {
		month: "Hónap",
		week: "Hét",
		day: "Nap",
		list: "Napló"
	},
	allDayText: "Egész nap"
});

})();
(function() {

// moment.js language configuration
// language : italian (it)
// author : Lorenzo : https://github.com/aliem
// author: Mattia Larentis: https://github.com/nostalgiaz


moment.lang('it', {
    months : "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
    monthsShort : "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
    weekdays : "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
    weekdaysShort : "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
    weekdaysMin : "D_L_Ma_Me_G_V_S".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: '[lo scorso] dddd [alle] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : function (s) {
            return ((/^[0-9].+$/).test(s) ? "tra" : "in") + " " + s;
        },
        past : "%s fa",
        s : "alcuni secondi",
        m : "un minuto",
        mm : "%d minuti",
        h : "un'ora",
        hh : "%d ore",
        d : "un giorno",
        dd : "%d giorni",
        M : "un mese",
        MM : "%d mesi",
        y : "un anno",
        yy : "%d anni"
    },
    ordinal: '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Italian initialisation for the jQuery UI date picker plugin. */
/* Written by Antonello Pasella (antonello.pasella@gmail.com). */
$.fullCalendar.datepickerLang('it', 'it', {
	closeText: 'Chiudi',
	prevText: '&#x3C;Prec',
	nextText: 'Succ&#x3E;',
	currentText: 'Oggi',
	monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
		'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
	monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu',
		'Lug','Ago','Set','Ott','Nov','Dic'],
	dayNames: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
	dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
	dayNamesMin: ['Do','Lu','Ma','Me','Gi','Ve','Sa'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("it", {
	buttonText: {
		month: "Mese",
		week: "Settimana",
		day: "Giorno",
		list: "Agenda"
	},
	allDayText: "Tutto il giorno"
});

})();
(function() {

// moment.js language configuration
// language : japanese (ja)
// author : LI Long : https://github.com/baryon


moment.lang('ja', {
    months : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    monthsShort : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays : "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
    weekdaysShort : "日_月_火_水_木_金_土".split("_"),
    weekdaysMin : "日_月_火_水_木_金_土".split("_"),
    longDateFormat : {
        LT : "Ah時m分",
        L : "YYYY/MM/DD",
        LL : "YYYY年M月D日",
        LLL : "YYYY年M月D日LT",
        LLLL : "YYYY年M月D日LT dddd"
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return "午前";
        } else {
            return "午後";
        }
    },
    calendar : {
        sameDay : '[今日] LT',
        nextDay : '[明日] LT',
        nextWeek : '[来週]dddd LT',
        lastDay : '[昨日] LT',
        lastWeek : '[前週]dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "%s後",
        past : "%s前",
        s : "数秒",
        m : "1分",
        mm : "%d分",
        h : "1時間",
        hh : "%d時間",
        d : "1日",
        dd : "%d日",
        M : "1ヶ月",
        MM : "%dヶ月",
        y : "1年",
        yy : "%d年"
    }
});


/* Japanese initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */
$.fullCalendar.datepickerLang('ja', 'ja', {
	closeText: '閉じる',
	prevText: '&#x3C;前',
	nextText: '次&#x3E;',
	currentText: '今日',
	monthNames: ['1月','2月','3月','4月','5月','6月',
	'7月','8月','9月','10月','11月','12月'],
	monthNamesShort: ['1月','2月','3月','4月','5月','6月',
	'7月','8月','9月','10月','11月','12月'],
	dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
	dayNamesShort: ['日','月','火','水','木','金','土'],
	dayNamesMin: ['日','月','火','水','木','金','土'],
	weekHeader: '週',
	dateFormat: 'yy/mm/dd',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '年'});


$.fullCalendar.lang("ja", {
	buttonText: {
		month: "月",
		week: "週",
		day: "日",
		list: "予定リスト"
	},
	allDayText: "終日"
});

})();
(function() {

// moment.js language configuration
// language : korean (ko)
//
// authors 
//
// - Kyungwook, Park : https://github.com/kyungw00k
// - Jeeeyul Lee <jeeeyul@gmail.com>

moment.lang('ko', {
    months : "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
    monthsShort : "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
    weekdays : "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
    weekdaysShort : "일_월_화_수_목_금_토".split("_"),
    weekdaysMin : "일_월_화_수_목_금_토".split("_"),
    longDateFormat : {
        LT : "A h시 mm분",
        L : "YYYY.MM.DD",
        LL : "YYYY년 MMMM D일",
        LLL : "YYYY년 MMMM D일 LT",
        LLLL : "YYYY년 MMMM D일 dddd LT"
    },
    meridiem : function (hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
    },
    calendar : {
        sameDay : '오늘 LT',
        nextDay : '내일 LT',
        nextWeek : 'dddd LT',
        lastDay : '어제 LT',
        lastWeek : '지난주 dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "%s 후",
        past : "%s 전",
        s : "몇초",
        ss : "%d초",
        m : "일분",
        mm : "%d분",
        h : "한시간",
        hh : "%d시간",
        d : "하루",
        dd : "%d일",
        M : "한달",
        MM : "%d달",
        y : "일년",
        yy : "%d년"
    },
    ordinal : '%d일',
    meridiemParse : /(오전|오후)/,
    isPM : function (token) {
        return token === "오후";
    }
});


/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com), Edited by Genie. */
$.fullCalendar.datepickerLang('ko', 'ko', {
	closeText: '닫기',
	prevText: '이전달',
	nextText: '다음달',
	currentText: '오늘',
	monthNames: ['1월','2월','3월','4월','5월','6월',
	'7월','8월','9월','10월','11월','12월'],
	monthNamesShort: ['1월','2월','3월','4월','5월','6월',
	'7월','8월','9월','10월','11월','12월'],
	dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
	dayNamesShort: ['일','월','화','수','목','금','토'],
	dayNamesMin: ['일','월','화','수','목','금','토'],
	weekHeader: 'Wk',
	dateFormat: 'yy-mm-dd',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '년'});


$.fullCalendar.lang("ko", {
	buttonText: {
		month: "월",
		week: "주",
		day: "일",
		list: "일정목록"
	},
	allDayText: "종일"
});

})();
(function() {

// moment.js language configuration
// language : Lithuanian (lt)
// author : Mindaugas Mozūras : https://github.com/mmozuras


var units = {
    "m" : "minutė_minutės_minutę",
    "mm": "minutės_minučių_minutes",
    "h" : "valanda_valandos_valandą",
    "hh": "valandos_valandų_valandas",
    "d" : "diena_dienos_dieną",
    "dd": "dienos_dienų_dienas",
    "M" : "mėnuo_mėnesio_mėnesį",
    "MM": "mėnesiai_mėnesių_mėnesius",
    "y" : "metai_metų_metus",
    "yy": "metai_metų_metus"
},
weekDays = "pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis_sekmadienis".split("_");

function translateSeconds(number, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return "kelios sekundės";
    } else {
        return isFuture ? "kelių sekundžių" : "kelias sekundes";
    }
}

function translateSingular(number, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}

function special(number) {
    return number % 10 === 0 || (number > 10 && number < 20);
}

function forms(key) {
    return units[key].split("_");
}

function translate(number, withoutSuffix, key, isFuture) {
    var result = number + " ";
    if (number === 1) {
        return result + translateSingular(number, withoutSuffix, key[0], isFuture);
    } else if (withoutSuffix) {
        return result + (special(number) ? forms(key)[1] : forms(key)[0]);
    } else {
        if (isFuture) {
            return result + forms(key)[1];
        } else {
            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
        }
    }
}

function relativeWeekDay(moment, format) {
    var nominative = format.indexOf('dddd LT') === -1,
        weekDay = weekDays[moment.weekday()];

    return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + "į";
}

moment.lang("lt", {
    months : "sausio_vasario_kovo_balandžio_gegužės_biržėlio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
    monthsShort : "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
    weekdays : relativeWeekDay,
    weekdaysShort : "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
    weekdaysMin : "S_P_A_T_K_Pn_Š".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "YYYY-MM-DD",
        LL : "YYYY [m.] MMMM D [d.]",
        LLL : "YYYY [m.] MMMM D [d.], LT [val.]",
        LLLL : "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
        l : "YYYY-MM-DD",
        ll : "YYYY [m.] MMMM D [d.]",
        lll : "YYYY [m.] MMMM D [d.], LT [val.]",
        llll : "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
    },
    calendar : {
        sameDay : "[Šiandien] LT",
        nextDay : "[Rytoj] LT",
        nextWeek : "dddd LT",
        lastDay : "[Vakar] LT",
        lastWeek : "[Praėjusį] dddd LT",
        sameElse : "L"
    },
    relativeTime : {
        future : "po %s",
        past : "prieš %s",
        s : translateSeconds,
        m : translateSingular,
        mm : translate,
        h : translateSingular,
        hh : translate,
        d : translateSingular,
        dd : translate,
        M : translateSingular,
        MM : translate,
        y : translateSingular,
        yy : translate
    },
    ordinal : function (number) {
        return number + '-oji';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Lithuanian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas@avalon.lt> */
$.fullCalendar.datepickerLang('lt', 'lt', {
	closeText: 'Uždaryti',
	prevText: '&#x3C;Atgal',
	nextText: 'Pirmyn&#x3E;',
	currentText: 'Šiandien',
	monthNames: ['Sausis','Vasaris','Kovas','Balandis','Gegužė','Birželis',
	'Liepa','Rugpjūtis','Rugsėjis','Spalis','Lapkritis','Gruodis'],
	monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
	'Lie','Rugp','Rugs','Spa','Lap','Gru'],
	dayNames: ['sekmadienis','pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis'],
	dayNamesShort: ['sek','pir','ant','tre','ket','pen','šeš'],
	dayNamesMin: ['Se','Pr','An','Tr','Ke','Pe','Še'],
	weekHeader: 'SAV',
	dateFormat: 'yy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: ''});


$.fullCalendar.lang("lt", {
	buttonText: {
		month: "Mėnuo",
		week: "Savaitė",
		day: "Diena",
		list: "Darbotvarkė"
	},
	allDayText: "Visą dieną"
});

})();
(function() {

// moment.js language configuration
// language : latvian (lv)
// author : Kristaps Karlsons : https://github.com/skakri


var units = {
    'mm': 'minūti_minūtes_minūte_minūtes',
    'hh': 'stundu_stundas_stunda_stundas',
    'dd': 'dienu_dienas_diena_dienas',
    'MM': 'mēnesi_mēnešus_mēnesis_mēneši',
    'yy': 'gadu_gadus_gads_gadi'
};

function format(word, number, withoutSuffix) {
    var forms = word.split('_');
    if (withoutSuffix) {
        return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
    } else {
        return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
    }
}

function relativeTimeWithPlural(number, withoutSuffix, key) {
    return number + ' ' + format(units[key], number, withoutSuffix);
}

moment.lang('lv', {
    months : "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
    monthsShort : "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
    weekdays : "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
    weekdaysShort : "Sv_P_O_T_C_Pk_S".split("_"),
    weekdaysMin : "Sv_P_O_T_C_Pk_S".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD.MM.YYYY",
        LL : "YYYY. [gada] D. MMMM",
        LLL : "YYYY. [gada] D. MMMM, LT",
        LLLL : "YYYY. [gada] D. MMMM, dddd, LT"
    },
    calendar : {
        sameDay : '[Šodien pulksten] LT',
        nextDay : '[Rīt pulksten] LT',
        nextWeek : 'dddd [pulksten] LT',
        lastDay : '[Vakar pulksten] LT',
        lastWeek : '[Pagājušā] dddd [pulksten] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "%s vēlāk",
        past : "%s agrāk",
        s : "dažas sekundes",
        m : "minūti",
        mm : relativeTimeWithPlural,
        h : "stundu",
        hh : relativeTimeWithPlural,
        d : "dienu",
        dd : relativeTimeWithPlural,
        M : "mēnesi",
        MM : relativeTimeWithPlural,
        y : "gadu",
        yy : relativeTimeWithPlural
    },
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Latvian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas.paleicikas@metasite.net> */
$.fullCalendar.datepickerLang('lv', 'lv', {
	closeText: 'Aizvērt',
	prevText: 'Iepr.',
	nextText: 'Nāk.',
	currentText: 'Šodien',
	monthNames: ['Janvāris','Februāris','Marts','Aprīlis','Maijs','Jūnijs',
	'Jūlijs','Augusts','Septembris','Oktobris','Novembris','Decembris'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jūn',
	'Jūl','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['svētdiena','pirmdiena','otrdiena','trešdiena','ceturtdiena','piektdiena','sestdiena'],
	dayNamesShort: ['svt','prm','otr','tre','ctr','pkt','sst'],
	dayNamesMin: ['Sv','Pr','Ot','Tr','Ct','Pk','Ss'],
	weekHeader: 'Ned.',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("lv", {
	buttonText: {
		month: "Mēnesis",
		week: "Nedēļa",
		day: "Diena",
		list: "Dienas kārtība"
	},
	allDayText: "Visu dienu"
});

})();
(function() {

// moment.js language configuration
// language : dutch (nl)
// author : Joris Röling : https://github.com/jjupiter


var monthsShortWithDots = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
    monthsShortWithoutDots = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");

moment.lang('nl', {
    months : "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort : function (m, format) {
        if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
        } else {
            return monthsShortWithDots[m.month()];
        }
    },
    weekdays : "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort : "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin : "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD-MM-YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "over %s",
        past : "%s geleden",
        s : "een paar seconden",
        m : "één minuut",
        mm : "%d minuten",
        h : "één uur",
        hh : "%d uur",
        d : "één dag",
        dd : "%d dagen",
        M : "één maand",
        MM : "%d maanden",
        y : "één jaar",
        yy : "%d jaar"
    },
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Dutch (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Mathias Bynens <http://mathiasbynens.be/> */
$.fullCalendar.datepickerLang('nl', 'nl', {
	closeText: 'Sluiten',
	prevText: '←',
	nextText: '→',
	currentText: 'Vandaag',
	monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
	'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
	monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
	'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
	dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
	dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
	dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
	weekHeader: 'Wk',
	dateFormat: 'dd-mm-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("nl", {
	buttonText: {
		month: "Maand",
		week: "Week",
		day: "Dag",
		list: "Agenda"
	},
	allDayText: "Hele dag"
});

})();
(function() {

// moment.js language configuration
// language : polish (pl)
// author : Rafal Hirsz : https://github.com/evoL


var monthsNominative = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
    monthsSubjective = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

function plural(n) {
    return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
}

function translate(number, withoutSuffix, key) {
    var result = number + " ";
    switch (key) {
    case 'm':
        return withoutSuffix ? 'minuta' : 'minutę';
    case 'mm':
        return result + (plural(number) ? 'minuty' : 'minut');
    case 'h':
        return withoutSuffix  ? 'godzina'  : 'godzinę';
    case 'hh':
        return result + (plural(number) ? 'godziny' : 'godzin');
    case 'MM':
        return result + (plural(number) ? 'miesiące' : 'miesięcy');
    case 'yy':
        return result + (plural(number) ? 'lata' : 'lat');
    }
}

moment.lang('pl', {
    months : function (momentToFormat, format) {
        if (/D MMMM/.test(format)) {
            return monthsSubjective[momentToFormat.month()];
        } else {
            return monthsNominative[momentToFormat.month()];
        }
    },
    monthsShort : "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
    weekdays : "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
    weekdaysShort : "nie_pon_wt_śr_czw_pt_sb".split("_"),
    weekdaysMin : "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD.MM.YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[Dziś o] LT',
        nextDay: '[Jutro o] LT',
        nextWeek: '[W] dddd [o] LT',
        lastDay: '[Wczoraj o] LT',
        lastWeek: function () {
            switch (this.day()) {
            case 0:
                return '[W zeszłą niedzielę o] LT';
            case 3:
                return '[W zeszłą środę o] LT';
            case 6:
                return '[W zeszłą sobotę o] LT';
            default:
                return '[W zeszły] dddd [o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : "za %s",
        past : "%s temu",
        s : "kilka sekund",
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : "1 dzień",
        dd : '%d dni',
        M : "miesiąc",
        MM : translate,
        y : "rok",
        yy : translate
    },
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Polish initialisation for the jQuery UI date picker plugin. */
/* Written by Jacek Wysocki (jacek.wysocki@gmail.com). */
$.fullCalendar.datepickerLang('pl', 'pl', {
	closeText: 'Zamknij',
	prevText: '&#x3C;Poprzedni',
	nextText: 'Następny&#x3E;',
	currentText: 'Dziś',
	monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec',
	'Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
	monthNamesShort: ['Sty','Lu','Mar','Kw','Maj','Cze',
	'Lip','Sie','Wrz','Pa','Lis','Gru'],
	dayNames: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
	dayNamesShort: ['Nie','Pn','Wt','Śr','Czw','Pt','So'],
	dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
	weekHeader: 'Tydz',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("pl", {
	buttonText: {
		month: "Miesiąc",
		week: "Tydzień",
		day: "Dzień",
		list: "Plan dnia"
	},
	allDayText: "Cały dzień"
});

})();
(function() {

// moment.js language configuration
// language : brazilian portuguese (pt-br)
// author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira


moment.lang('pt-br', {
    months : "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
    monthsShort : "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
    weekdays : "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
    weekdaysShort : "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
    weekdaysMin : "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D [de] MMMM [de] YYYY",
        LLL : "D [de] MMMM [de] YYYY LT",
        LLLL : "dddd, D [de] MMMM [de] YYYY LT"
    },
    calendar : {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function () {
            return (this.day() === 0 || this.day() === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : "em %s",
        past : "%s atrás",
        s : "segundos",
        m : "um minuto",
        mm : "%d minutos",
        h : "uma hora",
        hh : "%d horas",
        d : "um dia",
        dd : "%d dias",
        M : "um mês",
        MM : "%d meses",
        y : "um ano",
        yy : "%d anos"
    },
    ordinal : '%dº'
});


/* Brazilian initialisation for the jQuery UI date picker plugin. */
/* Written by Leonildo Costa Silva (leocsilva@gmail.com). */
$.fullCalendar.datepickerLang('pt-br', 'pt-BR', {
	closeText: 'Fechar',
	prevText: '&#x3C;Anterior',
	nextText: 'Próximo&#x3E;',
	currentText: 'Hoje',
	monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
	'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
	'Jul','Ago','Set','Out','Nov','Dez'],
	dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
	dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
	dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("pt-br", {
	buttonText: {
		month: "Mês",
		week: "Semana",
		day: "Dia",
		list: "Compromissos"
	},
	allDayText: "dia inteiro"
});

})();
(function() {

// moment.js language configuration
// language : portuguese (pt)
// author : Jefferson : https://github.com/jalex79


moment.lang('pt', {
    months : "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
    monthsShort : "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
    weekdays : "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
    weekdaysShort : "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
    weekdaysMin : "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D [de] MMMM [de] YYYY",
        LLL : "D [de] MMMM [de] YYYY LT",
        LLLL : "dddd, D [de] MMMM [de] YYYY LT"
    },
    calendar : {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function () {
            return (this.day() === 0 || this.day() === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : "em %s",
        past : "%s atrás",
        s : "segundos",
        m : "um minuto",
        mm : "%d minutos",
        h : "uma hora",
        hh : "%d horas",
        d : "um dia",
        dd : "%d dias",
        M : "um mês",
        MM : "%d meses",
        y : "um ano",
        yy : "%d anos"
    },
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Portuguese initialisation for the jQuery UI date picker plugin. */
$.fullCalendar.datepickerLang('pt', 'pt', {
	closeText: 'Fechar',
	prevText: 'Anterior',
	nextText: 'Seguinte',
	currentText: 'Hoje',
	monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
	'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
	'Jul','Ago','Set','Out','Nov','Dez'],
	dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
	dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
	dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
	weekHeader: 'Sem',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("pt", {
	buttonText: {
		month: "Mês",
		week: "Semana",
		day: "Dia",
		list: "Agenda"
	},
	allDayText: "Todo o dia"
});

})();
(function() {

// moment.js language configuration
// language : romanian (ro)
// author : Vlad Gurdiga : https://github.com/gurdiga
// author : Valentin Agachi : https://github.com/avaly


function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'mm': 'minute',
        'hh': 'ore',
        'dd': 'zile',
        'MM': 'luni',
        'yy': 'ani'
    },
        separator = ' ';
    if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
        separator = ' de ';
    }

    return number + separator + format[key];
}

moment.lang('ro', {
    months : "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
    monthsShort : "ian_feb_mar_apr_mai_iun_iul_aug_sep_oct_noi_dec".split("_"),
    weekdays : "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
    weekdaysShort : "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
    weekdaysMin : "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
    longDateFormat : {
        LT : "H:mm",
        L : "DD.MM.YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY H:mm",
        LLLL : "dddd, D MMMM YYYY H:mm"
    },
    calendar : {
        sameDay: "[azi la] LT",
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "peste %s",
        past : "%s în urmă",
        s : "câteva secunde",
        m : "un minut",
        mm : relativeTimeWithPlural,
        h : "o oră",
        hh : relativeTimeWithPlural,
        d : "o zi",
        dd : relativeTimeWithPlural,
        M : "o lună",
        MM : relativeTimeWithPlural,
        y : "un an",
        yy : relativeTimeWithPlural
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Romanian initialisation for the jQuery UI date picker plugin.
 *
 * Written by Edmond L. (ll_edmond@walla.com)
 * and Ionut G. Stan (ionut.g.stan@gmail.com)
 */
$.fullCalendar.datepickerLang('ro', 'ro', {
	closeText: 'Închide',
	prevText: '&#xAB; Luna precedentă',
	nextText: 'Luna următoare &#xBB;',
	currentText: 'Azi',
	monthNames: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie',
	'Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
	monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun',
	'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dayNames: ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
	dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
	dayNamesMin: ['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],
	weekHeader: 'Săpt',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("ro", {
	buttonText: {
		prev: "precedentă", // override JQUI's translations, which contains the word "month"
		next: "următoare",  // "
		month: "Lună",
		week: "Săptămână",
		day: "Zi",
		list: "Agendă"
	},
	allDayText: "Toată ziua"
});

})();
(function() {

// moment.js language configuration
// language : russian (ru)
// author : Viktorminator : https://github.com/Viktorminator
// Author : Menelion Elensúle : https://github.com/Oire


function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}

function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'mm': 'минута_минуты_минут',
        'hh': 'час_часа_часов',
        'dd': 'день_дня_дней',
        'MM': 'месяц_месяца_месяцев',
        'yy': 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}

function monthsCaseReplace(m, format) {
    var months = {
        'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
    },

    nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
        'accusative' :
        'nominative';

    return months[nounCase][m.month()];
}

function monthsShortCaseReplace(m, format) {
    var monthsShort = {
        'nominative': 'янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        'accusative': 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')
    },

    nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
        'accusative' :
        'nominative';

    return monthsShort[nounCase][m.month()];
}

function weekdaysCaseReplace(m, format) {
    var weekdays = {
        'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
    },

    nounCase = (/\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/).test(format) ?
        'accusative' :
        'nominative';

    return weekdays[nounCase][m.day()];
}

moment.lang('ru', {
    months : monthsCaseReplace,
    monthsShort : monthsShortCaseReplace,
    weekdays : weekdaysCaseReplace,
    weekdaysShort : "вс_пн_вт_ср_чт_пт_сб".split("_"),
    weekdaysMin : "вс_пн_вт_ср_чт_пт_сб".split("_"),
    monthsParse : [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
    longDateFormat : {
        LT : "HH:mm",
        L : "DD.MM.YYYY",
        LL : "D MMMM YYYY г.",
        LLL : "D MMMM YYYY г., LT",
        LLLL : "dddd, D MMMM YYYY г., LT"
    },
    calendar : {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        nextWeek: function () {
            return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
        },
        lastWeek: function () {
            switch (this.day()) {
            case 0:
                return '[В прошлое] dddd [в] LT';
            case 1:
            case 2:
            case 4:
                return '[В прошлый] dddd [в] LT';
            case 3:
            case 5:
            case 6:
                return '[В прошлую] dddd [в] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : "через %s",
        past : "%s назад",
        s : "несколько секунд",
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : "час",
        hh : relativeTimeWithPlural,
        d : "день",
        dd : relativeTimeWithPlural,
        M : "месяц",
        MM : relativeTimeWithPlural,
        y : "год",
        yy : relativeTimeWithPlural
    },

    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason

    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return "ночи";
        } else if (hour < 12) {
            return "утра";
        } else if (hour < 17) {
            return "дня";
        } else {
            return "вечера";
        }
    },

    ordinal: function (number, period) {
        switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
            return number + '-й';
        case 'D':
            return number + '-го';
        case 'w':
        case 'W':
            return number + '-я';
        default:
            return number;
        }
    },

    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */
$.fullCalendar.datepickerLang('ru', 'ru', {
	closeText: 'Закрыть',
	prevText: '&#x3C;Пред',
	nextText: 'След&#x3E;',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
	'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
	'Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Нед',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("ru", {
	buttonText: {
		month: "Месяц",
		week: "Неделя",
		day: "День",
		list: "Повестка дня"
	},
	allDayText: "Весь день"
});

})();
(function() {

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

})();
(function() {

// moment.js language configuration
// language : slovenian (sl)
// author : Robert Sedovšek : https://github.com/sedovsek


function translate(number, withoutSuffix, key) {
    var result = number + " ";
    switch (key) {
    case 'm':
        return withoutSuffix ? 'ena minuta' : 'eno minuto';
    case 'mm':
        if (number === 1) {
            result += 'minuta';
        } else if (number === 2) {
            result += 'minuti';
        } else if (number === 3 || number === 4) {
            result += 'minute';
        } else {
            result += 'minut';
        }
        return result;
    case 'h':
        return withoutSuffix ? 'ena ura' : 'eno uro';
    case 'hh':
        if (number === 1) {
            result += 'ura';
        } else if (number === 2) {
            result += 'uri';
        } else if (number === 3 || number === 4) {
            result += 'ure';
        } else {
            result += 'ur';
        }
        return result;
    case 'dd':
        if (number === 1) {
            result += 'dan';
        } else {
            result += 'dni';
        }
        return result;
    case 'MM':
        if (number === 1) {
            result += 'mesec';
        } else if (number === 2) {
            result += 'meseca';
        } else if (number === 3 || number === 4) {
            result += 'mesece';
        } else {
            result += 'mesecev';
        }
        return result;
    case 'yy':
        if (number === 1) {
            result += 'leto';
        } else if (number === 2) {
            result += 'leti';
        } else if (number === 3 || number === 4) {
            result += 'leta';
        } else {
            result += 'let';
        }
        return result;
    }
}

moment.lang('sl', {
    months : "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
    monthsShort : "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
    weekdays : "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
    weekdaysShort : "ned._pon._tor._sre._čet._pet._sob.".split("_"),
    weekdaysMin : "ne_po_to_sr_če_pe_so".split("_"),
    longDateFormat : {
        LT : "H:mm",
        L : "DD. MM. YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd, D. MMMM YYYY LT"
    },
    calendar : {
        sameDay  : '[danes ob] LT',
        nextDay  : '[jutri ob] LT',

        nextWeek : function () {
            switch (this.day()) {
            case 0:
                return '[v] [nedeljo] [ob] LT';
            case 3:
                return '[v] [sredo] [ob] LT';
            case 6:
                return '[v] [soboto] [ob] LT';
            case 1:
            case 2:
            case 4:
            case 5:
                return '[v] dddd [ob] LT';
            }
        },
        lastDay  : '[včeraj ob] LT',
        lastWeek : function () {
            switch (this.day()) {
            case 0:
            case 3:
            case 6:
                return '[prejšnja] dddd [ob] LT';
            case 1:
            case 2:
            case 4:
            case 5:
                return '[prejšnji] dddd [ob] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : "čez %s",
        past   : "%s nazaj",
        s      : "nekaj sekund",
        m      : translate,
        mm     : translate,
        h      : translate,
        hh     : translate,
        d      : "en dan",
        dd     : translate,
        M      : "en mesec",
        MM     : translate,
        y      : "eno leto",
        yy     : translate
    },
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Slovenian initialisation for the jQuery UI date picker plugin. */
/* Written by Jaka Jancar (jaka@kubje.org). */
/* c = č, s = š z = ž C = Č S = Š Z = Ž */
$.fullCalendar.datepickerLang('sl', 'sl', {
	closeText: 'Zapri',
	prevText: '&#x3C;Prejšnji',
	nextText: 'Naslednji&#x3E;',
	currentText: 'Trenutni',
	monthNames: ['Januar','Februar','Marec','April','Maj','Junij',
	'Julij','Avgust','September','Oktober','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Avg','Sep','Okt','Nov','Dec'],
	dayNames: ['Nedelja','Ponedeljek','Torek','Sreda','Četrtek','Petek','Sobota'],
	dayNamesShort: ['Ned','Pon','Tor','Sre','Čet','Pet','Sob'],
	dayNamesMin: ['Ne','Po','To','Sr','Če','Pe','So'],
	weekHeader: 'Teden',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("sl", {
	buttonText: {
		month: "Mesec",
		week: "Teden",
		day: "Dan",
		list: "Dnevni red"
	},
	allDayText: "Ves dan"
});

})();
(function() {

// moment.js language configuration
// language : swedish (sv)
// author : Jens Alm : https://github.com/ulmus


moment.lang('sv', {
    months : "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
    monthsShort : "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
    weekdays : "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
    weekdaysShort : "sön_mån_tis_ons_tor_fre_lör".split("_"),
    weekdaysMin : "sö_må_ti_on_to_fr_lö".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "YYYY-MM-DD",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: 'dddd LT',
        lastWeek: '[Förra] dddd[en] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "om %s",
        past : "för %s sedan",
        s : "några sekunder",
        m : "en minut",
        mm : "%d minuter",
        h : "en timme",
        hh : "%d timmar",
        d : "en dag",
        dd : "%d dagar",
        M : "en månad",
        MM : "%d månader",
        y : "ett år",
        yy : "%d år"
    },
    ordinal : function (number) {
        var b = number % 10,
            output = (~~ (number % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
            (b === 2) ? 'a' :
            (b === 3) ? 'e' : 'e';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});


/* Swedish initialisation for the jQuery UI date picker plugin. */
/* Written by Anders Ekdahl ( anders@nomadiz.se). */
$.fullCalendar.datepickerLang('sv', 'sv', {
	closeText: 'Stäng',
	prevText: '&#xAB;Förra',
	nextText: 'Nästa&#xBB;',
	currentText: 'Idag',
	monthNames: ['Januari','Februari','Mars','April','Maj','Juni',
	'Juli','Augusti','September','Oktober','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dec'],
	dayNamesShort: ['Sön','Mån','Tis','Ons','Tor','Fre','Lör'],
	dayNames: ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'],
	dayNamesMin: ['Sö','Må','Ti','On','To','Fr','Lö'],
	weekHeader: 'Ve',
	dateFormat: 'yy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("sv", {
	buttonText: {
		month: "Månad",
		week: "Vecka",
		day: "Dag",
		list: "Program"
	},
	allDayText: "Heldag"
});

})();
(function() {

// moment.js language configuration
// language : thai (th)
// author : Kridsada Thanabulpong : https://github.com/sirn


moment.lang('th', {
    months : "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
    monthsShort : "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
    weekdays : "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
    weekdaysShort : "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), // yes, three characters difference
    weekdaysMin : "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
    longDateFormat : {
        LT : "H นาฬิกา m นาที",
        L : "YYYY/MM/DD",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY เวลา LT",
        LLLL : "วันddddที่ D MMMM YYYY เวลา LT"
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return "ก่อนเที่ยง";
        } else {
            return "หลังเที่ยง";
        }
    },
    calendar : {
        sameDay : '[วันนี้ เวลา] LT',
        nextDay : '[พรุ่งนี้ เวลา] LT',
        nextWeek : 'dddd[หน้า เวลา] LT',
        lastDay : '[เมื่อวานนี้ เวลา] LT',
        lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "อีก %s",
        past : "%sที่แล้ว",
        s : "ไม่กี่วินาที",
        m : "1 นาที",
        mm : "%d นาที",
        h : "1 ชั่วโมง",
        hh : "%d ชั่วโมง",
        d : "1 วัน",
        dd : "%d วัน",
        M : "1 เดือน",
        MM : "%d เดือน",
        y : "1 ปี",
        yy : "%d ปี"
    }
});


/* Thai initialisation for the jQuery UI date picker plugin. */
/* Written by pipo (pipo@sixhead.com). */
$.fullCalendar.datepickerLang('th', 'th', {
	closeText: 'ปิด',
	prevText: '&#xAB;&#xA0;ย้อน',
	nextText: 'ถัดไป&#xA0;&#xBB;',
	currentText: 'วันนี้',
	monthNames: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
	'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
	monthNamesShort: ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.',
	'ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
	dayNames: ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'],
	dayNamesShort: ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'],
	dayNamesMin: ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("th", {
	buttonText: {
		month: "เดือน",
		week: "สัปดาห์",
		day: "วัน",
		list: "แผนงาน"
	},
	allDayText: "ตลอดวัน"
});

})();
(function() {

// moment.js language configuration
// language : turkish (tr)
// authors : Erhan Gundogan : https://github.com/erhangundogan,
//           Burak Yiğit Kaya: https://github.com/BYK



var suffixes = {
    1: "'inci",
    5: "'inci",
    8: "'inci",
    70: "'inci",
    80: "'inci",

    2: "'nci",
    7: "'nci",
    20: "'nci",
    50: "'nci",

    3: "'üncü",
    4: "'üncü",
    100: "'üncü",

    6: "'ncı",

    9: "'uncu",
    10: "'uncu",
    30: "'uncu",

    60: "'ıncı",
    90: "'ıncı"
};

moment.lang('tr', {
    months : "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
    monthsShort : "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
    weekdays : "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
    weekdaysShort : "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
    weekdaysMin : "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD.MM.YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[bugün saat] LT',
        nextDay : '[yarın saat] LT',
        nextWeek : '[haftaya] dddd [saat] LT',
        lastDay : '[dün] LT',
        lastWeek : '[geçen hafta] dddd [saat] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "%s sonra",
        past : "%s önce",
        s : "birkaç saniye",
        m : "bir dakika",
        mm : "%d dakika",
        h : "bir saat",
        hh : "%d saat",
        d : "bir gün",
        dd : "%d gün",
        M : "bir ay",
        MM : "%d ay",
        y : "bir yıl",
        yy : "%d yıl"
    },
    ordinal : function (number) {
        if (number === 0) {  // special case for zero
            return number + "'ıncı";
        }
        var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;

        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Turkish initialisation for the jQuery UI date picker plugin. */
/* Written by Izzet Emre Erkan (kara@karalamalar.net). */
$.fullCalendar.datepickerLang('tr', 'tr', {
	closeText: 'kapat',
	prevText: '&#x3C;geri',
	nextText: 'ileri&#x3e',
	currentText: 'bugün',
	monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran',
	'Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
	monthNamesShort: ['Oca','Şub','Mar','Nis','May','Haz',
	'Tem','Ağu','Eyl','Eki','Kas','Ara'],
	dayNames: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
	dayNamesShort: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
	dayNamesMin: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
	weekHeader: 'Hf',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("tr", {
	buttonText: {
		next: "ileri", // override JQUI's, which has a non-closing HTML entity in it
		month: "Ay",
		week: "Hafta",
		day: "Gün",
		list: "Ajanda"
	},
	allDayText: "Tüm gün"
});

})();
(function() {

// moment.js language configuration
// language : ukrainian (uk)
// author : zemlanin : https://github.com/zemlanin
// Author : Menelion Elensúle : https://github.com/Oire


function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}

function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'mm': 'хвилина_хвилини_хвилин',
        'hh': 'година_години_годин',
        'dd': 'день_дні_днів',
        'MM': 'місяць_місяці_місяців',
        'yy': 'рік_роки_років'
    };
    if (key === 'm') {
        return withoutSuffix ? 'хвилина' : 'хвилину';
    }
    else if (key === 'h') {
        return withoutSuffix ? 'година' : 'годину';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}

function monthsCaseReplace(m, format) {
    var months = {
        'nominative': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
        'accusative': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
    },

    nounCase = (/D[oD]? *MMMM?/).test(format) ?
        'accusative' :
        'nominative';

    return months[nounCase][m.month()];
}

function weekdaysCaseReplace(m, format) {
    var weekdays = {
        'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
        'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
        'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
    },

    nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
        'accusative' :
        ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
            'genitive' :
            'nominative');

    return weekdays[nounCase][m.day()];
}

function processHoursFunction(str) {
    return function () {
        return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
    };
}

moment.lang('uk', {
    months : monthsCaseReplace,
    monthsShort : "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
    weekdays : weekdaysCaseReplace,
    weekdaysShort : "нд_пн_вт_ср_чт_пт_сб".split("_"),
    weekdaysMin : "нд_пн_вт_ср_чт_пт_сб".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD.MM.YYYY",
        LL : "D MMMM YYYY р.",
        LLL : "D MMMM YYYY р., LT",
        LLLL : "dddd, D MMMM YYYY р., LT"
    },
    calendar : {
        sameDay: processHoursFunction('[Сьогодні '),
        nextDay: processHoursFunction('[Завтра '),
        lastDay: processHoursFunction('[Вчора '),
        nextWeek: processHoursFunction('[У] dddd ['),
        lastWeek: function () {
            switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
                return processHoursFunction('[Минулої] dddd [').call(this);
            case 1:
            case 2:
            case 4:
                return processHoursFunction('[Минулого] dddd [').call(this);
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : "за %s",
        past : "%s тому",
        s : "декілька секунд",
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : "годину",
        hh : relativeTimeWithPlural,
        d : "день",
        dd : relativeTimeWithPlural,
        M : "місяць",
        MM : relativeTimeWithPlural,
        y : "рік",
        yy : relativeTimeWithPlural
    },

    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason

    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return "ночі";
        } else if (hour < 12) {
            return "ранку";
        } else if (hour < 17) {
            return "дня";
        } else {
            return "вечора";
        }
    },

    ordinal: function (number, period) {
        switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
            return number + '-й';
        case 'D':
            return number + '-го';
        default:
            return number;
        }
    },

    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});


/* Ukrainian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Maxim Drogobitskiy (maxdao@gmail.com). */
/* Corrected by Igor Milla (igor.fsp.milla@gmail.com). */
$.fullCalendar.datepickerLang('uk', 'uk', {
	closeText: 'Закрити',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Сьогодні',
	monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень',
	'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
	monthNamesShort: ['Січ','Лют','Бер','Кві','Тра','Чер',
	'Лип','Сер','Вер','Жов','Лис','Гру'],
	dayNames: ['неділя','понеділок','вівторок','середа','четвер','п’ятниця','субота'],
	dayNamesShort: ['нед','пнд','вів','срд','чтв','птн','сбт'],
	dayNamesMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Тиж',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''});


$.fullCalendar.lang("uk", {
	buttonText: {
		month: "Місяць",
		week: "Тиждень",
		day: "День",
		list: "Порядок денний"
	},
	allDayText: "Увесь день"
});

})();
(function() {

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

})();
(function() {

// moment.js language configuration
// language : traditional chinese (zh-tw)
// author : Ben : https://github.com/ben-lin


moment.lang('zh-tw', {
    months : "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
    monthsShort : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays : "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
    weekdaysShort : "週日_週一_週二_週三_週四_週五_週六".split("_"),
    weekdaysMin : "日_一_二_三_四_五_六".split("_"),
    longDateFormat : {
        LT : "Ah點mm",
        L : "YYYY年MMMD日",
        LL : "YYYY年MMMD日",
        LLL : "YYYY年MMMD日LT",
        LLLL : "YYYY年MMMD日ddddLT",
        l : "YYYY年MMMD日",
        ll : "YYYY年MMMD日",
        lll : "YYYY年MMMD日LT",
        llll : "YYYY年MMMD日ddddLT"
    },
    meridiem : function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 900) {
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
        sameDay : '[今天]LT',
        nextDay : '[明天]LT',
        nextWeek : '[下]ddddLT',
        lastDay : '[昨天]LT',
        lastWeek : '[上]ddddLT',
        sameElse : 'L'
    },
    ordinal : function (number, period) {
        switch (period) {
        case "d" :
        case "D" :
        case "DDD" :
            return number + "日";
        case "M" :
            return number + "月";
        case "w" :
        case "W" :
            return number + "週";
        default :
            return number;
        }
    },
    relativeTime : {
        future : "%s內",
        past : "%s前",
        s : "幾秒",
        m : "一分鐘",
        mm : "%d分鐘",
        h : "一小時",
        hh : "%d小時",
        d : "一天",
        dd : "%d天",
        M : "一個月",
        MM : "%d個月",
        y : "一年",
        yy : "%d年"
    }
});


/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Ressol (ressol@gmail.com). */
$.fullCalendar.datepickerLang('zh-tw', 'zh-TW', {
	closeText: '關閉',
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
	dateFormat: 'yy/mm/dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '年'});


$.fullCalendar.lang("zh-tw", {
	buttonText: {
		month: "月",
		week: "週",
		day: "天",
		list: "待辦事項"
	},
	allDayText: "全天"
});

})();

moment.lang("en");
$.fullCalendar.lang("en");
if ($.datepicker) $.datepicker.setDefaults($.datepicker.regional[""]);

});