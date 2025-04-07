/*
   __        __           __                
   \ \      / /__  _ __  / _| ___  _ __ ___  
    \ \ /\ / / _ \| '_ \| |_ / _ \| '__/ _ \ 
     \ V  V / (_) | | | |  _| (_) | | |  __/ 
      \_/\_/ \___/|_| |_|_|  \___/|_|  \___| 

          Alphanumerical converter ig lol
*/

class AlphanumericalConverter {
    constructor(runtime) {
        this.runtime = runtime;
        this.suffixes = [
            { suffix: "", multiplier: 1 },
            { suffix: "K", multiplier: 1e3 },
            { suffix: "M", multiplier: 1e6 },
            { suffix: "B", multiplier: 1e9 },
            { suffix: "T", multiplier: 1e12 },
            { suffix: "Qd", multiplier: 1e15 },
            { suffix: "Qn", multiplier: 1e18 },
            { suffix: "Sx", multiplier: 1e21 },
            { suffix: "Sp", multiplier: 1e24 },
            { suffix: "Oc", multiplier: 1e27 },
            { suffix: "No", multiplier: 1e30 },
            { suffix: "Dc", multiplier: 1e33 },
            { suffix: "Ud", multiplier: 1e36 },
            { suffix: "DD", multiplier: 1e39 },
            { suffix: "Td", multiplier: 1e42 },
            { suffix: "QaT", multiplier: 1e45 },
            { suffix: "QtT", multiplier: 1e48 },
            { suffix: "SxT", multiplier: 1e51 },
            { suffix: "SpT", multiplier: 1e54 },
            { suffix: "OcT", multiplier: 1e57 },
            { suffix: "NoT", multiplier: 1e60 },
            { suffix: "Vg", multiplier: 1e63 },
            { suffix: "UVg", multiplier: 1e66 },
            { suffix: "DVg", multiplier: 1e69 },
            { suffix: "TVg", multiplier: 1e72 },
            { suffix: "QaVg", multiplier: 1e75 },
            { suffix: "QtVg", multiplier: 1e78 },
            { suffix: "SxVg", multiplier: 1e81 },
            { suffix: "SpVg", multiplier: 1e84 },
            { suffix: "OcVg", multiplier: 1e87 },
            { suffix: "NoVg", multiplier: 1e90 },
            { suffix: "Tg", multiplier: 1e93 },
            { suffix: "UTg", multiplier: 1e96 },
            { suffix: "DTg", multiplier: 1e99 },
            { suffix: "TTg", multiplier: 1e102 },
            { suffix: "QaTg", multiplier: 1e105 },
            { suffix: "QtTg", multiplier: 1e108 },
            { suffix: "SxTg", multiplier: 1e111 },
            { suffix: "SpTg", multiplier: 1e114 },
            { suffix: "OcTg", multiplier: 1e117 },
            { suffix: "NoTg", multiplier: 1e120 },
            { suffix: "Qg", multiplier: 1e123 },
            { suffix: "UQg", multiplier: 1e126 },
            { suffix: "DQg", multiplier: 1e129 },
            { suffix: "TQg", multiplier: 1e132 },
            { suffix: "QaQg", multiplier: 1e135 },
            { suffix: "QtQg", multiplier: 1e138 },
            { suffix: "SxQg", multiplier: 1e141 },
            { suffix: "SpQg", multiplier: 1e144 },
            { suffix: "OQg", multiplier: 1e147 },
            { suffix: "NQg", multiplier: 1e150 }
        ];
    }

    getInfo() {
        return {
            id: 'alphanumericalConverter',
            name: 'Alphanumerical Converter',
            color1: '#4C97FF',
            color2: '#3C7BDB',
            color3: '#325EC8',
            blocks: [
                { opcode: 'shortenNumber', blockType: Scratch.BlockType.REPORTER, text: 'shorten [NUMBER]', arguments: { NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1432 } } },
                { opcode: 'expandNumber', blockType: Scratch.BlockType.REPORTER, text: 'expand [SHORT]', arguments: { SHORT: { type: Scratch.ArgumentType.STRING, defaultValue: '1.4K' } } },
                { opcode: 'isValidShort', blockType: Scratch.BlockType.BOOLEAN, text: 'is [SHORT] a valid short number?', arguments: { SHORT: { type: Scratch.ArgumentType.STRING, defaultValue: '1.4K' } } },
                { opcode: 'rawToScientific', blockType: Scratch.BlockType.REPORTER, text: 'raw [NUMBER] to scientific', arguments: { NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1432 } } },
                { opcode: 'sciToRaw', blockType: Scratch.BlockType.REPORTER, text: 'scientific [SCI] to raw', arguments: { SCI: { type: Scratch.ArgumentType.STRING, defaultValue: '1.43e3' } } },
                { opcode: 'sciToShort', blockType: Scratch.BlockType.REPORTER, text: 'convert sci [SCI] to short', arguments: { SCI: { type: Scratch.ArgumentType.STRING, defaultValue: '1.43e3' } } },
                { opcode: 'addShortNumbers', blockType: Scratch.BlockType.REPORTER, text: 'add short [SHORT1] + [SHORT2]', arguments: { SHORT1: { type: Scratch.ArgumentType.STRING, defaultValue: '1.4K' }, SHORT2: { type: Scratch.ArgumentType.STRING, defaultValue: '2.3K' } } },
                { opcode: 'subtractShortNumbers', blockType: Scratch.BlockType.REPORTER, text: 'subtract short [SHORT1] - [SHORT2]', arguments: { SHORT1: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' }, SHORT2: { type: Scratch.ArgumentType.STRING, defaultValue: '2K' } } },
                { opcode: 'multiplyShortNumbers', blockType: Scratch.BlockType.REPORTER, text: 'multiply short [SHORT1] * [SHORT2]', arguments: { SHORT1: { type: Scratch.ArgumentType.STRING, defaultValue: '1.5K' }, SHORT2: { type: Scratch.ArgumentType.STRING, defaultValue: '2K' } } },
                { opcode: 'divideShortNumbers', blockType: Scratch.BlockType.REPORTER, text: 'divide short [SHORT1] / [SHORT2]', arguments: { SHORT1: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' }, SHORT2: { type: Scratch.ArgumentType.STRING, defaultValue: '2K' } } },
                { opcode: 'greaterThanShortNumbers', blockType: Scratch.BlockType.BOOLEAN, text: '[SHORT1] > [SHORT2] ?', arguments: { SHORT1: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' }, SHORT2: { type: Scratch.ArgumentType.STRING, defaultValue: '2K' } } },
                { opcode: 'lessThanShortNumbers', blockType: Scratch.BlockType.BOOLEAN, text: '[SHORT1] < [SHORT2] ?', arguments: { SHORT1: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' }, SHORT2: { type: Scratch.ArgumentType.STRING, defaultValue: '2K' } } },
                { opcode: 'equalShortNumbers', blockType: Scratch.BlockType.BOOLEAN, text: '[SHORT1] = [SHORT2] ?', arguments: { SHORT1: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' }, SHORT2: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' } } },
                { opcode: 'notEqualShortNumbers', blockType: Scratch.BlockType.BOOLEAN, text: '[SHORT1] ≠ [SHORT2] ?', arguments: { SHORT1: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' }, SHORT2: { type: Scratch.ArgumentType.STRING, defaultValue: '2K' } } },
                { opcode: 'greaterOrEqualShortNumbers', blockType: Scratch.BlockType.BOOLEAN, text: '[SHORT1] ≥ [SHORT2] ?', arguments: { SHORT1: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' }, SHORT2: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' } } },
                { opcode: 'lessOrEqualShortNumbers', blockType: Scratch.BlockType.BOOLEAN, text: '[SHORT1] ≤ [SHORT2] ?', arguments: { SHORT1: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' }, SHORT2: { type: Scratch.ArgumentType.STRING, defaultValue: '5K' } } },
                { opcode: 'shortenNumberPrecision', blockType: Scratch.BlockType.REPORTER, text: 'shorten [NUMBER] with [DECIMALS] decimals', arguments: { NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1432 }, DECIMALS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } } },
                { opcode: 'digitCount', blockType: Scratch.BlockType.REPORTER, text: 'number of digits in [NUMBER]', arguments: { NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1432 } } },
                { opcode: 'listSuffixes', blockType: Scratch.BlockType.REPORTER, text: 'list available suffixes' }
            ]
        };
    }
    shortenNumber(args) {
        const num = Number(args.NUMBER);
        if (num < 1000) return String(num);
        let chosen = this.suffixes[0];
        for (let i = 1; i < this.suffixes.length; i++) {
            if (num >= this.suffixes[i].multiplier) { chosen = this.suffixes[i]; } else break;
        }
        const shortNum = Math.floor(num / (chosen.multiplier / 10)) / 10;
        return shortNum + chosen.suffix;
    }
    expandNumber(args) {
        let shortStr = String(args.SHORT).trim();
        const match = shortStr.match(/^([0-9]*\.?[0-9]+)([A-Za-z]+)?$/);
        if (!match) return 0;
        let value = Number(match[1]), suffix = match[2] || "", multiplier = 1;
        for (const entry of this.suffixes) {
            if (entry.suffix.toLowerCase() === suffix.toLowerCase()) { multiplier = entry.multiplier; break; }
        }
        return Math.floor(value * multiplier);
    }
    isValidShort(args) {
        let shortStr = String(args.SHORT).trim();
        const match = shortStr.match(/^([0-9]*\.?[0-9]+)([A-Za-z]*)$/);
        if (!match) return false;
        let suffix = match[2] || "";
        for (const entry of this.suffixes) {
            if (entry.suffix.toLowerCase() === suffix.toLowerCase()) return true;
        }
        return false;
    }
    sciToShort(args) {
        let sciStr = String(args.SCI).trim(), num = Number(sciStr);
        if (isNaN(num)) return "";
        return this.shortenNumber({ NUMBER: num });
    }
    listSuffixes() {
        return this.suffixes.map(s => s.suffix || "(none)").join(", ");
    }
    rawToScientific(args) {
        const num = Number(args.NUMBER);
        return num.toExponential(2);
    }
    sciToRaw(args) {
        let sciStr = String(args.SCI).trim();
        return Number(sciStr);
    }
    addShortNumbers(args) {
        const num1 = this.expandNumber({ SHORT: args.SHORT1 });
        const num2 = this.expandNumber({ SHORT: args.SHORT2 });
        const sum = num1 + num2;
        return this.shortenNumber({ NUMBER: sum });
    }
    subtractShortNumbers(args) {
        const num1 = this.expandNumber({ SHORT: args.SHORT1 });
        const num2 = this.expandNumber({ SHORT: args.SHORT2 });
        const diff = num1 - num2;
        return this.shortenNumber({ NUMBER: diff });
    }
    multiplyShortNumbers(args) {
        const num1 = this.expandNumber({ SHORT: args.SHORT1 });
        const num2 = this.expandNumber({ SHORT: args.SHORT2 });
        const prod = num1 * num2;
        return this.shortenNumber({ NUMBER: prod });
    }
    divideShortNumbers(args) {
        const num1 = this.expandNumber({ SHORT: args.SHORT1 });
        const num2 = this.expandNumber({ SHORT: args.SHORT2 });
        if (num2 === 0) return "Error";
        const quot = num1 / num2;
        return this.shortenNumber({ NUMBER: quot });
    }
    greaterThanShortNumbers(args) {
        const num1 = this.expandNumber({ SHORT: args.SHORT1 });
        const num2 = this.expandNumber({ SHORT: args.SHORT2 });
        return num1 > num2;
    }
    lessThanShortNumbers(args) {
        const num1 = this.expandNumber({ SHORT: args.SHORT1 });
        const num2 = this.expandNumber({ SHORT: args.SHORT2 });
        return num1 < num2;
    }
    equalShortNumbers(args) {
        const num1 = this.expandNumber({ SHORT: args.SHORT1 });
        const num2 = this.expandNumber({ SHORT: args.SHORT2 });
        return num1 === num2;
    }
    notEqualShortNumbers(args) {
        const num1 = this.expandNumber({ SHORT: args.SHORT1 });
        const num2 = this.expandNumber({ SHORT: args.SHORT2 });
        return num1 !== num2;
    }
    greaterOrEqualShortNumbers(args) {
        const num1 = this.expandNumber({ SHORT: args.SHORT1 });
        const num2 = this.expandNumber({ SHORT: args.SHORT2 });
        return num1 >= num2;
    }
    lessOrEqualShortNumbers(args) {
        const num1 = this.expandNumber({ SHORT: args.SHORT1 });
        const num2 = this.expandNumber({ SHORT: args.SHORT2 });
        return num1 <= num2;
    }
    shortenNumberPrecision(args) {
        const num = Number(args.NUMBER), decimals = Number(args.DECIMALS);
        if (num < 1000) return String(num);
        let chosen = this.suffixes[0];
        for (let i = 1; i < this.suffixes.length; i++) {
            if (num >= this.suffixes[i].multiplier) { chosen = this.suffixes[i]; } else break;
        }
        const factor = Math.pow(10, decimals);
        const shortNum = Math.floor(num / (chosen.multiplier / factor)) / factor;
        return shortNum + chosen.suffix;
    }
    digitCount(args) {
        const num = Math.floor(Math.abs(Number(args.NUMBER)));
        return String(num).length;
    }
}
Scratch.extensions.register(new AlphanumericalConverter());
