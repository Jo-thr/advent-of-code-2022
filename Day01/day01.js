const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
    
    const lines = data.split('\n\n').map(x => x.split('\n').map(Number).reduce((a,b) => a + b)).sort((a, b) => b-a)

    console.log("Part 1: " + lines[0])
    console.log("Part 2: " + lines.slice(0,3).reduce((a,b) => a + b))
})
