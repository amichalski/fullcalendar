(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery", "moment" ], factory);
    }
    else {
        factory(jQuery, moment);
    }
})(function($, moment) {

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

});