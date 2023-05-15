function otherModule1Func() {
    console.log('otherModule1')
}

export { otherModule1Func as importedFunc1 }

// function otherModule1Func() {
//     console.log('otherModule1')
// }

// var otherModule1 = { importedFunc1: otherModule1Func }
