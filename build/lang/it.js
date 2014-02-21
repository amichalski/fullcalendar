(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery", "moment" ], factory);
    }
    else {
        factory(jQuery, moment);
    }
})(function($, moment) {

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

});