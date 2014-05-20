/* 
File: Pathetic.js
Contributors: Nur-a- Shawal, Nadia Nahar
Version: 1.0.0.1
*/

(function ($) {
    $.fn.isPatheticValue = function (patheticVariable) {
        if (Object.prototype.toString.call(patheticVariable) === '[object Array]') {
            if (patheticVariable.length == 0) return true;
        }
        if (typeof patheticVariable === 'object') {
            if (patheticVariable == null)
                return true;
        }
        if (typeof patheticVariable === 'number') {
            if (patheticVariable <= 0)
                return true;
        }
        if (patheticVariable == undefined || patheticVariable.trim() == '') {
            return true;
        }
        return false;
    }
})(jQuery);


