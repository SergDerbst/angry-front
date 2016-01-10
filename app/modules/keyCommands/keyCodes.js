(function () {
    'use strict';

    angular.module('app.keyCommands').factory('keyCodes', keyCodes);

    /* @ngInject */
    function keyCodes() {
        var keyCodes = {
            letter: {
                a: '65',
                b: '66',
                c: '67',
                d: '68',
                e: '69',
                f: '70',
                g: '71',
                h: '72',
                i: '73',
                j: '74',
                k: '75',
                l: '76',
                m: '77',
                n: '78',
                o: '79',
                p: '80',
                q: '81',
                r: '82',
                s: '83',
                t: '84',
                u: '85',
                v: '86',
                w: '87',
                x: '88',
                y: '89',
                z: '90'
            },
            number: {
                zero: '48',
                one: '49',
                two: '50',
                three: '51',
                four: '52',
                five: '53',
                six: '54',
                seven: '55',
                eight: '56',
                nine: '57'
            },
            numpad: {
                zero: '96',
                one: '97',
                two: '98',
                three: '99',
                four: '100',
                five: '101',
                six: '102',
                seven: '103',
                eight: '104',
                nine: '105',
                multiply: '106',
                add: '107',
                subtract: '109',
                decimal: '110',
                divide: '111'
            },
            backspace: '8',
            tab: '9',
            enter: '13',
            shift: '16',
            ctrl: '17',
            alt: '18',
            capsLock: '20',
            esc: '27',
            spacebar: '32',
            pageUp: '33',
            pageDown: '34',
            end: '35',
            home: '36',
            arrowLeft: '37',
            arrowUp: '38',
            arrowRight: '39',
            arrowDown: '40',
            insert: '45',
            delete: '46',
            numLock: '144',
            scrollLock: '145',
            pauseBreak: '19'
        };

        return keyCodes;
    }
})();
