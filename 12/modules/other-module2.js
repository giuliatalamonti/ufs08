function otherModule2Func() {
    console.log('otherModule2')
}

export { otherModule2Func as importedFunc2 }

// function otherModule2Func() {
//     console.log('otherModule2')
// }

// var otherModule2 = { importedFunc2: otherModule2Func }
