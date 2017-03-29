'use strict';

const express = require('express');
const app = express();

var bodyParser = require('body-parser');
//app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// HardCode
var invoices = [
    {
        cancel_invoice_url: '/cancelInvoice',
        change_invoice_url: '/changeInvoice',
        chosen_payment_type: 'bank',
        chosen_service_id: 2,
        create_invoice_url: '/createInvoice',
        download_invoice_url: 'http://google.com',
        download_receipt_url: 'http://keep.google.com',
        get_dt_form_url: '/getInvoiceDTForm',
        id: '1',
        is_datatrans: true,
        online_payment_error_message: 'Payment error - try again!',
        pay_pp_url: '/',
        payment_message: '',
        services: [
            {id:1, name:'Service 1'},
            {id:2, name:'Service 2'},
            {id:3, name:'Service 3'}
        ],
        show_cancel_btn: true,
        show_choose_services: true,
        show_download_invoice_btn: true,
        show_download_receipt_btn: true,
        show_pay_btn: true,
        show_validate_btn: true,
        type: 'registration',
        currency_short_name: 'CHF'
    },
    {
        cancel_invoice_url: '/cancelInvoice',
        change_invoice_url: '/changeInvoice',
        chosen_payment_type: 'cash',
        chosen_payment_type_formatted: 'Cash',
        create_invoice_url: '/createInvoice',
        download_invoice_url: 'http://google.com',
        download_receipt_url: 'http://keep.google.com',
        get_dt_form_url: '/getInvoiceDTForm',
        id: '2',
        is_datatrans: true,
        lock_payment_type: true,
        pay_pp_url: '/',
        show_cancel_btn: false,
        show_download_invoice_btn: false,
        show_download_receipt_btn: true,
        show_pay_btn: false,
        show_validate_btn: false,
        type: 'resources'
    },
    {
        cancel_invoice_url: '/cancelInvoice',
        change_invoice_url: '/changeInvoice',
        chosen_payment_type: 'data_trans',
        create_invoice_url: '/createInvoice',
        download_invoice_url: 'http://google.com',
        download_receipt_url: 'http://keep.google.com',
        get_dt_form_url: '/getInvoiceDTForm',
        id: '3',
        is_datatrans: false,
        pay_pp_url: '/',
        payment_message: 'Success! Gratz!!!',
        online_payment_error_message: '',
        show_cancel_btn: true,
        show_download_invoice_btn: true,
        show_download_receipt_btn: false,
        show_pay_btn: true,
        show_validate_btn: false,
        type: 'resources'
    }
];
var data = {
    imprint_info: {
        get_dt_form_url: '/getDTForm',
        imprint_error_message: '',
        imprint_message: '',
        show_validate_imprint_btn: true
    },
    invoices: invoices,
    is_imprint: false,
    terms_conds_lock: false,
    terms_conds_value: false
};
var requestAnswer = {
    error: 0,
    errorMessage: '',
    data: data
};


//
// HTTP-request methods
//
app.post('/getData', function(req, res) {
    res.status(200).send(JSON.stringify(requestAnswer));
});

app.post('/getDTForm', function(req, res) {
    var d = req.body.data && JSON.parse(req.body.data);
    d && console.log('data', d);

    if(true) {
        // Set random imprint validation result (for next request)
        if(Math.random() > 0.5) {
            data.imprint_info.imprint_error_message = 'It\'s a trap!';
            data.imprint_info.imprint_message = '';
            data.imprint_info.show_validate_imprint_btn = true;
        } else {
            data.imprint_info.imprint_error_message = '';
            data.imprint_info.imprint_message = 'Successfully validated';
            data.imprint_info.show_validate_imprint_btn = false;
        }
    }

    res.status(200).send(JSON.stringify({
        error: 0,
        errorMessage: '',
        data: {'something': 'something'}
    }));
});

app.post('/getInvoiceDTForm', function(req, res) {
    var d = req.body.data && JSON.parse(req.body.data);
    d && console.log('data', d);

    res.status(200).send(JSON.stringify({
        error: 0,
        errorMessage: '',
        data: {'something': 'something'}
    }));
});

app.post('/setAgree', function(req, res) {
    var d = req.body.data && JSON.parse(req.body.data);
    d && console.log('data', d);

    requestAnswer.data.terms_conds_value = d.params_data.terms_conds_value;
    res.status(200).send(JSON.stringify(requestAnswer));
});

app.post('/cancelInvoice', function(req, res) {
    var d = req.body.data && JSON.parse(req.body.data);
    d && console.log('data', d);

    requestAnswer.data.invoices.map(function(i){i.show_cancel_btn = false});
    res.status(200).send(JSON.stringify(requestAnswer));
});

app.post('/changeInvoice', function(req, res) {
    var d = req.body.data && JSON.parse(req.body.data);
    d && console.log('data', d);

    requestAnswer.data = d.dynamic_data;
    res.status(200).send(JSON.stringify(requestAnswer));
});

app.post('/createInvoice', function(req, res) {
    var d = req.body.data && JSON.parse(req.body.data);
    d && console.log('data', d);

    requestAnswer.data = d.dynamic_data;
    res.status(200).send(JSON.stringify(requestAnswer));
});

//
// HTTP-static
//
app.use(express.static('./'));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
    console.log('Press Ctrl+C to quit.');
});
