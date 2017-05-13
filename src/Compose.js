/**
 * Created by Denis on 04.05.2017.
 */
export default class Compose {
    constructor() {

    }


    //compose(sum, multi)(2,2);

    test() {
        function sum(a, b) {
            return a + b;
        }

        function pow(n){
            return Math.pow(n,2);
        }

        function multi(a, b) {
            return a * b;
        }

        function compose(...args) {
            let functions = args.reverse();
            return function (...args) {
                let result = args;

                functions.forEach(func => {
                    if(Array.isArray(result)){
                        result = func.apply(this, result);
                    } else {
                        result = func.call(this, result);
                    }
                    console.log(result);
                });
                return result;
            }
        }

        console.log(`RESULT = ${compose(pow, pow, multi)(2, 2)}`);
    }


}