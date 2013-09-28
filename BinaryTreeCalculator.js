// Calculates the number of binary trees for a given size, using dynamic programming.

var trees = function (size) {
    // One tree of size 0 and of size 1, two trees of size 2.
    var count = [1, 1];
    
    // Generate for each size less than size.
    for (var n = 2; n <= size; n++) {
        count[n] = 0;
        for (var i = 1; i <= n/2; i++) {
            count[n] += 2*count[n-i]*count[i-1];
        }
        if (n % 2 === 1) {
            count[n] += count[(n-1)/2]*count[(n-1)/2];
        }
    }
    return count;
};