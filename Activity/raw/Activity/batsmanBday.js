// Batsman Bday
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

    // DELHI CAPITALS INNINGS (20 OVERS MAXIMUM)
    // MUMBAI INDIANS INNINGS (TARGET: 157 RUNS FROM 20 OVERS)
    let teamNameElemArr = selTool(".Collapsible h5");
    let teamNameArr = [];
    for(let i = 0; i < teamNameElemArr.length; i++){
        let teamName = selTool(teamNameElemArr[i]).text();
        // Obtain team names and remove rest
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        // Add them in team array
        teamNameArr.push(teamName);
    }
    let batsmanTblArr = selTool(".table.batsman");
    for(let i = 0; i < batsmanTblArr.length; i++){
        let batsmanNameAnchor = selTool(batsmanTblArr[i]).find("tbody tr .batsman-cell a");
        for(let j = 0; j < batsmanNameAnchor.length; j++){
            let name = selTool(batsmanNameAnchor[j]).text();
            let teamName = teamNameArr[i];
            let link = selTool(batsmanNameAnchor[j]).attr("href");
            // console.log(name+" "+teamName+" "+link);
            printBirthday(link, name, teamName);
        }
    }
}
function printBirthday(link, name, teamName){
    request(link, cb);
    function cb(err, response, html){
        if(err) {
            console.log(err);
        }else{
        // console.log(html);
            extractBday(html, name, teamName);
            console.log("``````````````````````````````````````````");
        }
    }
}
function extractBday(html, name, teamName){
    let selTool = cheerio.load(html);
    let bdayElem = selTool(".ciPlayerinformationtxt span");
    let bday = selTool(bdayElem[1]).text();
    console.log(name+"Plays for "+ teamName + " was born on " + bday);

}
