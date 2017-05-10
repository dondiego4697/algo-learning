/**
 * Created by Denis on 10.05.2017.
 */
export default class WordsSort {

    static getWordsWithSameLetters() {
        const input = ['кот', 'сила', 'комп', 'ток', 'илас', 'мокп', 'ттоййк', 'фузк', 'ййкотт', 'щоф', 'зкфу'];
        const output = [];
        let buff = {};
        input.forEach(elem => {
            let key = elem.split('').sort().join('');
            if (key in buff) {
                buff[key].push(elem);
            } else {
                buff[key] = [elem];
            }
        });

        Object.values(buff).forEach(array => {
            output.push(array);
        });
        return output;
    }
}