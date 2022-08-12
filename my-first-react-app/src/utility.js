// Get sum of numbers
export const getSum = (...nums) => {
    let result = 0;
    nums.forEach((a) => {
        result += a;
    });
    return result;
};

export const getSumOfTwoNumbers = (a, b) => a+b;
