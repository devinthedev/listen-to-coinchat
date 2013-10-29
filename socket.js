var satoshi = 100000000;

var DELAY_CAP = 1000;

var lastBlockHeight = 0;

function TransactionSocket() {
    
}
TransactionSocket.init = function() {
    // Terminate previous connection, if any
    var socket = io.connect('https://coinchat.org:443', {reconnect: false, secure: true});
    this.socket = socket;
    socket.on('connect', function() {
	console.log('Connected to coinchat.org');
	socket.emit('joinroom', {room: 'lounge'})
	document.getElementById('statusi').innerHTML = '<span style="color: #090;">Connected.</span>';
    });
    socket.on('disconnect', function() {
        document.getElementById('statusi').innerHTML = '<span style="color: #e00;">Connecting...</span>';
	socket.socket.connect();
    });
    socket.on('chat', function(data) {
	if (data.user.indexOf('<') !== -1 || data.scrollback || data.room !== 'lounge') {
	    return;
	}
	new Chat(data.user, data.message);
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
