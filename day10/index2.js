test = "{([(<{}[<>[]}>{[]{[(<()>";


replaceChars();
console.log(test)

function replaceChars(){
    test = test.replace("()", ".");
    test = test.replace("<>", ".")
    test = test.replace("[]", ".");
    test = test.replace("{}", ".");
}
