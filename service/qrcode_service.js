const QRCode = require('qrcode');

const generateQr = async(data) => {
    let strData = data
    try {
        var response = await QRCode.toDataURL(strData, { type: 'terminal' })
        console.log(`response: ${response}`)
        return { data: response }
    } catch (err) {
        return { error: err }
    }
}

module.exports = {
    generateQr
}