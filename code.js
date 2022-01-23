let n = 176
let range1 = ''
let range2 = ''

for (let i = 1; i <= n / 4; i++) {
    range1 = range1 + (i*2 - 1) + ',' + (n - i*2 + 2) + ','
    range2 = range2 + (n / 2 + i*2 - 1) + ',' + (n / 2 - i*2 + 2) + ','
}

console.log(`[${range1}] & [${range2}]`)
