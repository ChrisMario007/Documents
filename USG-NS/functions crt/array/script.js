function efficientSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr;
}

function sortArray() {
    const inputElement = document.getElementById('inputArray');
    const resultElement = document.getElementById('result');

    // Get input values and convert them to an array of integers
    const inputValues = inputElement.value.split(',').map(value => parseInt(value.trim(), 10));

    // Perform the efficient sort
    const sortedArray = efficientSort(inputValues);

    // Display the result
    resultElement.innerText = `Sorted Array: [${sortedArray.join(', ')}]`;
}
