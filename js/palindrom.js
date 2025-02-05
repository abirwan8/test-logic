function palindrome (kata) {
    const kataAsli = kata.toLowerCase(); //Rubah ke huruf kecil
    const kataBalik = kataAsli.split('').reverse().join(''); //Balik kata

    return kataAsli === kataBalik; //Cek kata asli sama dengan kata balik?
}

const input = prompt("Masukkan kata:").toLowerCase();
console.log(`${input} ${palindrome(input) ? "=" : "!="} ${input.split('').reverse().join('')}`);