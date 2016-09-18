var dataset = [ 5, 10, 15, 20, 23 ];



d3.select("body").selectAll("p")
	.data(dataset)
	.enter()
	.append("p")
	.text(function(d) {
		return "I can count up to " + d;
	})
	.style("color", function(d) {
		if (d > 15) {	//Threshold of 15
			return "red";
		} else {
			return "black";
		}
	});

// http://chimera.labs.oreilly.com/books/1230000000345/ch06.html