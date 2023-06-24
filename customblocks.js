

// Blockly.Blocks['set'] = {
//     init: function () {
//         this.appendValueInput("set")
//             .setCheck(null)
//             .appendField("मान लेना")
//             .appendField(new Blockly.FieldDropdown([["a", "A"], ["b", "B"], ["c", "C"]]), "NAME")
//             .appendField("की");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['for'] = {
//     init: function () {
//         this.appendValueInput("for_1")
//             .setCheck(null)
//             .appendField("के लिए अ");
//         this.appendValueInput("for_2")
//             .setCheck(null)
//             .appendField("अ <");
//         this.appendDummyInput()
//             .appendField("अ++");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['color_change'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("रंग पसंद करो")
//             .appendField(new Blockly.FieldDropdown([["लाल", "R"], [" हरा", "G"], [" नीला", "B"]]), "color")
//             .appendField(new Blockly.FieldDropdown([["शुरू", "ON"], ["बंद", "OFF"], ["option", "OPTIONNAME"]]), "choice");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(15);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['color_change'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("रंग पसंद करो")
//             .appendField(new Blockly.FieldDropdown([["लाल", "R"], [" हरा", "G"], [" नीला", "B"]]), "color")
//             .appendField(new Blockly.FieldDropdown([["शुरू", "ON"], ["बंद", "OFF"], ["option", "OPTIONNAME"]]), "choice");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(15);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['say'] = {
//     init: function () {
//         this.appendValueInput("say")
//             .setCheck(null)
//             .appendField("कहना");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(330);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['condtional_if_block'] = {
//     init: function () {
//         this.appendValueInput("x")
//             .setCheck(null)
//             .appendField("अगर");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
// Blockly.Blocks['else_if'] = {
//     init: function () {
//         this.appendValueInput("NAME")
//             .setCheck(null)
//             .appendField("else if");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
// Blockly.Blocks['else'] = {
//     init: function () {
//         this.appendValueInput("ELSE")
//             .setCheck(null)
//             .appendField("else");
//         this.setInputsInline(false);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
// Blockly.Blocks['for_block'] = {
//     init: function () {
//         this.appendValueInput("NAME")
//             .setCheck(null)
//             .appendField("for");
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// /* Block Function    */
// // testing



// Blockly.JavaScript['for_block'] = function (block) {
//     var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
//     // TODO: Assemble JavaScript into code variable.
//     // var code = console.log("for block invoked!");
//     return code;
// };
// Blockly.JavaScript['else'] = function (block) {
//     var value_name = Blockly.JavaScript.valueToCode(block, 'ELSE', Blockly.JavaScript.ORDER_ATOMIC);
//     // TODO: Assemble JavaScript into code variable.
//     var code = '...;\n';
//     return code;
// };
// Blockly.JavaScript['else_if'] = function (block) {
//     var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
//     // TODO: Assemble JavaScript into code variable.
//     var code = '...;\n';
//     return code;
// };
// Blockly.JavaScript['say'] = function (block) {
//     var statements_hello_ = Blockly.JavaScript.statementToCode(block, 'say!', Blockly.JavaScript.ORDER_ATOMIC);
//     // TODO: Assemble JavaScript into code variable.
//     var code = alert("HELLO THERE!");
//     return code;
// };
// Blockly.JavaScript['condtional_if_block'] = function (block) {
//     var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
//     var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
//     // TODO: Assemble JavaScript into code variable.
//     var code = '...;\n';
//     return code;
// };
// // 

// Blockly.JavaScript['set'] = function (block) {
//     var dropdown_name = block.getFieldValue('NAME');
//     var value_set = Blockly.JavaScript.valueToCode(block, 'set', Blockly.JavaScript.ORDER_ATOMIC);
//     // TODO: Assemble JavaScript into code variable.
//     var code = '...;\n';
//     return code;
// };
// Blockly.JavaScript['for'] = function (block) {
//     var value_for_1 = Blockly.JavaScript.valueToCode(block, 'for_1', Blockly.JavaScript.ORDER_ATOMIC);
//     var value_for_2 = Blockly.JavaScript.valueToCode(block, 'for_2', Blockly.JavaScript.ORDER_ATOMIC);
//     // TODO: Assemble JavaScript into code variable.
//     var code = '...;\n';
//     return code;
// };
// Blockly.JavaScript['color_change'] = function (block) {
//     var dropdown_color = block.getFieldValue('color');
//     var dropdown_choice = block.getFieldValue('choice');
//     // TODO: Assemble JavaScript into code variable.
//     var code = '...;\n';
//     return code;
// };




// MOTION BLOCKS --->
Blockly.Blocks['move_right'] = {
    init: function () {
        this.appendValueInput("movename")
            .setCheck(null)
            .appendField("खिसकाना")
            .appendField(new Blockly.FieldNumber(0, -1000, 1000), "pos");
        this.setInputsInline(false);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
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
        this.setInputsInline(false);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
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
        this.setInputsInline(false);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
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
        this.setColour(60);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// Blockly.Blocks['EdgeBounce'] = {
//     init: function () {
//         this.appendValueInput("EdgeBounce")
//             .setCheck(null)
//             .appendField("if on edge bounce");
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
Blockly.JavaScript['move_right'] = function (block) {
    var number_pos = block.getFieldValue('pos');
    // var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ADDITION);
    var ip = document.getElementById("image_style").offsetLeft + number_pos;
    var code = `document.getElementById("image_style").style.left = ${ip} + "px" ; \n`
    return code;
};
Blockly.JavaScript['move_up'] = function (block) {
    var number_pos = -block.getFieldValue('pos');
    // var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ADDITION);
    var ip = document.getElementById("image_style").offsetTop + number_pos;
    var code = `document.getElementById("image_style").style.top = ${ip} + "px" ; \n`
    return code;
};
Blockly.JavaScript['move_down'] = function (block) {
    var number_pos = block.getFieldValue('pos');
    // var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ADDITION);
    var ip = document.getElementById("image_style").offsetTop + number_pos;
    var code = `document.getElementById("image_style").style.top = ${ip} + "px" ; \n`
    return code;
};
Blockly.JavaScript['Go_To_Block'] = function (block) {
    var x = block.getFieldValue('X_cordinate');
    var y = block.getFieldValue('Y_cordinate');
    // var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `document.getElementById("image_style").style.left = ${x} + "px" ;
    document.getElementById("image_style").style.top = ${y} + "px" ;`
    return code;
};
Blockly.JavaScript['set_directionx'] = function (block) {
    var x = block.getFieldValue('x-cordinate');
    // var value_x_coordinate = Blockly.JavaScript.valueToCode(block, 'x-coordinate', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `document.getElementById("image_style").style.left = ${x} + "px"`;
    return code;
};
Blockly.JavaScript['set_directiony'] = function (block) {
    var y = block.getFieldValue('y-cordinate');
    // var value_x_coordinate = Blockly.JavaScript.valueToCode(block, 'x-coordinate', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `document.getElementById("image_style").style.top = ${y} + "px"`;
    return code;
};
Blockly.JavaScript['changey'] = function (block) {
    var y = block.getFieldValue('value');
    // var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var ip = document.getElementById("image_style").offsetTop - y;
    var code = `document.getElementById("image_style").style.top = ${ip} + "px" ; \n`
    return code;
};
Blockly.JavaScript['changex'] = function (block) {
    var x = block.getFieldValue('value');
    // var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var ip = document.getElementById("image_style").offsetLeft + x;
    var code = `document.getElementById("image_style").style.left = ${ip} + "px" ; \n`
    return code;
};
// Blockly.JavaScript['EdgeBounce'] = function (block) {
//     var value = Blockly.JavaScript.valueToCode(block, 'EdgeBounce', Blockly.JavaScript.ORDER_ATOMIC);
//     var pos = document.getElementById("image_style").offsetLeft === 592 ? 'true' : 'false';
//     var x = documnet.getElementById("image_style").offsetLeft - 50;
//     var code = `if(${pos}){
//         document.getElementById("image_style").style.left = ${x};
//         document.getElementById("image_style").style.transform= 'rotate(180deg);
//     }`
//     return code;
// };
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
    // var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    // console.log(x);
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
    // var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    // console.log(x);
    angle_rotate_anti_clockwise += x;
    var code = `document.getElementById("image_style").style.transform = 'rotate(${angle_rotate_anti_clockwise}deg)'`;
    return code;
};

// CONVERSATION BLOCKS ... 

// Blockly.Blocks['print_'] = {
//     init: function () {
//         this.appendValueInput("text_print")
//             .setCheck(null)
//             .appendField("Print  ")
//             .appendField(new Blockly.FieldLabelSerializable("Hello!"), "text_input");
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
// Blockly.JavaScript['print_'] = function (block) {
//     var value_ptr = block.getFieldValue('text_input');
//     // var value_text_print = Blockly.JavaScript.valueToCode(block, 'text_print', Blockly.JavaScript.ORDER_ATOMIC);
//     // TODO: Assemble JavaScript into code variable.
//     var code = customAlert.alert(`${ value_ptr } `, 'From k se coding !');
//     return code;
// };

// Blockly.Blocks['print'] = {
//     init: function () {
//         this.appendValueInput("ptr")
//             .setCheck(null)
//             .appendField("प्रिंट (Hello From क se Coding)");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(135);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
Blockly.Blocks['print'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("PRINT : ")
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
        c.clearRect(0, 0, 762, 660);
        c.font = "25px Arial";
        c.fillText(`${text}`, 50, 50);
        // c.lineJoin = 'round';
        c.lineWidth = '2';
        c.strokeStyle = 'black';
        c.strokeRect(20, 20, 150 + 5 * parseInt(l), 50);
        // console.log(l);
    }
    var code = `${fun()}`
    return code;

};
Blockly.Blocks['say'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("SAY ")
            .appendField(new Blockly.FieldTextInput("Hello!"), "text")
            .appendField("FOR")
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
        c.clearRect(0, 0, 762, 660);
        c.font = "25px Arial";
        c.fillText(`${text}`, 50, 50);
        // c.lineJoin = 'round';
        c.lineWidth = '2';
        c.strokeStyle = 'black';
        c.strokeRect(20, 20, 150 + 5 * parseInt(l), 50);
        // console.log(l);
        setTimeout(() => {
            c.clearRect(0, 0, 762, 660);
        }, time * 1000)
    }
    var code = `${fun()}`
    return code;
};