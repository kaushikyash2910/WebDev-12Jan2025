function createCounter() {
    let count = 0;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    }
}

let counter = createCounter();

counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());