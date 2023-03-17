let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};
// puedo asignarle un boolean y esta bien
let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.touppercase();

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

//da error que es diferente verifica el tipo antes de usarlo y saber que ese métrodo
//se le aplica al tipo
//unknownVar.doSomething();

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

let isNew2: boolean = unknownVar;

const parse = (str: string): unknown =>{
  return JSON.parse(str)
}


