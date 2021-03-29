const { exec } = window.require('child_process');

export const launchGame = (path: any) => {
  return new Promise((resolve, reject) => {
    let command = `${path} -applaunch 892970`;
    console.log(`Launching game: ${command}`);
    exec(command, (err: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve('Success');
    });
  });
};

export const getSteamPath = () => {
  return new Promise((resolve, reject) => {
    exec(
      'reg query "HKEY_CURRENT_USER\\SOFTWARE\\Valve\\Steam" /v "SteamExe"',
      (err: any, stdout: any) => {
        if (err) {
          reject(err);
        } else {
          var txt = stdout.split(' ');
          var path = txt[txt.length - 1];
          console.log(txt);
          console.log(path.trim());
          resolve(path.trim());
        }
      }
    );
  });
};
