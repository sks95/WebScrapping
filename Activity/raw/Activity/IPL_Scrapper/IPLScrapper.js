let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let path = require("path");
let matchWiseInfoObj = require("./matchWiseHandle");
let folderCreationObj = require("./teamsFolderCreate");

// Creating IPL 2020 Folder
let folderName = "IPL 2020";
let mainFolderPath = folderCreationObj.IPLfolder(folderName);

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
request(url, cb);
function cb(err, response, html){
    if(err) {
        console.log(err);
    }else{
        getAllMatchesLink(html);
    }
}
// Retreive links of all the matches played
function getAllMatchesLink(html){
    let selTool = cheerio.load(html);
    let matchBox = selTool(".match-info-link-FIXTURES");
    for(let i = 0; i < matchBox.length; i++){
        let matchLink = selTool(matchBox[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + matchLink;
        
        // Passing full link of each match & main folder
        matchWiseInfoObj.matchWiseHandler(fullLink, mainFolderPath);
    }
}
