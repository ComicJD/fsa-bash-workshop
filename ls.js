const fs = require('fs');
//module.exports = function () {
    
   
    
   
   /* fs.readdir('./', 'utf8', (err, files) => {
        const cmd = files//.toString().trim()
        if(cmd === "ls"){
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join('\n'));
          process.stdout.write('prompt > ');
        }
    }
      });
    }
    */
    module.exports = function () {
        
        
        // The stdin 'data' event fires after a user types in a line
        process.stdin.on("data", (data) => {
          const cmd = data.toString().trim() //remove the newline
        
          if (cmd === "ls") {
            fs.readdir('./', 'utf8', (err, files) => {
                if (err) {
                  throw err;
                } else {
                  process.stdout.write(files.join('\n'));
                  process.stdout.write('\nprompt > ');
                }
              });
          }
        
          //   process.stdout.write("You typed: " + cmd)
          
        })
        
        }
