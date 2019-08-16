
import $ from 'jquery'

const request = (text, setPrediction) => {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://radiant-tor-56636.herokuapp.com/",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
        },
        "processData": false,
        "data": JSON.stringify({user_input: text})
    }

    $.ajax(settings).done(function (response) {
        setPrediction(`${response.prediction}`);
    });
}


const wakeServer = () => {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://radiant-tor-56636.herokuapp.com/",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
        },
        "processData": false,
        "data": JSON.stringify({user_input: "wake"})
    }

    $.ajax(settings).done(function (response) {
        console.log("Server Connection Established")
    });
}

export {
    request,
    wakeServer
}