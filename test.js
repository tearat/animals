var brain = require('brain.js');
var net = new brain.NeuralNetwork();

net.train([
    {
        input: 1,
        output: [1]
    },
    {
        input: 2,
        output: [0]
    },
    {
        input: 3,
        output: [0]
    }
]);

var input = process.openStdin();

input.addListener("data", function (d) {
    console.log("you entered: " + d.toString().trim());
    var output = net.run(d); // [0.987]
    console.log(output);
});
