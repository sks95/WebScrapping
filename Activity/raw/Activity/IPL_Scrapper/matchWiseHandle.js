let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let path = require("path");
let teamFolderObj = require("./teamsFolderCreate");
let batsmanObj = require("./batsmanDetails");

function singleMatch(link, folderPath) {
    request(link, function(error, resp, html) {
      if (error) {
        console.log(error);
      } else {
        singleMatchExtract(html, folderPath);
      }
    })
}

function singleMatchExtract(html, folderPath){
    var selTool = cheerio.load(html);
    let teamArr = selTool(".name-link .name");

    // Retreive match details which is same in all matches
    let matchDescription = selTool(".match-info.match-info-MATCH .description").text();
    
    let venue = matchDescription.split(",")[1];
    let date = matchDescription.split(",")[2];
    let result = selTool(".match-info.match-info-MATCH .status-text>span").text();

    //Looping through Batsman Table for every player of that match
    let batTable = selTool(".table.batsman");
    for (let i = 0; i < 2; i++) {
        let teamNm = selTool(teamArr[i]).text();
    
        let  rivalTeam = (function setOpponent() {
        if (i == 1) {
            var rivalTeam = selTool(teamArr[0]).text();
            return rivalTeam;
        } else {
            var rivalTeam = selTool(teamArr[1]).text();
            return rivalTeam;
        }
        })();
    
        let teamFolderPath = teamFolderObj.teamFolder(folderPath, teamNm);
    
        let  teamWiseBatTable = selTool(batTable[i]).find("tbody tr");
    
        for (let j = 0; j <  teamWiseBatTable.length - 1; j += 2) {
          let batCol = selTool(teamWiseBatTable[j]).find("td");
          let batsmanNm = selTool(batCol[0]).text().trim();
          
          let batsmanJSONfile = teamFolderObj.jsonFiles(teamFolderPath, batsmanNm);
          batsmanObj.details(selTool, batCol, batsmanJSONfile, batsmanNm, rivalTeam, date, venue, result);
        }
    }
}

module.exports = {
    matchWiseHandler: singleMatch
}