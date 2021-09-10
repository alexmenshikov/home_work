(function () {
    'use strict'

    let loader = $('#full-loader');
    let form = $('#order-form');
    let success = $('#success__send');

    $('#submit').click(function () {
        let name = $('#name');
        let address = $('#address');
        let phone = $('#phone');

        let hasError = false;

        $('.form__error').hide();
        name.css('border', '1px solid rgb(185, 145, 80)');
        address.css('border', '1px solid rgb(185, 145, 80)');
        phone.css('border', '1px solid rgb(185, 145, 80)');

        if (!name.val()) {
            name.siblings('.form__error').show();
            hasError = true;
            name.css('border', '1px solid rgb(185, 34, 34)');
        }
        if (!address.val()) {
            address.siblings('.form__error').show();
            hasError = true;
            address.css('border', '1px solid rgb(185, 34, 34)');
        }
        if (!phone.val()) {
            phone.siblings('.form__error').show();
            hasError = true;
            phone.css('border', '1px solid rgb(185, 34, 34)');
        }

        if(!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: 'https://itlogia.ru/test/checkout',
                data: {name: name.val(), address: address.val(), phone: phone.val()}
            })
                .done(function (message) {
                    loader.hide();
                    if (message.success) {
                        // alert('Заказ отправлен');
                        form.css('display', 'none');
                        success.css('display', 'flex');
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                });
        }

    });
}())