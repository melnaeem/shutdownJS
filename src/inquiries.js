

const inquirer = require('inquirer');

exports.abortInquiry = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedOption',
        message: 'Would you like to abort?',
        choices: ['yes', 'no'],
        default: 'yes'
      },
    ]);
}

exports.initInquiri = (defaultMinutes, isTimeOnly) => {

  const choices = ['10', '15', '20', '30', '45', '60'];
  if(!isTimeOnly) choices.push('abort');

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedOption',
        message: 'What is the time with minutes?',
        choices: choices,
        default: defaultMinutes
      },
    ]);
}

/* exports.initInquiri = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'ShutdownOrAbort',
        message: 'Do you want to Shutdown or Abort?',
        choices: ['Shutdown', 'Abort'],
        default: 'Shutdown'
      },
    ])
    .then(answers => {
      answers.ShutdownOrAbort === 'Shutdown' ?
        shutdownInquiri() :
        abort();
    });
} */
