"use strict";
var AgeFromDateString = (function () {
    function AgeFromDateString(dateString) {
        var birthday = new Date(dateString);
        this._age = new CalculateAge(birthday).age;
    }
    Object.defineProperty(AgeFromDateString.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    return AgeFromDateString;
}());
exports.AgeFromDateString = AgeFromDateString;
var AgeFromDate = (function () {
    function AgeFromDate(date) {
        this._age = new CalculateAge(date).age;
    }
    Object.defineProperty(AgeFromDate.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    return AgeFromDate;
}());
exports.AgeFromDate = AgeFromDate;
var CalculateAge = (function () {
    function CalculateAge(birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        var age = ageDate.getUTCFullYear() - 1970;
        this._age = (age > 0) ? age : 0;
    }
    Object.defineProperty(CalculateAge.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    return CalculateAge;
}());
//# sourceMappingURL=age-calculator.js.map