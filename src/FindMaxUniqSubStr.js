/**
 * Created by Denis on 04.05.2017.
 */
export default class FindMaxUniqSubStr {
    constructor() {

    }

    /**
     * Поиск уникальной подстроки с максимальной длиной
     */
    find() {
        let str = 'abbce';
        let lastIndex = new Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
        lastIndex.fill(0, 0, lastIndex.length);
        let curL = 0, curR = 0, maxL = 0, maxR = 0;
        for (let i = 0; i < str.length; i++) {
            if (lastIndex[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] >= curL) {
                if (curR - curL > maxR - maxL) {
                    maxL = curL;
                    maxR = curR;
                }
                curL = lastIndex[str[i].charCodeAt(0)  - 'a'.charCodeAt(0)] + 1;
            }
            curR = i;
            lastIndex[str[i].charCodeAt(0)  - 'a'.charCodeAt(0)] = i;
        }
        if (curR - curL > maxR - maxL) {
            maxL = curL;
            maxR = curR;
        }
        console.log(str.substr(maxL, maxR - maxL + 1));
    }
}