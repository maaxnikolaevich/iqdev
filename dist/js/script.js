$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    },
    change: function() {
      formatCurrency($(this));
    }
});


//Запрет на ввод чего то кроме чисел
function formatNumber(n) {
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Валидация текстовых полей
function formatCurrency(input, blur) {
    let input_val = input.val();
    if (input_val === "") { return; }
    let original_len = input_val.length;
    let caret_pos = input.prop("selectionStart");
    if (input_val.indexOf(".") >= 0) {
        let decimal_pos = input_val.indexOf(".");

        let left_side = input_val.substring(0, decimal_pos);
        let right_side = input_val.substring(decimal_pos);

        left_side = formatNumber(left_side);
        right_side = formatNumber(right_side);

        if (blur === "blur") {
            right_side += "00";
        }
        right_side = right_side.substring(0, 2);

        input_val = "₽" + left_side + "." + right_side;
    } else {
        input_val = formatNumber(input_val);
        input_val = "₽" + input_val;

        if (blur === "blur") {
            if(input_val.length < 6)
                input_val = "₽1,000";
            if(input_val.length > 10)
                input_val = "₽3,000,000";
            input_val += ".00";
        }
    }
    input.val(input_val);

    let updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input[0].setSelectionRange(caret_pos, caret_pos);
}


//Проверка радио-баттон нажат
function displayRadioValue() {
  var ele = document.getElementsByName('light');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
        return ele[i].value;
  }
}

//Проверка количества дней
function isDate(ExpiryDate) {
    let objDate, mSeconds, day, month, year;
    if (ExpiryDate.length !== 10) {
        return;
    }
    if (ExpiryDate.substring(2, 3) !== '.' || ExpiryDate.substring(5, 6) !== '.') {
        return;
    }
    day = ExpiryDate.substring(0, 2) - 0;
    month = ExpiryDate.substring(3, 5) - 1;
    let _year = ExpiryDate.substring(6, 10) - 0;
    if (_year < 1000 || _year > 3000) {
        return;
    }
    if (month < 0 || month > 12) {
        return;
    }
    mSeconds = (new Date(_year, month, day)).getTime();
    objDate = new Date();
    objDate.setTime(mSeconds);
    if (objDate.getFullYear() !== _year ||
        objDate.getMonth() !== month ||
        objDate.getDate() !== day) {
        return;
    }

    month = objDate.getMonth() + 1;
    year = objDate.getFullYear();
    let daysInMonth = new Date(year, month, 0).getDate();
    return {
        "days": daysInMonth,
        "year": _year };
}


//Проверка года на високосность
function days_of_a_year(year) {
  return isLeapYear(year) ? 366 : 365;
}
function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}


//Слайдер
$("#deposit-amount-range").slider({
    animate: "0,00002",
    min: 1000,
    max: 3000000,
    range: "min",
    value: 500000,
    step:1000,
    slide : function(event, ui) {
        $("#deposit-amount").val("₽" + formatNumber(ui.value.toString()) + ".00");
    }
});

$("#replenishment-amount-range").slider({
    animate: "0,00002",
    min: 1000,
    max: 3000000,
    range: "min",
    value: 500000,
    step:1000,
    slide : function(event, ui) {
        $("#replenishment-amount").val("₽" + formatNumber(ui.value.toString()) + ".00");
    }
});

//Календарь
$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};

$.datepicker.setDefaults($.datepicker.regional['ru']);

$(function() {
    let date = new Date();
    date.setDate(date.getDate());
    -
        $("#datepicker").datepicker({
            minDate: date
        });
});


$("#calc_btn").click(function () {
    let dateObj = isDate($("#datepicker").val()) ? isDate($("#datepicker").val()) : "incorrect";
    let _date =  dateObj.days;
    let _daysy = days_of_a_year(dateObj.year);
    let _depositSumm = $("#deposit-amount").val();
    let _summ1 = _depositSumm.substring(1, _depositSumm.length - 3).replace(/,/g, '');
    let _depositTerm = $("#deposit-term").val();
    let _select = displayRadioValue();
    let _replenishmentDeposit = $("#replenishment-amount").val();
    let _summadd = _replenishmentDeposit.substring(1, _replenishmentDeposit.length - 3).replace(/,/g, '');

    if(!_summ1 | !_summadd | !_date) {
        $("#result").html('<span>Результат:</span> ошибка, проверьте введенные вами поля...');
        return;
    }

    $.ajax({
        url: "calc.php",
        method: "POST",
        data: {
            daysy: _daysy,
            date: _date,
            summ1: _summ1,
            depositTerm: _depositTerm,
            select: _select,
            summadd: _summadd
        },
        dataType: "json"

    }).done(function( msg ) {
        $("#result").html(msg['answer'])
    });

});