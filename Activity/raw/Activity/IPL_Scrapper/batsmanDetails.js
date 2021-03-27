let cheerio = require('cheerio');
let path = require('path');
let fs = require('fs');

function playerDetails(selTool, batCol, batsmanJSONfile, batsmanNm, rivalTeam, date, venue, result){
    
    let runs = selTool(batCol[2]).text();
    let balls = selTool(batCol[3]).text();
    let fours = selTool(batCol[5]).text();
    let sixes = selTool(batCol[6]).text();
    let strate = selTool(batCol[7]).text();

    let batsmanArr = [];
    let batsmanObj = {
        "Name": batsmanNm,
        "Runs": runs,
        "Fours": fours,
        "Sixes": sixes,
        "Strike Rate": strate,
        "Date": date,
        "Venue": venue,
        "Opponent Team": rivalTeam,
        "Result": result
    }

    batsmanArr.push(batsmanObj);
    fs.appendFileSync(batsmanJSONfile, JSON.stringify(batsmanArr, null, 5));
}

module.exports = {
    details: playerDetails
}