var IPscan = require("./lib/IPscan");


$('.start').click(function(){
  $('.loader').css('display','inline-block')
});

$('document').ready(function(){

  IPscan.scanNodes(function(err, nodes) {
  	if (err) {
  		console.log("Error", err);
  	}
  	//console.log(nodes);

  });
});




// var async = require('async'),
//     net = require('net'),
//     Socket = net.Socket;
//     $ = require('jquery')
//
//     scanNodes = function(callback){
//       var hostAddress = getHostAddress();
//       var neighbors = [];
//       async.each(hostAddress, function(address,next){
//         scanSubnet(address,function(err,data){
//           Array.prototype.push.apply(neighbors,data);
//           next();
//         });
//       },function(err){
//         //console.log(neighbors);
//         return typeof callback === "function" ? callback(err,neighbors) : neighbors;
//       });
//     };
//
//     function scanSubnet(host,callback){
//       var neighbors = [];
//
//       var targetIPs = [];
//       var ports = [];
//       var subnet = (function(){
//         var str = host.match(/^(\d+\.\d+\.\d+)/);
//         return str && str[0];
//       })();
//
//       for(var i=1;i<=255;i++){
//         targetIPs.push(subnet + "." + i);
//       }
//       for(var p=1;p<100;p++){
//         ports.push(p);
//       }
//
//       targetIPs.forEach(getLastOctet);
//
//       function getLastOctet(element,index,array){
//         var n = element.split('.');
//         //console.log(n[n.length-1]);
//         neighbors.push({"id":n[n.length-1],"ports":[]});
//       }
//
//       //console.log(neighbors[0].id);
//       //console.log(targetIPs);
//
//       var hostIndex = targetIPs.indexOf(host);
//       if(hostIndex > 0){
//         targetIPs.splice(hostIndex,1);
//       }
//
//       async.each(targetIPs, function(ip,next){
//         if(host===ip){
//           next();
//         }
//         else{
//           //next();
//           //console.log(targetIPs.indexOf(ip)+1 + " " + ip);
//           //console.log(ip.slice(-));
//           async.each(ports,function(port,nextPort){
//             checkPort(port,ip,function(error,status,host,targetPort){
//               if(status == "open"){
//                 var n = host.split('.');
//                 neighbors[n[n.length-1]-1].ports.push(targetPort);
//                 console.log(subnet+"."+neighbors[n[n.length-1]-1].id + " : " + neighbors[n[n.length-1]-1].ports );
//               }
//               nextPort();
//             })
//           })
//
//           // for(var y = 1;y<100;y++){
//           //   checkPort(y,ip,function(error,status,host,targetPort){
//           //     if(status == "open"){
//           //       //console.log(host);
//           //       //var n = element.split('.');
//           //       //neighbors.push({"id":n[n.length-1],"port":targetPort});//[n[n.length-1]+1].port = targetPort;
//           //       //targetIPs.forEach(getLastOctet);
//           //
//           //       var n = host.split('.');
//           //       neighbors[n[n.length-1]-1].ports.push(targetPort);
//           //       console.log(subnet+"."+neighbors[n[n.length-1]-1].id + " : " + neighbors[n[n.length-1]-1].ports );
//           //
//           //       //console.log(host);
//           //     }
//           //   })
//           // }
//
//           next();
//         }
//       }, function(err){
//         callback(err,neighbors);
//       });
//     }
//
//     function checkPort(port, host, callback) {
//       var socket = new Socket(), status = null;
//
//       // Socket connection established, port is open
//       socket.on('connect', function() {status = 'open';socket.end();});
//       socket.setTimeout(3000);// If no response, assume port is not listening
//       socket.on('timeout', function() {status = 'closed';socket.destroy();});
//       socket.on('error', function(exception) {status = 'closed';});
//       socket.on('close', function(exception) {callback(null, status,host,port);});
//
//       socket.connect(port, host);
// }
//
// function getHostInterfaces(callback){
//       var ifaces = require('os').networkInterfaces(),
//           obj = [];
//
//       for(var i in ifaces){
//         if(/array|object/.test(ifaces[i])){
//           for(var x in ifaces[i]){
//             if(/false/.test(ifaces[i][x].internal) && /ipv4/i.test(ifaces[i][x].family)){
//               var tmp = { adapter: i, properties: ifaces[i][x] };
//               obj.push(tmp);
//             }
//           }
//         }
//       }
//       //console.log(obj);
//       console.log("Adapter: " + obj[0].adapter);
//       console.log(" IPADDRESS: " + obj[0].properties.address);
//       console.log(" netmask: " + obj[0].properties.netmask);
//       //$('.adapter').text("\mAdapter: " + obj[0].adapter +"\nIPADDRESS: " + obj[0].properties.address+ "\nnetmask: " + obj[0].properties.netmask)
//       $('.adapter').text("Adapter: " +obj[0].adapter);
//       $('.IPaddress').val(obj[0].properties.address);
//       $('.netmask').val(obj[0].properties.netmask);
//       return typeof callback === "function" ? callback(null,obj) : obj;
//     }
//
// function getHostAddress(callback) {
// 	var addresses = [];
// 	var interfaces = getHostInterfaces();
//
// 	for (var i in interfaces) {
// 		addresses.push(interfaces[i].properties.address);
// 	}
//
// 	return typeof callback === "function" ? callback(null, addresses) : addresses;
// }
//
// scanNodes(function(err, nodes) {
// 	if (err) {
// 		console.log("Error", err);
// 	}
// 	console.log(nodes);
// });
//
// $('.start').click(function(){
//   $('.loader').css('display','inline-block')
// })
