// Highest Wicket Taker
let request = require("request");
let cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
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
    // get the bowling table of both the innings
    let bothBowlerTable = selTool(".table.bowler");
    // console.log(bothBowlerTable.length);
    // let tableHTML = "";
    // for(let i = 0; i < bothBowlerTable.length; i++){
    //     tableHTML += selTool(bothBowlerTable[i]).html();
    // }
    let hwtname = "";
    let hwkt = 0;
    for(let i = 0; i < bothBowlerTable.length; i++){
        let playersRow = selTool(bothBowlerTable[i]).find("tbody tr");
        for(let j = 0; j < playersRow.length; j++){
            let allColofPlayer = selTool(playersRow[j]).find("td");
            let name = selTool(allColofPlayer[0]).text();
            let wickets = selTool(allColofPlayer[4]).text();
            console.log("name",name,"wicket",wickets);

            // check for highest wicket taker
            if(hwkt <= Number.parseInt(wickets)){
                hwkt = wickets;
                hwtname = name;
            }
        }
        console.log("````````````````````````````````````````````````");
    }
    console.log(hwtname," : ",hwkt);
}

