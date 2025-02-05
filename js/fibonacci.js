function fibonacci(n) {
    if (n <= 0) return []; 
    if (n === 1) return [0];

    let fibSeries = [0, 1]; // Membuat 2 angka awal
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]); // Mengitung angka berikutnya
    }

    return fibSeries;
}

const input = parseInt(prompt("Masukkan jumlah angka Fibonacci:"), 10);
console.log(`fib(${input}):`, fibonacci(input).join(", "));