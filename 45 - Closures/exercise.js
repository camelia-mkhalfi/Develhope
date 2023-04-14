function printName() {
    let helloName = "Hello John";
    helloName = inner(helloName);
    console.log(helloName);
}

function inner(name) {
    name = "Ciao John";
    return name;
}

printName();