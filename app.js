const { response } = require('express');

const credentials = {
    apiKey: 'de801ed39416fc5c43e701dfd328912b7e0f85a12964c027aae46e805f251823',
    username: 'sandbox'
}

const AfricasTalking = require('africastalking')(credentials);
const sms = AfricasTalking.SMS;
const phone_number = [
    {
        name: 'Naphtali Makori',
        phone: '+254727991993'
    }
]

function sendMessage() {

    phone_number.map((item) => {
        const options = {
            to: item.phone,
    
            message: "Hello there, you have won an award in AFRICASTKNG from Naphtali Makori, Congratulations " + item.name 
    
        }
    
        sms.send(options)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    
}

sendMessage();