var tabs = require("sdk/tabs");
const { data } = require("sdk/self");

tabs.on('ready', function(tab) {
  var worker = tab.attach({
    contentScriptFile: data.url('tabListener.js')
  });

  worker.port.on('click', function(fileLink) {
    tabs.open(fileLink);
  });

});
