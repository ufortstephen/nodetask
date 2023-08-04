const fs = require ('fs');
// const fs = require("fs/promises");

// Create directory/folder named: “Students”
const path = './Students';

fs.access (path, error => {
  // To check if the given directory
  // already exists or not
  if (error) {
    // If current directory does not exist
    // then create it
    fs.mkdir (path, error => {
      if (error) {
        console.log (error);
      } else {
        console.log ('New Students created successfully !!');
      }
    });
  } else {
    console.log ('Given Directory already exists !!');
  }
});

// In the Students directory, create a file named user.js

fs.writeFile ('./Students/user.js', '', {flag: 'a'}, (error, data) => {
  if (error) {
    console.log (error);
  } else {
    console.log ('File Created');
  }
});

// Update the Students directory to “Names
const currPath = './Students';
const newPath = './Names';
// fs.rename(oldName, newName, function(err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log("Successfully renamed the directory.")
//     }
//   })
// try {
//     fs.renameSync(currPath, newPath)
//     console.log("Successfully renamed the directory.")
//   } catch(err) {
//     console.log(err)
//   }

//   Add your name as content to the file user.js
const user = {name: 'Stephen Ufort'};
fs.writeFileSync ('./Students/user.js', "const name = 'Stephen Ufort'");

// Update the file and add your age, sex, nationality,
// phone number and any other information about yourself
const age = '30';
const sex = 'Male';
const phone = '07014860277';
const occupation = 'Software Engineer';

// append age
fs.appendFileSync ('./Students/user.js', '\n const age = 27', function (err) {
  if (err) throw err;
  console.log ('Updated!');
});
// append sex
fs.appendFileSync ('./Students/user.js', "\n const sex = 'Male'", function (
  err
) {
  if (err) throw err;
  console.log ('Updated!');
});
// append phone
fs.appendFileSync ('./Students/user.js', "\n const phone = '07014860277'", function (
  err
) {
  if (err) throw err;
  console.log ('Updated!');
});
// append occupation
fs.appendFileSync ('./Students/user.js', "\n const occupation = 'Software Engineer'", function (
  err
) {
  if (err) throw err;
  console.log ('Updated!');
});


// rename file

fs.rename('./Students/user.js', './Students/ufort_stephen.js', (error) => {
    if (error) {
        
      // Show the error 
      console.log(error);
    }
    else {
    
      // List all the filenames after renaming
      console.log("\nFile Renamed\n");
    }
  });


//   read file
fs.readFile('./Students/ufort_stephen.js',  (err, data) => {
    console.log(data);
 })


//  delete file

fs.unlinkSync('./Students/ufort_stephen.js');

// delete folder
// fs.unlinkSync('./Students');
