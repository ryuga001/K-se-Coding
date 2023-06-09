Blockly.Blocks['draw_circle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Draw Circle");
        this.appendValueInput("radius")
            .setCheck(null)
            .appendField("Radius");
        this.appendValueInput("x")
            .setCheck(null)
            .appendField("X axis");
        this.appendValueInput("y")
            .setCheck(null)
            .appendField("Y axis");
        this.setColour(150);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//Generated stub

Blockly.JavaScript['draw_circle'] = function (block) {
    var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};