
// MOTION BLOCKS --->
Blockly.Blocks['move_right'] = {
    init: function () {
        this.appendValueInput("movename")
            .setCheck(null)
            .appendField("खिसकाना")
            .appendField(new Blockly.FieldNumber(0, -1000, 1000), "pos");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['move_up'] = {
    init: function () {
        this.appendValueInput("moveupname")
            .setCheck(null)
            .appendField("ऊपर ले जाएँ")
            .appendField(new Blockly.FieldNumber(0, -1000, 1000), "pos");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['move_down'] = {
    init: function () {
        this.appendValueInput("movedownname")
            .setCheck(null)
            .appendField("नीचे ले जाएँ")
            .appendField(new Blockly.FieldNumber(0, -1000, 1000), "pos");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['Go_To_Block'] = {
    init: function () {
        this.appendValueInput("Go_To_Block")
            .setCheck(null)
            .appendField("के लिए जाओ X:")
            .appendField(new Blockly.FieldNumber(0), "X_cordinate")
            .appendField("Y:")
            .appendField(new Blockly.FieldNumber(0), "Y_cordinate");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['set_directionx'] = {
    init: function () {
        this.appendValueInput("set_directionx")
            .setCheck(null)
            .appendField("X निर्देशांक सेट करें :")
            .appendField(new Blockly.FieldNumber(0), "x-cordinate");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['set_directiony'] = {
    init: function () {
        this.appendValueInput("set_directiony")
            .setCheck(null)
            .appendField("Y निर्देशांक सेट करें :")
            .appendField(new Blockly.FieldNumber(0), "y-cordinate");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['changey'] = {
    init: function () {
        this.appendValueInput("changey")
            .setCheck("Number")
            .appendField("Y द्वारा बदलें")
            .appendField(new Blockly.FieldNumber(10), "value");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['changex'] = {
    init: function () {
        this.appendValueInput("changex")
            .setCheck("Number")
            .appendField("X द्वारा बदलें")
            .appendField(new Blockly.FieldNumber(10), "value");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['move_right'] = function (block) {
    var number_pos = block.getFieldValue('pos');
    var ip = document.getElementById("image_style").offsetLeft + number_pos;
    var code = `document.getElementById("image_style").style.left = ${ip} + "px" ; \n`
    return code;
};
Blockly.JavaScript['move_up'] = function (block) {
    var number_pos = -block.getFieldValue('pos');
    var ip = document.getElementById("image_style").offsetTop + number_pos;
    var code = `document.getElementById("image_style").style.top = ${ip} + "px" ; \n`
    return code;
};
Blockly.JavaScript['move_down'] = function (block) {
    var number_pos = block.getFieldValue('pos');
    var ip = document.getElementById("image_style").offsetTop + number_pos;
    var code = `document.getElementById("image_style").style.top = ${ip} + "px" ; \n`
    return code;
};
Blockly.JavaScript['Go_To_Block'] = function (block) {
    var x = block.getFieldValue('X_cordinate');
    var y = block.getFieldValue('Y_cordinate');
    var code = `document.getElementById("image_style").style.left = ${x} + "px" ;
    document.getElementById("image_style").style.top = ${y} + "px" ;`
    return code;
};
Blockly.JavaScript['set_directionx'] = function (block) {
    var x = block.getFieldValue('x-cordinate');
    var code = `document.getElementById("image_style").style.left = ${x} + "px"`;
    return code;
};
Blockly.JavaScript['set_directiony'] = function (block) {
    var y = block.getFieldValue('y-cordinate');
    var code = `document.getElementById("image_style").style.top = ${y} + "px"`;
    return code;
};
Blockly.JavaScript['changey'] = function (block) {
    var y = block.getFieldValue('value');
    var ip = document.getElementById("image_style").offsetTop - y;
    var code = `document.getElementById("image_style").style.top = ${ip} + "px" ; \n`
    return code;
};
Blockly.JavaScript['changex'] = function (block) {
    var x = block.getFieldValue('value');
    var ip = document.getElementById("image_style").offsetLeft + x;
    var code = `document.getElementById("image_style").style.left = ${ip} + "px" ; \n`
    return code;
};

// ROTATATION BLOCKS -->
Blockly.Blocks['_rotate_clockwise'] = {
    init: function () {
        this.appendValueInput("angle_name")
            .setCheck(null)
            .appendField("घड़ी की सुई की दिशा में घुमाओ")
            .appendField(new Blockly.FieldAngle(90), "angle_input");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
let angle_rotate_clockwise = 0;
Blockly.JavaScript['_rotate_clockwise'] = function (block) {
    var x = block.getFieldValue('angle_input');
    angle_rotate_clockwise += x;
    var code = `document.getElementById("image_style").style.transform= 'rotate(${angle_rotate_clockwise}deg)'`;
    return code;
};

Blockly.Blocks['_rotate_anti_clockwise'] = {
    init: function () {
        this.appendValueInput("angle_name")
            .setCheck(null)
            .appendField("घड़ी की सुई की दिशा के विरुद्ध में घुमाओ")
            .appendField(new Blockly.FieldAngle(90), "angle_input");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['flip'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("पलटना")
            .appendField(new Blockly.FieldDropdown([["समस्तरीय", "left-right-option"], ["सीधा", "allround-option"], ["घूमो मत", "dontrotate-option"]]), "option");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['flip'] = function (block) {
    document.getElementById("image_style").classList.remove("flip");

    var option = block.getFieldValue('option');

    var code1 = `document.getElementById("image_style").classList.add("flip");`
    var code2 = `document.getElementById("image_style").style.transform = "rotate(180deg)";`
    var code3 = `document.getElementById("image_style").style.transform = "rotate(0deg)";`

    if (option === "left-right-option") {
        return code1;
    } else if (option === "allround-option") {
        return code2;
    } else {
        return code3;
    }
};

let angle_rotate_anti_clockwise = 0;
Blockly.JavaScript['_rotate_anti_clockwise'] = function (block) {
    var x = -block.getFieldValue('angle_input');
    angle_rotate_anti_clockwise += x;
    var code = `document.getElementById("image_style").style.transform = 'rotate(${angle_rotate_anti_clockwise}deg)'`;
    return code;
};

// CONVERSATION BLOCKS ... 
function Rectangle(x, y, l, w) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.w = w;
    this.draw = () => {
        let canvas = document.getElementById("mycanva");
        const c = canvas.getContext("2d");
        c.lineWidth = '2';
        c.strokeStyle = 'black';
        c.strokeRect(x, y, l, w);
    }
}
function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.draw = () => {
        let canvas = document.getElementById("mycanva");
        const c = canvas.getContext("2d");
        c.beginPath();
        c.arc(x, y, r, 0, 2 * Math.PI);
        c.stroke();
    }
}
function ClearCanva() {
    let canvas = document.getElementById("mycanva");
    const c = canvas.getContext("2d");
    c.clearRect(0, 0, 762, 660);
}
Blockly.Blocks['print'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("प्रिंट  ")
            .appendField(new Blockly.FieldTextInput("Hello!"), "text");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['print'] = function (block) {


    // TODO: Assemble JavaScript into code variable.
    const fun = () => {
        var text = block.getFieldValue('text');
        let l = `${text.length}`
        let canvas = document.getElementById("mycanva");
        const c = canvas.getContext("2d");
        let x = document.getElementById("image_style").offsetLeft;
        let y = document.getElementById("image_style").offsetTop;
        // console.log(x);
        c.clearRect(0, 0, 762, 660);
        c.font = "25px Arial";
        c.fillText(`${text}`, x + 220, y - 50);
        // c.lineWidth = '2';
        // c.strokeStyle = 'black';
        // c.strokeRect(x + 120, y - 80, 150 + 5 * parseInt(l), 50);
        var rec = new Rectangle(x + 200, y - 80, 150 + 5 * parseInt(l), 50);
        rec.draw();
        var rec2 = new Circle(x + 180, y - 10, 5);
        rec2.draw();
        var rec3 = new Circle(x + 160, y - 5, 2.5);
        rec3.draw();
    }
    var code = `${fun()}`
    return code;

};
Blockly.Blocks['say'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("कहें ")
            .appendField(new Blockly.FieldTextInput("Hello!"), "text")
            .appendField("के लिए")
            .appendField(new Blockly.FieldNumber(0), "time")
            .appendField("sec");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['say'] = function (block) {
    // var text = block.getFieldValue('text');
    const fun = () => {
        var text = block.getFieldValue('text');
        var time = block.getFieldValue('time');
        let l = `${text.length}`
        let canvas = document.getElementById("mycanva");
        const c = canvas.getContext("2d");
        let x = document.getElementById("image_style").offsetLeft;
        let y = document.getElementById("image_style").offsetTop;
        // console.log(x);
        c.clearRect(0, 0, 762, 660);
        c.font = "25px Arial";
        c.fillText(`${text}`, x + 220, y - 50);
        // c.lineWidth = '2';
        // c.strokeStyle = 'black';
        // c.strokeRect(x + 120, y - 80, 150 + 5 * parseInt(l), 50);
        var rec = new Rectangle(x + 200, y - 80, 150 + 5 * parseInt(l), 50);
        rec.draw();
        var rec2 = new Circle(x + 180, y - 10, 5);
        rec2.draw();
        var rec3 = new Circle(x + 160, y - 5, 2.5);
        rec3.draw();
        setTimeout(() => {
            c.clearRect(0, 0, 762, 660);
        }, time * 1000)
    }
    var code = `${fun()}`
    return code;
};
Blockly.Blocks['think'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("सोचो")
            .appendField(new Blockly.FieldTextInput("Hmm"), "text");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['think'] = function (block) {


    // TODO: Assemble JavaScript into code variable.
    const fun = () => {
        var text = block.getFieldValue('text');
        let l = `${text.length}`
        let canvas = document.getElementById("mycanva");
        const c = canvas.getContext("2d");
        let x = document.getElementById("image_style").offsetLeft;
        let y = document.getElementById("image_style").offsetTop;
        // console.log(x);
        c.clearRect(0, 0, 762, 660);
        c.font = "25px Arial";
        c.fillText(`${text}`, x + 220, y - 50);
        // c.lineWidth = '2';
        // c.strokeStyle = 'black';
        // c.strokeRect(x + 120, y - 80, 150 + 5 * parseInt(l), 50);
        var rec = new Rectangle(x + 200, y - 80, 150 + 5 * parseInt(l), 50);
        rec.draw();
        var rec2 = new Circle(x + 180, y - 10, 5);
        rec2.draw();
        var rec3 = new Circle(x + 160, y - 5, 2.5);
        rec3.draw();
    }
    var code = `${fun()}`
    return code;

};
Blockly.Blocks['thinkaloud'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("सोचो ")
            .appendField(new Blockly.FieldTextInput("Hmm"), "text")
            .appendField("के लिए")
            .appendField(new Blockly.FieldNumber(0), "time")
            .appendField("sec");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['thinkaloud'] = function (block) {
    // var text = block.getFieldValue('text');
    const fun = () => {
        var text = block.getFieldValue('text');
        var time = block.getFieldValue('time');
        let l = `${text.length}`
        let canvas = document.getElementById("mycanva");
        const c = canvas.getContext("2d");
        let x = document.getElementById("image_style").offsetLeft;
        let y = document.getElementById("image_style").offsetTop;

        c.clearRect(0, 0, 762, 660);
        c.font = "25px Arial";
        c.fillText(`${text}`, x + 220, y - 50);
        // c.lineWidth = '2';
        // c.strokeStyle = 'black';
        // c.strokeRect(x + 120, y - 80, 150 + 5 * parseInt(l), 50);
        var rec = new Rectangle(x + 200, y - 80, 150 + 5 * parseInt(l), 50);
        rec.draw();
        var rec2 = new Circle(x + 180, y - 10, 5);
        rec2.draw();
        var rec3 = new Circle(x + 160, y - 5, 2.5);
        rec3.draw();
        setTimeout(() => {
            c.clearRect(0, 0, 762, 660);
        }, time * 1000)
    }
    var code = `${fun()}`
    return code;
};


// LOGICAL BLOCKS 
Blockly.Blocks['if_else'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("अगर")
            .appendField(new Blockly.FieldTextInput("x"), "x")
            .appendField("  > ")
            .appendField(new Blockly.FieldTextInput("y"), "y")
            .appendField("तब");
        this.appendStatementInput("st")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("अन्यथा");
        this.appendStatementInput("st2")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['if_else'] = function (block) {
    ClearCanva();
    var x = block.getFieldValue('x');
    var y = block.getFieldValue('y');
    var st = Blockly.JavaScript.statementToCode(block, 'st');
    var st2 = Blockly.JavaScript.statementToCode(block, 'st2');
    if (x > y) {
        return st;
    }
    else return st2;
};
Blockly.Blocks['if'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("अगर")
            .appendField(new Blockly.FieldTextInput("x"), "x")
            .appendField("  > ")
            .appendField(new Blockly.FieldTextInput("y"), "y")
            .appendField("तब");
        this.appendStatementInput("st")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['if'] = function (block) {
    ClearCanva();
    var x = block.getFieldValue('x');
    var y = block.getFieldValue('y');
    var st = Blockly.JavaScript.statementToCode(block, 'st');
    if (x > y) {
        return st;
    }
    else return " ";
};

Blockly.Blocks['IF'] = {
    init: function () {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("if");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("else");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['IF'] = function (block, generator) {
    var st = generator.statementToCode(block, 'st');
    var st2 = generator.statementToCode(block, 'st2');
    console.log(st);
    console.log(st2);
    if (st == 'true') {
        return st2;
    } else {
        return '';
    }
};

Blockly.Blocks['repeat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("repeat")
            .appendField(new Blockly.FieldTextInput("5"), "i");
        this.appendStatementInput("st")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['repeat'] = function (block) {
    var i = block.getFieldValue('i');
    var st = Blockly.JavaScript.statementToCode(block, 'st');
    return st;
};


// operators 
Blockly.Blocks['greater_than'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("1"), "a")
            .appendField(" > ")
            .appendField(new Blockly.FieldTextInput("0"), "b");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['greater_than'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');
    var code1 = true;
    var code2 = false;
    if (a > b) {
        return code1;
    } else {
        return code2;
    }
};
Blockly.Blocks['lesser_than'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("1"), "a")
            .appendField(" < ")
            .appendField(new Blockly.FieldTextInput("0"), "b");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['lesser_than'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');
    var code1 = true;
    var code2 = false;
    if (a < b) {
        return code2;
    } else {
        return code1;
    }
};
Blockly.Blocks['equals_to'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("1"), "a")
            .appendField(" = ")
            .appendField(new Blockly.FieldTextInput("0"), "b");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['equals_to'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');
    var code1 = true;
    var code2 = false;
    if (a == b) {
        return code1;
    } else {
        return code2;
    }
};
Blockly.Blocks['add'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "a")
            .appendField("+")
            .appendField(new Blockly.FieldNumber(0), "b");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['add'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');
    var code = a + b;
    console.log(code);
    return code;
};
Blockly.Blocks['sub'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "a")
            .appendField("-")
            .appendField(new Blockly.FieldNumber(0), "b");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['sub'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');
    var code = a - b;
    console.log(code);
    return code;
};
Blockly.Blocks['mul'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "a")
            .appendField("*")
            .appendField(new Blockly.FieldNumber(0), "b");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['mul'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');
    var code = a * b;
    console.log(code);
    return code;
};
Blockly.Blocks['div'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "a")
            .appendField("/")
            .appendField(new Blockly.FieldNumber(0), "b");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['div'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');
    if (b == 0) {
        return 0;
    }
    var code = a / b;
    console.log(code);
    return code;
};
Blockly.Blocks['And'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "a")
            .appendField("and")
            .appendField(new Blockly.FieldNumber(0), "b");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['And'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');

    var code = (a & b);
    console.log(code);
    return code;
};
Blockly.Blocks['Or'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "a")
            .appendField("or")
            .appendField(new Blockly.FieldNumber(0), "b");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['Or'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');

    var code = (a | b);
    console.log(code);
    return code;
};
Blockly.Blocks['Not'] = {
    init: function () {
        this.appendStatementInput("st")
            .setCheck(null)
            .appendField("not");
        this.setColour(123);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['Not'] = function (block, generator) {
    var st = generator.statementToCode(block, 'st');
    var code1 = true;
    var code2 = false;
    if (st == true) return code2;
    else return code1;
};
Blockly.Blocks['join'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("join")
            .appendField(new Blockly.FieldTextInput("apple"), "a")
            .appendField(new Blockly.FieldTextInput("banana"), "b");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}
javascript.javascriptGenerator.forBlock['join'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');
    var code = alert(a + b);
    return code;
};
Blockly.Blocks['contains'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("apple"), "a")
            .appendField("contains")
            .appendField(new Blockly.FieldTextInput("a"), "b");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}
javascript.javascriptGenerator.forBlock['contains'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var b = block.getFieldValue('b');
    var res = false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b) {
            res = true;
            break;
        }
    }
    var code = alert(res);
    return code;
};
Blockly.Blocks['Length'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("length of ")
            .appendField(new Blockly.FieldTextInput("apple"), "a")
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}
javascript.javascriptGenerator.forBlock['Length'] = function (block, generator) {
    var a = block.getFieldValue('a');
    var code = alert(a.length);
    return code;
};
Blockly.Blocks['letter'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("letter")
            .appendField(new Blockly.FieldNumber(1), "x")
            .appendField("of")
            .appendField(new Blockly.FieldTextInput("apple"), "a");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['letter'] = function (block, generator) {
    var x = block.getFieldValue('x');
    var a = block.getFieldValue('a');
    if (x > a.length || x < 1) return alert('invalid input');
    var code = alert(a[x - 1]);
    return code;
};
Blockly.Blocks['Vb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["abs", "abs"], ["floor", "floor"], ["ceiling", "ceiling"], ["sqrt", "sqrt"], ["sin", "sin"], ["cos", "cos"], ["tan", "tan"], ["asin", "asin"], ["acos", "acos"], ["atan", "atan"], ["ln", "ln"], ["log", "log"], ["e^", "expo"], ["10^", "pow"]]), "fun")
            .appendField("of")
            .appendField(new Blockly.FieldNumber(0), "x");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
javascript.javascriptGenerator.forBlock['Vb'] = function (block, generator) {
    var fun = block.getFieldValue('fun');
    var x = block.getFieldValue('x');
    if (fun == 'abs') {
        return alert(Math.abs(x));
    }
    if (fun == 'floor') {
        return alert(Math.floor(x));
    }
    if (fun == 'ceiling') {
        return alert(Math.ceil(x));
    }
    if (fun == 'sqrt') {
        return alert(Math.sqrt(x));
    }
    if (fun == 'sin') {
        return alert(Math.sin(x));
    }
    if (fun == 'cos') {
        return alert(Math.cos(x));
    }
    if (fun == 'tan') {
        return alert(Math.tan(x));
    }
    if (fun == 'asin') {
        return alert(Math.asin(x));
    }
    if (fun == 'acos') {
        return alert(Math.acos(x));
    }
    if (fun == 'atan') {
        return alert(Math.atan(x));
    }
    if (fun == 'ln') {
        return alert(Math.ln(x));
    }
    if (fun == 'log') {
        return alert(Math.log(x));
    }
    if (fun == 'expo') {
        return alert(Math.exp(x));
    }
    if (fun == 'pow') {
        return alert(Math.pow(10, x));
    }
};