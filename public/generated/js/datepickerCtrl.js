app.controller("datepickerCtrl",function(){this.open1=function(){this.popup1.opened=!0},this.open2=function(){this.popup2.opened=!0},this.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],this.format=this.formats[0],this.altInputFormats=["M!/d!/yyyy"],this.popup1={opened:!1},this.popup2={opened:!1}});