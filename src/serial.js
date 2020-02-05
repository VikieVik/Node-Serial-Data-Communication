/*
This Node js app lets us communicate with serial devices spitting serial data
Author: Trident Holder
Date:05 Jan, 2020


*/

var SerialPort = require('serialport')
var port = new SerialPort(
	'/dev/tty.usbmodem14201', //Find where your device is connected and replace here
	{ baudRate: 9600 }, // baudRate should match with hardware baudrate
	function(err){
		if(err){
			return console.log('Error: ' , err.message);
		}
	} 
);

port.on('data',function(data) {
	process.stdout.write(data.toString()); //process.stdout.write() function prints data 
	                                        // unlike console.log() which adds /n after logging
});