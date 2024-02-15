document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numbersIn = document.getElementById('numbers').value;
    const numArray = numbersIn.split(',').map(num => parseInt(num.trim()));

    const primeCount = countPrimes(numArray);
    const compositeCount = countComposites(numArray);
    const neitherCount = countNeithers(numArray);

    display(primeCount, compositeCount, neitherCount);
});

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2 || num === 3) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function countPrimes(numbers) {
    return numbers.filter(num => isPrime(num)).length;
}

function countComposites(numbers) {
    return numbers.filter(num => !isPrime(num) && num > 1).length;
}

function countNeithers(numbers) {
    return numbers.filter(num => isNaN(num) || num <= 1).length;
}

function display(primeCount, compositeCount, neitherCount) {
    const resultsDiv = document.getElementById('result');
    resultsDiv.innerHTML = `
        <p>Prime Numbers: ${primeCount}</p>
        <p>Composite Numbers: ${compositeCount}</p>
        <p>Neither: ${neitherCount}</p>
    `;
}
