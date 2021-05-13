module.exports = {
    smtpClient: {
        /**
         * Configure your SMTP Server settings here
         */
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'test@ethereal.email',
            pass: '1234567890'
        }
    },
    mail: {
        fromName: "Test User", // The name that will be displayed as the sender of the mail
        fromMail: "testuser@example.com", // The Mail adress that will be displayed as the sender
        subject: "TestMail", // The subject of the sent mail
        attachmentName: "Test.txt" // The name the attached file will appear as
    },
    excel: {
        inputFile: "Mail.xlsx", // The source Excel spreadsheet for the recipient data
        skipHeader: 1, // The number of lines to be skipped before the first element (Choose 1 if you have a title in the spreadsheet)
        sheetName: "Tabelle1", //The name of the worksheet in the spreadsheet we want to read from
        emailAdressColumn: 'C' // The column the recipient Mail address is located in
    },
    attachmentPath: (id) => `input/Seite ${id}.txt`, //The function that turns the 1-indexed row number into a file
    messageHTML: "message.html", // The HTML file providing the base Text for the Mail Adress
}