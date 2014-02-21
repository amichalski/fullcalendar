(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery", "moment" ], factory);
    }
    else {
        factory(jQuery, moment);
    }
})(function($, moment) {

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

});