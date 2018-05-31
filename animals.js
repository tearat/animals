var brain = require('brain.js');
var net = new brain.NeuralNetwork();

'use strict';
console.log('\x1Bc');

net.train([
    {input: {fat: 0}, output: [0.8]},   // thin
    {input: {fat: 1}, output: [0.15]},  // fat
    {input: {role: 0}, output: [0.1]},  // prey
    {input: {role: 1}, output: [0.6]},  // predator
    {input: {power: 0}, output: [0]},   // toothless
    {input: {power: 1}, output: [0.4]}, // toothy
    {input: {power: 2}, output: [0.9]}, // poison
]);

var results = [];

function test(x,y,z) {
    var result = net.run({power: x, fat: y, role: z});
    var status = ''
    if (result > 0.9) status = '(strong)';
    if (result < 0.15) status = '(weak)';
    if (x==0) x="toothless";
    if (x==1) x="toothy";
    if (x==2) x="poison";
    if (y==0) y="thin";
    if (y==1) y="fat";
    if (z==0) z="prey";
    if (z==1) z="predator";
    
    var text_result = x+" "+y+" "+z + " = ";
        
    while(text_result.length<26){
        text_result=text_result+" ";
    }
    
    results.push( text_result + Math.round( result*100 ) + " % " + status );
}

for (x=0; x<3; x++) {
    for (y=0; y<=1; y++) {
        for (z=0; z<=1; z++) {
            test(x,y,z);
        }
    }
}

for ( i=0; i<results.length; i++ ) {
    console.log(results[i]);
}