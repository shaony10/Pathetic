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
    };
    
    $.fn.overcomePatheticOrderForList = function() {
        var patheticList = $(this);
        var patheticListItems = $('li', patheticList).get();
        patheticListItems.sort(function(firstPethona, secondPethona) {
            var firstElement = $(firstPathona).text().toUpperCase();
            var secondElement = $(secondPathona).text().toUpperCase();
            return (firstElement < secondElement) ? -1 : 1;
        });
        $.each(patheticListItems, function(index, pathona) {
            patheticList.append(pathona);
        });
    };
    // How to use:    $("ul").overcomePatheticOrderForList();
    
})(jQuery);


