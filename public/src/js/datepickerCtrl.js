/**
 * Created by Aka on 4/24/16.
 */

app.controller('datepickerCtrl', function () {

    this.open1 = function() {
        this.popup1.opened = true;
    };

    this.open2 = function() {
        this.popup2.opened = true;
    };


    this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    this.format = this.formats[0];
    this.altInputFormats = ['M!/d!/yyyy'];

    this.popup1 = {
        opened: false
    };

    this.popup2 = {
        opened: false
    };

});