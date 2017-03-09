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
        chosen_payment_type: 'bank',
        download_invoice_url: 'http://google.com',
        download_receipt_url: 'http://keep.google.com',
        get_dt_form_url: '/getInvoiceDTForm',
        id: '1',
        payment_message: '',
        online_payment_error_message: 'Payment error - try again!',
        show_download_invoice_btn: true,
        show_download_receipt_btn: true,
        show_pay_btn: true,
        show_validate_btn: true,
        type: 'registration'
    },
    {
        chosen_payment_type: 'cash',
        chosen_payment_type_formatted: 'Cash',
        download_invoice_url: 'http://google.com',
        download_receipt_url: 'http://keep.google.com',
        id: '2',
        lock_payment_type: true,
        show_download_invoice_btn: false,
        show_download_receipt_btn: true,
        show_pay_btn: false,
        show_validate_btn: false,
        type: 'resources'
    },
    {
        chosen_payment_type: 'bank2',
        download_invoice_url: 'http://google.com',
        download_receipt_url: 'http://keep.google.com',
        get_dt_form_url: '/getInvoiceDTForm',
        id: '3',
        payment_message: 'Success! Gratz!!!',
        online_payment_error_message: '',
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
    is_imprint: false
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
