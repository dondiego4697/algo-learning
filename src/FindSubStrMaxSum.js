/**
 * Created by Denis on 03.05.2017.
 */
'use strict';
export default class FindSubStrMaxSum {
    constructor() {

    }

    get() {
        let arr = [1, 2, 3, -15, 1, 9, -4, -14, 20, -20, 30];

        let answer = arr[0];
        let sum = 0;
        let min_sum = 0;


        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            answer = Math.max(answer, sum - min_sum);
            min_sum = Math.min(min_sum, sum);
        }
        console.log(`ANSWER=${answer}`);
    }

    getWithPositions(){
        let arr = [1, 2, 3, -15, 1, 9, -4, -14, 2, -20, 5];

        let answer = arr[0];
        let sum = 0;
        let min_sum = 0;
        let min_pos = -1;
        let answer_l = 0;
        let answer_r = 0;


        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            let curr = sum - min_sum;
            if(curr > answer){
                answer = curr;
                answer_l = min_pos + 1;
                answer_r = i;
            }
            if(sum < min_sum){
                min_pos = i;
                min_sum = sum;
            }
        }
        console.log(`ANSWER=${answer} posLeft=${answer_l} posRight=${answer_r}`);
    }
}