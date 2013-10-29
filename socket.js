var satoshi = 100000000;

var DELAY_CAP = 1000;

var lastBlockHeight = 0;

function TransactionSocket() {
    
}
TransactionSocket.init = function() {
    // Terminate previous connection, if any
    var socket = io.connect('http://server.whiskchat.com', {reconnect: false});
    this.socket = socket;
    socket.on('connect', function() {
	console.log('Connected to server.whiskchat.com');
	socket.emit('accounts', {action: 'login', username: 'listenwhiskchat', password: 'testtest'});
	document.getElementById('statusi').innerHTML = '<span style="color: #090;">Connected.</span>';
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
        document.getElementById('statusi').innerHTML = '<span style="color: #e00;">Connecting...</span>';
	socket.socket.connect();
    });
    socket.on('chat', function(data) {
	if (data.user.indexOf('<') !== -1 || data.scrollback || data.room !== 'main' || !data.userShow || data.message.indexOf('!;') !== -1) {
	    return;
	}
	new Chat(data.userShow, data.message);
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
