var child = require('child_process').execFile;
var executablePath = "/Applications/Chess.app/Contents/MacOS";

export const launchGame = () => {
    // Check for launcher updates??
    // Check for mod updates
    // Launch game
    child(executablePath, function(err:any, data:any) {
        if(err){
           console.error(err);
           return;
        }
     
        console.log(data.toString());
    });
  }
  