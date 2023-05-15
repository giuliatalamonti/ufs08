// The main file is my-module.js, where we simulate a module:

// var myModule = (function () {
//     // Open IIFE
//     // Imports (via global variables)
//     var importedFunc1 = otherModule1.importedFunc1
//     var importedFunc2 = otherModule2.importedFunc2

//     // Body
//     function internalFunc() {
//         console.log('internalFunc')
//     }
//     function exportedFunc() {
//         importedFunc1()
//         importedFunc2()
//         internalFunc()
//     }

//     // Exports (assigned to global variable `myModule`)
//     return {
//         exportedFunc: exportedFunc,
//     }
// })()

// Con ECMAScript 6, la sintassi per importare funzioni da altri moduli è la seguente:
import { importedFunc1 } from './other-module1.js'
import { importedFunc2 } from './other-module2.js'

function internalFunc() {
    console.log('internalFunc')
}

export function exportedFunc() {
    importedFunc1()
    importedFunc2()
    internalFunc()
}
