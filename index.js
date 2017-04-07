
// from './relayr-browser-sdk/dist/relayr-browser-sdk.min.js';


//connect to cloud

const RELAYR = relayr.default;
const Device = relayr.Device;
let whichBeer;
let weight;
//define beer attributes
// let beer1 = {
//     brand: "Tannenzapfle",
//     grPer: 7
// }

// let beer2 = {
//     brand: "Franziskaner",
//     grPer: 12
// }

console.log('1');
//init gives the api enough information to link this code to a specific project on the relayr cloud
RELAYR.init({
    // this comes from the api key page on the dashboard
    //it is important that these be called exactly  "redirectURI" and "id" 
    id: "0fa8549f-e09c-44cd-89ad-fabfcf276e16",
    // this identifies my website as a 'trusted user' basically- it expects me to show up and ask for access to stuff
    redirectURI: "http://localhost:3003/index.html"
});

//authorizing redirects you to log in, and returns the current user, whose devices and other things you can then interact with
//TODO login, gets you back currentuser, who has an ajax
RELAYR.authorize().then((currentUser) => {
    console.log('logged in, ', !!currentUser);
    //set up the device instance
    let scale = new Device({
        id: "001d3fa0-6a37-40c2-be44-dd0a328cf230"
    }, {
        ajax: currentUser.config.ajax
    });


    //     // figure out which beer to use
    scale.getReadings().then((response) => {
        console.log('getting state', !!response);
        scale.connect().then((connection) => {          
            connection.on('data', (data) => {
                switch (data.readings[0].meaning) {
                    case "SA001":
                        $(".data1").text(data.readings[0].value);
                        break;
                    case "SA002":
                        $(".data2").text(data.readings[0].value);
                        break;
                    case "SA003":
                        $(".data3").text(data.readings[0].value);
                        break;
                    case "SA004":
                        $(".data4").text(data.readings[0].value);
                        break;
                    case "SA005":
                        $(".data5").text(data.readings[0].value);
                        break;
                    case "SA006":
                        $(".data6").text(data.readings[0].value);
                        break;
                    case "SA007":
                        $(".data7").text(data.readings[0].value);
                        break;
                    case "SA008":
                        $(".data8").text(data.readings[0].value);
                        break;
                    case "SW001":
                        $(".data9").text(data.readings[0].value);
                        break;
                    case "SW002":
                        $(".data10").text(data.readings[0].value);
                        break;
                    case "SW003":
                        $(".data11").text(data.readings[0].value);
                        break;
                    case "SW004":
                        $(".data12").text(data.readings[0].value);
                        break;
                    case "SW005":
                        $(".data13").text(data.readings[0].value);
                        break;
                    case "SM001":
                        $(".data14").text(data.readings[0].value);
                        break;
                    case "SM002":
                        $(".data15").text(data.readings[0].value);
                        break;
                    default:
                        break;
                    //inserts into html
                }

            });
        }, (err) => {
            console.log('connection failed', err)
        })

    }, (err) => {
            console.log('get reading failed', err)
    });
});