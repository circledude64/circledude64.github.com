let ili = 0n
let isq = 0n
let icb = 0n
let itr = 0n
let ifib = [0n,1n]
let ifac = 0n
let ineg = 0n
let isin = 0
let iexp = 0n
let in2 = -1n
let in3 = -1n

function factrl(n) {
    let result = 1n;
    for (let j = 2n; j <= n; j++) {
        result *= j;
    }
    return result;
}


function linear(){
	ili++
	return ili
}
function square(){
	isq++
	return isq*isq
}
function cube(){
	icb++
	return icb**3n
}
function termial(){
	itr++
	return ((itr+1n)*itr)/2n
}
function fib() {
    let next = ifib[0] + ifib[1];
    ifib[0] = ifib[1];
    ifib[1] = next;
    return next;
}
function factorial() {
    ifac++
	return factrl(ifac)
}
function neg() {
    ineg++
	return -ineg
}
function sines() {
    isin++
	return Math.sin(isin/(30/Math.PI))
}
function expo() {
    iexp++
	return iexp**iexp
}
function n22y() {
    in2++
	return 2n**in2
}
function n33() {
    in3++
	return 3n**in3
}
function rand() {
	return Math.floor(101 * Math.random())
}

function replace(id, inq){
	document.getElementById(id).innerHTML = inq;
}

document.querySelectorAll('.box1').forEach(box => {
    box.style.setProperty('--rotation', `${Math.random() * 6 - 3}deg`);
});