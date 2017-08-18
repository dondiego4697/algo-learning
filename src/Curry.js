/**
 * Created by Denis on 04.05.2017.
 */
export default class Curry {
    constructor() {

    }

    /**
     * Реализация функции curry
     */
    test() {
        function sum(a, b, c) {
            return a + b + c;
        }

        function multi(a, b, c, d) {
            return a * b * c * d;
        }

        let a = curry(sum, 'A');
        let b = curry(sum, 'B');
        function curry(f, name) {
            let currArgs = [];
            let func = function (...args) {
                args.forEach(arg => {
                    currArgs.push(arg);
                    if (currArgs.length === f.length) {
                        console.log(`RESULT of ${name}-func = ${f.apply(this, currArgs)}`);
                    }
                });
                return func;

            };
            return func;
        }

        a = a(1, 2);
        b = b(3, 4);
        a = a(5, 6);
        b = b(7);

        let c = curry(multi, 'C')(1)(2);
        c = c(2)(2);
    }


}