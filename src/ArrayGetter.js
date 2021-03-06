/**
 * Created by Denis on 10.05.2017.
 */

class ArrayGetter {
    constructor() {

    }

    /**
     * Метод, получающий единственный массив без вложенностей
     * @return {Array}
     */
    getArrayWithoutIncludesRecursive() {
        const inputArray = ['a', null, 'b', 123, [null, 5, [[1, 2, 3, 4], [1, 2, 3, [4, 5, 6, 7]], null], 'f', ['opa', 2]], ['c', 321, undefined]];
        const outputArray = [];

        function get(array) {
            array.forEach(elem => {
                if (Array.isArray(elem)) {
                    get(elem);
                } else {
                    outputArray.push(elem);
                }
            });
        }

        get(inputArray);
        console.log(outputArray);
        return outputArray;
    }
}

export default ArrayGetter;