
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