
var $ = require('jQuery')

var Array = require('node-array')

var jsonfile = require('jsonfile')



var fs = require('fs');
var files = fs.readdirSync('JSONOUTPUT');

for (var items in files) {
  
 
var file = 'JSONOUTPUT/' + files[items] ;
readwrite(file);
}



function readwrite( file)
{

jsonfile.readFile(file, function(err, obj) {

console.log(file + ':  started')

var jsonobject = [] ;

var sortnfreq = [  ]; // sort values and to find frequency of each value

  
var keys = Object.keys(obj[0]) ; // get key names of the json file

//obj[0].AREAC = [{'name' : '1' , 'frequency' : '20'} , {'name' : '12' , 'frequency' : '200'}]

//console.log(obj[0][keys[0]])


//console.log(keys);
for(i=0;i<keys.length;i++)
{
for(j=0;j<obj.length;j++)
{

sortnfreq.push(obj[j][keys[i]])

}
if(j==obj.length)
{
sortnfreq.sort();

frequencycount(keys[i]) ; // count the frequency for variable "sortnfreq" and push it to new json object
//console.log(keys[i]);
sortnfreq.splice(0,sortnfreq.length);
//console.log(keys[i]);
}
}

function frequencycount(key)
{

	
	var temp;
	var name;
	var frequency ;
	var count=0;
	jsonobject.push({[key] : []});
	
	for(k=0;k<sortnfreq.length;k++)
	{

		
	 	if(k==0)
	 	{
	 		temp = sortnfreq[0];
	 		count=-1;
	 	}
	 	if(temp == sortnfreq[k] )
         {
         	count = count + 1 ;
         }
         else
         {

         	count= count + 1 ;
         	name = temp;
         	frequency = count ;
         	jsonobject[jsonobject.length-1][key].push({ name : name , data : [frequency]});
         	count = 0 ;
         	temp = sortnfreq[k] ;
         }



	}



// add the name and frequency of last element to jsonobject 
			count = count + 1 ;
		   	name = temp;
         	frequency = count;
         	jsonobject[jsonobject.length-1][key].push({ name : name , data : [frequency]});







}

jsonfile.writeFile(file, jsonobject, function (err) {
  console.error('Written ' + ':' +file)
})

console.log(file +  ": finished");
})



}
