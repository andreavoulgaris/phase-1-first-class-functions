function receivesAFunction(callback) {
    callback()
}

function apple() {
    console.log("apple")
}

function returnsANamedFunction() {
    return apple
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("I love food")
    }
}