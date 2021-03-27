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
    
    // Obtain only batsman table
    let batsmanTblArr = selTool(".table.batsman");
    for(let i = 0; i < batsmanTblArr.length; i++){
        // obtain batsman name from all the tr rows
        let batsmanName = selTool(batsmanTblArr[i]).find("tbody tr .batsman-cell");
        for(let j = 0; j < batsmanName.length; j++){
            let name = selTool(batsmanName[j]).text();
            console.log(name+" of "+teamNameArr[i]);
        }
        console.log("```````````````````````````````````````````````");
    }
    



    Attr()
}

