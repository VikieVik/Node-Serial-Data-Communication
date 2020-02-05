//Serial com with arduino and node js
var SerialPort = require('serialport')
var port = new SerialPort(
	'/dev/tty.usbmodem14201',
	{ baudRate: 9600 }, 
	function(err){
		if(err){
			return console.log('Error: ' , err.message);
		}
	} 
);

port.on('data',function(data) {
	process.stdout.write(data.toString());
});