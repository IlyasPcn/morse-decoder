const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '     ':  ' '
};

const decode = expr => expr.split('')
    .map( (item, i, arr ) => i % 2 === 0? item = item + arr[i + 1] : item)
    .filter( item => item.length > 1)
    .map( item => item === '00' ? item = '' : item === '**' ? item = ' ' : item === '10' ? item = '.' : item === '11' ? item = '-' : item)
    .map( ( item => [item]))
    .map((item , i ,arr) => i % 5 === 0 ? item : arr[i - (i %5)].push(item))
    .map( item => item.length > 1? item.flat(): item )
    .filter( item => item.length > 1)
    .map( item => item.reduce( (acc, cur) => acc + cur))
    .map( item => item = MORSE_TABLE[item])
    .join('');

module.exports = {decode}

// я уже делал это задание на stage 0, набор декабрь 21го
