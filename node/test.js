 xlsxj = require("xlsx-to-json");

 for (i=13 ; i<=40 ; i++)
  xlsxj({
    input: 'XLSXINPUT/' + i + '.xlsx', 
    output: 'JSONOUTPUT/' + i +'.json'
   
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });

  