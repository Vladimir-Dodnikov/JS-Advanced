function uniqueSequences(arr) {
    let uniqueSeqs = new Map(); // length - sequence
    for (let line of arr) {
        let seq = JSON.parse(line).map(Number);
        // let seq = line.split(/\s*[,[\]]\s*/g).map(Number);
        // seq = seq.slice(1, seq.length - 1); // removing first & last non-arr elements
        seq.sort((a, b) => b - a); // DESC
        let length = seq.length;
        if (!uniqueSeqs.has(length))
            uniqueSeqs.set(length, new Set());
        uniqueSeqs.get(length).add(`[${seq.join(', ')}]`);
    }
    let lengthKeys = [...uniqueSeqs.keys()].sort((a, b) => a - b); // ASC
    for (let len of lengthKeys)
        for (let seq of uniqueSeqs.get(len))
            console.log(seq);
}

uniqueSequences(
    [
        "[7.14, 7.180, 7.339, 80.099]",
        "[7.339, 80.0990, 7.140000, 7.18]",
        "[7.339, 7.180, 7.14, 80.099]"
    ]
);