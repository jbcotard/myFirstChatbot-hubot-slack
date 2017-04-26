// Description:
//   <description of the scripts functionality>
//   this is my clever bot
'use strict';

module.exports =  (robot) =>  {

  robot.hear(/hello bob/, (res) => {
    res.send(`bonjour ${res.message.user.name}`);
  });

  robot.hear(/flute|zut|💩/i, (res) => {
    res.send(`😡 ${res.message.user.name}`);
  });

  // ok bob ça roule
  robot.hear(/(?=.*ok)(?=.*bob)(?=.*roule)/i, (res) => {
    res.send(`😀 ${res.message.user.name}`);
  });

};
