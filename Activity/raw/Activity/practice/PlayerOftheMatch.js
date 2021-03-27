// Batsman Bday
let request = require("request");
let cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
request(url, cb);
function cb(err, response, html){
    if(err) {
        console.log(err);
    }else{
        // console.log(html);
        extractData(html);
    }
}
function extractData(html){
    let selTool = cheerio.load(html);
    let matchCard = selTool(".col-md-8.col-16")
    for(let i = 0; i < matchCard.length; i++){
        let cardBtns = selTool(matchCard[i]).find(".btn.btn-sm.btn-outline-dark.match-cta");
        let linkOfMatch = selTool(cardBtns[2]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + linkOfMatch;
        // console.log(fullLink);
        printMOTM(fullLink, i);
    }
}

function printMOTM(link){
    request(link, cb);
    function cb(err, response, html){
        if(err) {
            console.log(err);
        }else{
            // console.log(html);
            extractPlayerName(html);
        }
    }
}

function extractPlayerName(html){
    let selTool = cheerio.load(html);
    let playerNm = selTool(".best-player-content").text();
    console.log(playerNm);
}