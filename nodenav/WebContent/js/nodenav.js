var dataset = [ 5, 10, 15, 20, 23 ];

var iv = {"root":{"type":"module", "id": "iv","name":"ESQ Vermietung", "links": [] }			}

var emp = {"employees":[
              {"firstName":"John", "lastName":"Doe"},
              {"firstName":"Anna", "lastName":"Smith"},
              {"firstName":"Peter", "lastName":"Jones"}
          ]}

//http://services.odata.org/TripPinRESTierService/(S(svvbiimfz2ym1c1le33fybvo))/People
var datajs ;
   d3.json('http://services.odata.org/TripPinRESTierService/People', function(error,datain){

   	
   	var di = datain.value;
   	d3.select("body").selectAll("p")
   		//.data(datain[0])
   		.data(di)
   		.enter()
   		.append("p")
   		.text(function(d) {
   			return "I can count up to " + d.UserName;
   		})
   		.style("color", function(d) {
   			if (d > 15) {	//Threshold of 15
   				return "red";
   			} else {
   				return "black";
   			}
   		});
   	
   })
	

// http://chimera.labs.oreilly.com/books/1230000000345/ch06.html

// hana xs service: https://help.hana.ondemand.com/help/frameset.htm?3762b229a4074fc59ac6a9ee7404f8c9.html