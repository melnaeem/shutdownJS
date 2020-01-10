const { exec } = require('child_process'); // exeute commands lib

const { initInquiri, abortInquiry } = require('./inquiries');


const initApp = (isScheduledTask) => {
  const defaultMinutes = 15;

  initInquiri(defaultMinutes, !!isScheduledTask && true).then(answers => {

    if (answers.selectedOption === 'abort') {
      const isAbortError = !! abort();

      isAbortError ?
        console.error("There's no scheduled tasks, please schedule one") :
        console.log('Shutdown will be aborted');

      initApp(true);
      return;
    }

    const seconds = (answers.selectedOption || defaultMinutes) * 60;
    const isShutDownError = !! shutdown(seconds);

    console.log(isShutDownError)

    isShutDownError ?
      console.log("There's a scheduled task that will be aborted.") : // TODO: Abort then shutdown then init
      console.log(`The computer will shutdown after: ${seconds / 60} minutes which equals  ${seconds} seconds`); // AbortInquiry then if yes init

  });
}


const shutdown = (seconds) => 
  exec(`shutdown -s -t ${seconds}`, (err, stdout, stderr) => {
    return err;
  });


const abort = () => {
  exec("shutdown -a", (err, stdout, stderr) => {
    return err;
  });
}

const handleAbort = () => {
  abortInquiry()
    .then(answers => {

    })
}

initApp(false);


