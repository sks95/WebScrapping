let path = require('path');
let fs = require('fs');

// checks for team folder and creates new if not present
function teamNameFolderCheck(dirPath, team){
    let teamFolder = path.join(dirPath, team);
    if(!fs.existsSync(teamFolder)){
        fs.mkdirSync(teamFolder);
    }
    return teamFolder;
}

// create json files for batsman
function batsmanJSON(team, player){
    let batsmanPath = path.join(team, player+".json");
    if(!fs.existsSync(batsmanPath)){
        let jsonFile = fs.createWriteStream(batsmanPath);
        jsonFile.end();
    }
    return batsmanPath;
}

// create IPL 2020 folder
function IPLMainFolder(folder){
    let folderName = path.join(__dirname, folder);
    if(!fs.existsSync(folderName)){
        fs.mkdirSync(folderName);
    }
    return folderName;
}

module.exports = {
    teamFolder: teamNameFolderCheck,
    jsonFiles: batsmanJSON,
    IPLfolder: IPLMainFolder
}