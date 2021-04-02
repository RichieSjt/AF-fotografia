const { google } = require('googleapis')

const writeIntoSheet = (contactData) =>{
    try {
        // Connecting to sheets client
        const client = new google.auth.JWT(
            process.env.CLIENT_EMAIL,
            null,
            process.env.PRIVATE_KEY,
            ['https://www.googleapis.com/auth/spreadsheets']
        )

        client.authorize((err, tokens) => {
            if (!err) {
                // If everything went well we append the new data
                gsRun(client, contactData)
            } else {
                throw new Error()
            }
        })

    } catch (e) {
        console.log('Could not connect to google sheets services.')
    }
}

const gsRun = async (client, contactData) => {
    const gsAPI = google.sheets({version: 'v4', auth: client})
            
    const writeData = []
    writeData.push(contactData)
    try {
        // Writing the new data
        await gsAPI.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'A1:E1',
            valueInputOption: 'USER_ENTERED',
            resource: { values: writeData }
        })
    } catch (e) {
        console.log('Could not write the data into the sheet.')
    }
}

module.exports = writeIntoSheet