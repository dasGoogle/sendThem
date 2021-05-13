const excelToJson = require('convert-excel-to-json');
const settings = require('./settings.js')
const nodemailer = require('nodemailer');
const fs = require('fs');
const baseHTML = fs.readFileSync(`${__dirname}/${settings.messageHTML}`, {
    encoding: 'utf-8'
});

let transporter = nodemailer.createTransport(settings.smtpClient);


function loadFromExcel() {
    const result = excelToJson({
        sourceFile: `${__dirname}/${settings.excel.inputFile}`,
        header: {
            rows: settings.excel.skipHeader
        },
        sheets: [settings.excel.sheetName]
    });
    return result[settings.excel.sheetName];
}

function formatMessage(text, data) {
    Object.keys(data).forEach(key => {
        text = text.replace(`$$${key}$$`, data[key]);
    });
    return text;
}


const recipients = loadFromExcel();

async function sendMails() {
    
    for (let i = 0; i < recipients.length; i++) {
        const recipient = recipients[i];
        const attachmentID = 1 + i; 
        const to = recipient[settings.excel.emailAdressColumn];
        const html = formatMessage(baseHTML, recipient);
        const { fromMail, fromName, subject, attachmentName } = settings.mail;
        let info = await transporter.sendMail({
            from: `"${fromName}" <${fromMail}>`,
            to,
            subject,
            html,
            attachments: [
                {   // file on disk as an attachment
                    filename: attachmentName,
                    path: settings.attachmentPath(attachmentID) 
                },
            ]
        });
        console.log(`${attachmentID}/${recipients.length}: sent ${settings.attachmentPath(attachmentID)} to ${to}`);
    }
}

sendMails();
