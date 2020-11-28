
var currYear = new Date().getFullYear();
var currMonth = new Date().getMonth();
var currDay = new Date().getDay();
var currDay= currDay+14;

$(document).ready(function () {
  $(".datepicker").datepicker({


    //muestra el dia de hoy
 defaultDate: new Date(currYear,currMonth,currDay),
  

    //elige el dia de hoy
setDefaultDate: new Date(currYear,currMonth,currDay),


    //como máximo el dia de hoy
     maxDate: new Date(currYear,currMonth,currDay),


    yearRange: [1928, currYear],
    format: "dd-mm-yyyy",
    selectMonths: true,
    firstday:0,

    i18n:{
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Sept.', 'Octub.', 'Novie.', 'Dicie.'],
      monthsShort: ['Ene.', 'Feb.', 'Mar.', 'Abr', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
     weekdays: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ],
    weekdaysShort: [ 'Dom','Lun','Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
     weekdaysAbbrev: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S'],
  
      clear:'Borrar',
      done:'Hecho',
      cancel:'Cancelar'
  
    }
                    
     });

});
//# sourceURL=pen.js