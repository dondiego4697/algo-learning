/**
 * Created by Denis on 11.05.2017.
 */
'use strict';

class DataBinding {
    constructor(root) {
        this.root = root;
        this.binded = [];

        const store = {};
        const self = this;

        this.store = new Proxy(store, {
            /**
             * @param target - целевой объект
             * @param propertyName - имя свойства (cвязующее имя)
             * @param receiver - объект, к которому было применено присваивание
             */
            get(target, propertyName, receiver){
                return Reflect.get(target, propertyName, receiver); // значение свойства
            },
            /**
             * @param target - целевой объект
             * @param propertyName - имя свойства
             * @param value - новое значение для свойства
             * @param receiver - объект, к которому было применено присваивание
             * @return {boolean}
             */
            set(target, propertyName, value, receiver){
                const res = Reflect.set(target, propertyName, value, receiver);
                self.update(propertyName);
                return res;
            }
        });

        this.to = {};
        this.from = {};
    }

    addListenerTo(el, sourceName, type) {
        this.to[sourceName] = this.to[sourceName] || [];
        this.to[sourceName].push({el, type});
    }

    addListenerFrom(el, sourceName) {
        this.from[sourceName] = this.from[sourceName] || [];
        const eventHandler = function (e) {
            this.store[sourceName] = e.target.value;
        }.bind(this);
        el.addEventListener('input', eventHandler);
        this.from[sourceName].push({el, eventHandler});
    }

    update(sourceName) {
        const newValue = this.store[sourceName];
        (this.to[sourceName] || []).forEach(({el, type}) => {
            el.innerText = newValue;
        });
    }

    start() {
        this.binded = [this.root.querySelectorAll('[data-bind]')];
        this.binded[0].forEach(el => {
            const type = el.getAttribute('data-bind-type');
            const from = el.getAttribute('data-bind-source-from');
            const to = el.getAttribute('data-bind-source-to');

            if (from) {
                this.addListenerFrom(el, from);
            }
            if (to) {
                this.addListenerTo(el, to, type);
            }
        })
    }
}

new DataBinding(document.body).start();


