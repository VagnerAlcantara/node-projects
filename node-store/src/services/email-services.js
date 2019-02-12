'use strict'

var config = require("../config")
var sendGrid = require("sendGrid")(config.sendGridKey)
/*
sendGrid - api que permite envio de até 25 mil e-mails gratuitos

*/
exports.send = async (to, subject, body) => {
    sendGrid.send({
        to: to,
        from: "vagneralcantara15@gmail.com",
        subject: subject,
        html: body
    })
}