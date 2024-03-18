const array = [1, 2, 3, 4, 5];
const [first, second, ...rest] = array;

// first = 1, second = 2, rest = [3, 4, 5,]

const array_ = [1, 2];

const [a = 10, b = 20, c = 30] = array;
