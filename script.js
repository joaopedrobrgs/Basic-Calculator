window.onload = function () {

    //1. GETTING HTML ELEMENTS

    var recentNumber = document.getElementById("recentNumber");
    var otherNumbers = document.getElementById("otherNumbers");
    var operator = document.getElementById("operator");
    var number0 = document.getElementById("zero");
    var number1 = document.getElementById("one");
    var number2 = document.getElementById("two");
    var number3 = document.getElementById("three");
    var number4 = document.getElementById("four");
    var number5 = document.getElementById("five");
    var number6 = document.getElementById("six");
    var number7 = document.getElementById("seven");
    var number8 = document.getElementById("eight");
    var number9 = document.getElementById("nine");
    var addition = document.getElementById("addition");
    var subtraction = document.getElementById("subtraction");
    var multiplication = document.getElementById("multiplication");
    var division = document.getElementById("division");
    var squareRoot = document.getElementById("squareRoot");
    var power = document.getElementById("power");
    var posOrNeg = document.getElementById("posOrNeg");
    var equal = document.getElementById("equal");
    var dot = document.getElementById("dot");
    var clean = document.getElementById("clean");
    var backSpace = document.getElementById("backSpace");

    //2. CREATING CLICK FUNCTIONS

    //ZERO FUNCTION
    number0.addEventListener("click", zeroFunction);

    function zeroFunction() {
        if (recentNumber.innerText == "NaN" || recentNumber.innerText == '0' || recentNumber.innerText == 'Infinity' || otherNumbers.innerText == "NaN") {
            recentNumber.innerText = 0;
            otherNumbers.innerText = "";
            operator.innerText = ""
        }
        else {
            recentNumber.innerText += 0;
        }
    };

    //ONE FUNCTION
    number1.addEventListener("click", oneFunction);

    function oneFunction() {
        if (recentNumber.innerText == "NaN" || recentNumber.innerText == '0' || recentNumber.innerText == 'Infinity' || otherNumbers.innerText == "NaN") {
            recentNumber.innerText = 1;
            otherNumbers.innerText = "";
            operator.innerText = ""
        }
        else {
            recentNumber.innerText += 1;
        }
    };

    //TWO FUNCTION
    number2.addEventListener("click", twoFunction);

    function twoFunction() {
        if (recentNumber.innerText == "NaN" || recentNumber.innerText == '0' || recentNumber.innerText == 'Infinity' || otherNumbers.innerText == "NaN") {
            recentNumber.innerText = 2;
            otherNumbers.innerText = "";
            operator.innerText = ""
        }
        else {
            recentNumber.innerText += 2;
        }
    };

    //THREE FUNCTION
    number3.addEventListener("click", threeFunction);

    function threeFunction() {
        if (recentNumber.innerText == "NaN" || recentNumber.innerText == '0' || recentNumber.innerText == 'Infinity' || otherNumbers.innerText == "NaN") {
            recentNumber.innerText = 3;
            otherNumbers.innerText = "";
            operator.innerText = ""
        }
        else {
            recentNumber.innerText += 3;
        }
    };

    //FOUR FUNCTION
    number4.addEventListener("click", fourFunction);

    function fourFunction() {
        if (recentNumber.innerText == "NaN" || recentNumber.innerText == '0' || recentNumber.innerText == 'Infinity' || otherNumbers.innerText == "NaN") {
            recentNumber.innerText = 4;
            otherNumbers.innerText = "";
            operator.innerText = ""
        }
        else {
            recentNumber.innerText += 4;
        }
    };

    //FIVE FUNCTION
    number5.addEventListener("click", fiveFunction);

    function fiveFunction() {
        if (recentNumber.innerText == "NaN" || recentNumber.innerText == '0' || recentNumber.innerText == 'Infinity' || otherNumbers.innerText == "NaN") {
            recentNumber.innerText = 5;
            otherNumbers.innerText = "";
            operator.innerText = ""
        }
        else {
            recentNumber.innerText += 5;
        }
    };

    //SIX FUNCTION
    number6.addEventListener("click", sixFunction);

    function sixFunction() {
        if (recentNumber.innerText == "NaN" || recentNumber.innerText == '0' || recentNumber.innerText == 'Infinity' || otherNumbers.innerText == "NaN") {
            recentNumber.innerText = 6;
            otherNumbers.innerText = "";
            operator.innerText = ""
        }
        else {
            recentNumber.innerText += 6;
        }
    };

    //SEVEN FUNCTION
    number7.addEventListener("click", sevenFunction);

    function sevenFunction() {
        if (recentNumber.innerText == "NaN" || recentNumber.innerText == '0' || recentNumber.innerText == 'Infinity' || otherNumbers.innerText == "NaN") {
            recentNumber.innerText = 7;
            otherNumbers.innerText = "";
            operator.innerText = ""
        }
        else {
            recentNumber.innerText += 7;
        }
    };

    //EIGHT FUNCTION
    number8.addEventListener("click", eightFunction);

    function eightFunction() {
        if (recentNumber.innerText == "NaN" || recentNumber.innerText == '0' || recentNumber.innerText == 'Infinity' || otherNumbers.innerText == "NaN") {
            recentNumber.innerText = 8;
            otherNumbers.innerText = "";
            operator.innerText = ""
        }
        else {
            recentNumber.innerText += 8;
        }
    };
    //NINE FUNCTION
    number9.addEventListener("click", nineFunction);

    function nineFunction() {
        if (recentNumber.innerText == "NaN" || recentNumber.innerText == '0' || recentNumber.innerText == 'Infinity' || otherNumbers.innerText == "NaN") {
            recentNumber.innerText = 9;
            otherNumbers.innerText = "";
            operator.innerText = ""
        }
        else {
            recentNumber.innerText += 9;
        }
    };

    //ADDITION FUNCTION
    addition.addEventListener("click", additionFunction)
    function additionFunction() {
        if (recentNumber.innerText && otherNumbers.innerText) {
            return
        } else if (recentNumber.innerText) {
            otherNumbers.innerText += recentNumber.innerText;
            recentNumber.innerText = " ";
            operator.innerText = "+"
        }
    }

    //SUBTRACTION FUNCTION
    subtraction.addEventListener("click", subtractionFunction)
    function subtractionFunction() {
        if (recentNumber.innerText && otherNumbers.innerText) {
            return
        } else if (recentNumber.innerText) {
            otherNumbers.innerText += recentNumber.innerText;
            recentNumber.innerText = " ";
            operator.innerText = "-"
        }
    }

    //MULTIPLICATION FUNCTION
    multiplication.addEventListener("click", multiplicationFunction)
    function multiplicationFunction() {
        if (recentNumber.innerText && otherNumbers.innerText) {
            return
        } else if (recentNumber.innerText) {
            otherNumbers.innerText += recentNumber.innerText;
            recentNumber.innerText = " ";
            operator.innerText = "*"
        }
    }

    //DIVISION FUNCTION
    division.addEventListener("click", divisionFunction)
    function divisionFunction() {
        if (recentNumber.innerText && otherNumbers.innerText) {
            return
        } else if (recentNumber.innerText) {
            otherNumbers.innerText += recentNumber.innerText;
            recentNumber.innerText = " ";
            operator.innerText = "/"
        }
    }

    //SQUARE ROOT FUNCTION
    squareRoot.addEventListener("click", squareRootFunction);
    function squareRootFunction() {
        if (recentNumber.innerText && otherNumbers.innerText) {
            return
        } else if (recentNumber.innerText) {
            if (otherNumbers.innerText == "" || otherNumbers.innerText == " ") {
                otherNumbers.innerText = ""
                recentNumber.innerText = Math.sqrt(parseFloat(recentNumber.innerText));;
                operator.innerText = ""
            }
            else {
                otherNumbers.innerText = ""
                recentNumber.innerText = "NaN";
                operator.innerText = ""
            }
        }
    }

    //POWER FUNCTION
    power.addEventListener("click", powerFunction)
    function powerFunction() {
        if (recentNumber.innerText && otherNumbers.innerText) {
            return
        } else if (recentNumber.innerText) {
            otherNumbers.innerText += recentNumber.innerText;
            recentNumber.innerText = " ";
            operator.innerText = "pow"
        }
    }

    //POS-NEG FUNCTION
    posOrNeg.addEventListener("click", posOrNegFunction);
    function posOrNegFunction() {
        if (recentNumber.innerText) {
            recentNumber.innerText = parseFloat(recentNumber.innerText) * -1;
        }
    }

    //DOT FUNCTION
    dot.addEventListener("click", dotFunction);
    function dotFunction() {
        recentNumber.innerText += ".";
    };

    //CLEAN FUNCTION
    clean.addEventListener("click", cleanFunction);
    function cleanFunction() {
        otherNumbers.innerText = " ";
        recentNumber.innerText = " ";
        operator.innerText = " ";
    };

    //BACKSPACE FUNCTION
    backSpace.addEventListener("click", backSpaceFunction);
    function backSpaceFunction() {
        recentNumber.innerText = " ";
    }

    //EQUAL FUNCTION
    equal.addEventListener("click", equalFunction)
    function equalFunction() {
        if (otherNumbers.innerText) {
            if (operator.innerText == "+") {
                recentNumber.innerText = parseFloat(otherNumbers.innerText) + parseFloat(recentNumber.innerText);
            }
            if (operator.innerText == "-") {
                recentNumber.innerText = parseFloat(otherNumbers.innerText) - parseFloat(recentNumber.innerText);
            }
            if (operator.innerText == "*") {
                recentNumber.innerText = parseFloat(otherNumbers.innerText) * parseFloat(recentNumber.innerText);
            }
            if (operator.innerText == "/") {
                recentNumber.innerText = parseFloat(otherNumbers.innerText) / parseFloat(recentNumber.innerText);
            }
            if (operator.innerText == "pow") {
                recentNumber.innerText = Math.pow(parseFloat(otherNumbers.innerText), parseFloat(recentNumber.innerText));
            }
        }
        otherNumbers.innerText = " ";
        operator.innerText = " ";
    }

    //3. CREATING KEY FUNCTIONS

    document.addEventListener("keydown", keyPush);

    function keyPush(event) {

        var keyPressed = event.key;
        var keyCodePressed = event.keyCode;

        if (keyPressed == 0) {
            zeroFunction();
        }

        if (keyPressed == 1) {
            oneFunction();
        }

        if (keyPressed == 2) {
            twoFunction();
        }

        if (keyPressed == 3) {
            threeFunction();
        }

        if (keyPressed == 4) {
            fourFunction();
        }

        if (keyPressed == 5) {
            fiveFunction();
        }

        if (keyPressed == 6) {
            sixFunction();
        }

        if (keyPressed == 7) {
            sevenFunction();
        }

        if (keyPressed == 8) {
            eightFunction();
        }

        if (keyPressed == 9) {
            nineFunction();
        }

        if (keyPressed == "+") {
            additionFunction();
        }

        if (keyPressed == "-") {
            subtractionFunction()
        }

        if (keyPressed == "*") {
            multiplicationFunction();
        }

        if (keyPressed == "/") {
            divisionFunction();
        }

        if (keyPressed == "c" || keyPressed == "C") {
            cleanFunction();
        }

        if (keyCodePressed == 8) {
            backSpaceFunction();
        }

        if (keyPressed == ".") {
            dotFunction();
        }

        if (keyPressed == "=") {
            equalFunction();
        }
    }

}