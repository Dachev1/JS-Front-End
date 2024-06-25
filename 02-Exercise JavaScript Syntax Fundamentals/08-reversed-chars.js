function reversedChars(chr1, chr2, chr3) {
    let text = chr1 + chr2 + chr3;
    console.log(text.split("").reverse().join(" "));
}

reversedChars('A', 'B', 'C');