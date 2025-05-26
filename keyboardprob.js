/*You are given a custom keyboard layout represented as a string order, which contains all 26 lowercase English letters in a unique order.

You are also given a string S that represents a word typed using this custom keyboard.

The typing starts at the beginning of the keyboard (i.e., index 0). For each character in S, find its position in the order string and calculate the distance (absolute difference in index) from the previous character's position. Sum up all these distances.

Write a function trackSpeed(order, S) that prints the total distance needed to type the string S on this custom keyboard. */



function trackSpeed(order, S) {
    //write code here
    let prev = 0;
    let sum = 0;

    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < order.length; j++) {
            if (S[i] == order[j]) {
                sum += (Math.abs(j - prev));
                prev = j;
                break;
            }
        }
    }
    console.log(sum);
}
