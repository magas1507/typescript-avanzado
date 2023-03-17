// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

function parseStr(input: string | string[]): string | string[]  {
  if (Array.isArray(input)) {
      return input.join('');
  } else{
    return input.split('');
  }
}

//tomamos en cuenta que en typescript siempre tienes que preguntar antes de que tipo es
//porque si no da error

const rtaArray = parseStr('maga')

//rtaArray.reverse()

if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}

console.log('rtaArray','Nico =>' ,rtaArray);

const rtaStr = parseStr(['N','i','c','o'])
// rtaStr.toLowerCase();
if (typeof rtaStr  === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['N','i','c','o'] =>",rtaStr);
