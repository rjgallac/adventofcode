test = "{([(<{}[<>[]}>{[]{[(<()>";

testsyntax = test.split("");
console.log(testsyntax)

openbracket=0
openbrace=0
opensquarebracket=0
openarrow=0;
closedbracket=0
closedbrace=0
closedsquarebracket=0
closedarrow=0;

for(let i=0;i<testsyntax.length;i++){
    if(testsyntax[i] == "("){
        openbracket++;
    }
    if(testsyntax[i] == ")"){
        closedbracket++;
    }
    if(testsyntax[i] == "["){
        opensquarebracket++;
    }
    if(testsyntax[i] == "]"){
        closedsquarebracket++;
    }

    if(testsyntax[i] == "{"){
        openbrace++;
    }
    if(testsyntax[i] == "}"){
        closedbrace++;
    }
    if(testsyntax[i] == "<"){
        openarrow++;
    }
    if(testsyntax[i] == ">"){
        closedarrow++;
    }
}
