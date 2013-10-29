var satoshi = 100000000;

var DELAY_CAP = 1000;

var lastBlockHeight = 0;

function TransactionSocket() {
    
}
TransactionSocket.init = function() {
    // Terminate previous connection, if any
    var socket = io.connect('http://server.whiskchat.com');
    socket.on('connect', function() {
	console.log('Connected to server.whiskchat.com');
	socket.on('tip', function(data) {
	    console.log('TIP:', JSON.stringify(data));
	    var d = false;
	    if (data.target == 'donate') {
		d = true;
	    }
	    new Transaction(data.amount, d);
	});
    });
    socket.on('disconnect', function() {
	socket.socket.connect();
    });
    socket.on('chat', function(data) {
	console.log(data);
    });
    socket.on('message', function(data) {
        console.log(data);
    });
}
TransactionSocket.close = function() {
}
function TradeSocket() {
    
}

TradeSocket.init = function() {
    
}

TradeSocket.close = function() {
    
}
