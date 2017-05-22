/**
 * Created by Denis on 22.05.2017.
 */
export default class FindSubStr {

    static prefixFunction(sub, string) {
        const s = sub + '@' + string;

        const n = s.length;
        let prefixArr = new Array(n);

        prefixArr[0] = 0;
        if(s[0] === s[1])
            prefixArr[1] = 1;

        for(let i = 1; i < n; i++){
            let j = prefixArr[i-1];
            while((j>0) && (s[i] !== s[j])){
                j = prefixArr[j-1];
            }

            if(s[i] === s[j])
                j++;

            prefixArr[i] = j;
        }

        return prefixArr;
    }
}