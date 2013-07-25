modules.define('i-bem__dom', [], function(provide, DOM) {

DOM.decl({ block: 'glue-field_type_input', baseBlock: 'glue-field' }, {

    onSetMod: {
        js: {
            inited: function() {
                this.__base();
                this.input = this.findBlockOn('input');
            }
        }
    },

    init: function() {
        this.__base.apply(this, arguments);

        this.input
            .on('change', function() {
                this.model.set(this.name, this.input.val());
            }, this)
            .on('blur', function() {
                this.input.val(this.model.get(this.name, 'format'));
            }, this);
    },

    set: function(value) {
        this.__base();
        this.input.val(value);
    },

    onFieldChange: function(e, data) {
        this.input.getMod('focused') !== 'yes' && this.input.val(data.value);
    }

});

provide(DOM);

});