'use strict'

const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

const convertFile = () => {
    csv()
        .fromFile('customer-data.csv')
        .then((jsonObj) => {
            const folderName = uuidv1()
            fs.mkdirSync(folderName)
            fs.writeFileSync(path.join(__dirname, folderName, 'customer-data.json'), JSON.stringify(jsonObj, null, 4))
        })
}

convertFile(process.argv[2])
