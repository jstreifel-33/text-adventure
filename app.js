// $('#terminal').terminal(function(command) {
//   var cmd = $.terminal.parse_command(command);
//   console.log(cmd);
//   let arg = $.terminal.split_command(command);
//   console.log(arg);
//   if (cmd.name === 'add') {
//      this.echo(cmd.args.reduce((a, b) => a + b));
//   }
//   if (cmd.name === 'subtract') {
//     this.echo(cmd.args.reduce((a, b) => a - b));
//  }
// });


// $('#terminal').terminal({
//   echo: function(arg1) {
//     this.echo(arg1);
//   },
//   walk: function(arg1) {
//     this.echo('you walk to ' + arg1);
//   }
// })

let page = 'home'
let userName = []

$('#terminal').terminal(function (command, term) {
  let cmd = $.terminal.parse_command(command);

  if (page === 'home') {

    if (command === 'name') {
      term.echo('please enter your name');
      page = command
    } else {
      term.echo('Welcome Home');
    }

  } else

    if (page === 'name') {
      term.read('last name: ').then(arg => {
        term.echo('Your last name is: ' + arg, newline = false);
        userName.push(arg)
      })
      term.read('first name: ').then(arg => {
        term.read('Your first name is: ' + arg)
        userName.push(arg)
      })
      term.read('Your name has been set to ' + userName[0] + ' ' + userName[1])
    }



  //   })
  //   })
  // }else if (page === 'name' && userName.length === 1){
  //   term.read('last name: ').then(arg => {
  //     term.read('Your last name is: ' + arg)
  //     userName.push(arg);  
  //   })
  // }else if (page === 'name' && userName.length === 2){
  //   term.echo('The name you\'ve entered is ' + userName[0] + ' ' + userName[1] + '.')
  // }

}) //, options