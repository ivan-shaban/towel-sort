module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    return matrix.reduce((result, value, index) => {
        if (index % 2) {
            result.push(...value.reverse());
        } else {
            result.push(...value);
        }
        return result;
    }, []);
};
