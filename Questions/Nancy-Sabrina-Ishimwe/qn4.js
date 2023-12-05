//4.Implement a function that searches for a specific key in an object.

function findKey(obj, key) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (prop === key) {
                return true;
            }
        }
    }
    return false;
}