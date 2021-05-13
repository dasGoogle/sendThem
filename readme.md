# sendThem
sendThem is a tool that allows you to send a list of files to a large number of recipients from an Excel Spreadsheet. 

## How to use
Configure your SMTP server settings in the `settings.js` file. 
Then configure the `email` object in that file to fit your needs. 
You may also need to change the function that generates the attachment file name to match the format that it is stored in on your disk. 

## Using the message template
You can edit the `message.html` file to match your needs. sendThem also allows you to personalize the sent EMail messages. 
For this, you can choose to include fields from your excel spreadsheet in the message text. 
To do this, just place `$$A$$` in a spot where you want the content from column A of a recipient to be placed. 
The same way, you can also place `$$B$$` for Column B and so on. 

## send out Mail
To send all mail, run `npm run start` or `node index.js` in your command line. 
sendThem will keep you updated on the state of all your messages sent. 