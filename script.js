function findTwosComplement() {
    let binary = document.getElementById("binaryInput").value.trim();
    if (!/^[01]+$/.test(binary)) {
        document.getElementById("result").innerText = "⚠ Please enter a valid binary number";
        return;
    }
    
    let n = binary.length;
    let onesComplement = "";
    
    for (let i = 0; i < n; i++) {
        onesComplement += binary[i] === '0' ? '1' : '0';
    }
    
    let twosComplement = "";
    let carry = 1;
    
    for (let i = n - 1; i >= 0; i--) {
        if (onesComplement[i] === '1' && carry === 1) {
            twosComplement = '0' + twosComplement;
        } else if (onesComplement[i] === '0' && carry === 1) {
            twosComplement = '1' + twosComplement;
            carry = 0;
        } else {
            twosComplement = onesComplement[i] + twosComplement;
        }
    }
    
    if (carry === 1) {
        twosComplement = '1' + twosComplement;
    }
    
    document.getElementById("result").innerText = `2's Complement: ${twosComplement}`;
}
