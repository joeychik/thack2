var n = 0;
console.log("Hello World!");

// On 'click' events, add it to our global count
// and emit the total back to the outer page
freedom.on('click', function(num) {
	if (num === undefined) {
		num = 1;
	}
	n += num;
  freedom.emit('number', n);
});