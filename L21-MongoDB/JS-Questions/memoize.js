function memoize(fn) {
    let cache = {}
    return function (...args) {
        if (args.join() in cache) return cache[args.join()];
        return cache[args.join()] = fn(...args);
    }
}
