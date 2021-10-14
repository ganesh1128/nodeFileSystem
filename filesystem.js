var fs = require("fs");
var createStream = fs.createWriteStream("guvi.txt");
createStream.end();

var writeStream = fs.createWriteStream("guvi.txt");
writeStream.write("Hi,This is Ganesh Kumar,");
writeStream.write("from GUVI ");
writeStream.write("Thank You");
writeStream.end();
fs.stat("/nodeFileSystem/guvi.txt", function(err, stats){
    var mtime = stats.mtime;
    console.log(mtime);
});
