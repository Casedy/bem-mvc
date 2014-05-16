modules.define('glue-field', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block: 'glue-field_type_checkbox', baseBlock: 'glue-field' }, {

    onSetMod: {
        js: {
            inited: function() {
                this.__base();

                this.checkbox = this.findBlockOn('checkbox');
            }
        }
    },

    init: function() {
        this.__base.apply(this, arguments);

        this.checkbox.on('change', function() {
            this.model.set(this.name, this.checkbox.getMod('checked'));
        }, this);
    },

    set: function(value) {
        this.__base();
        this.checkbox.setMod('checked', value);
    },

    onFieldChange: function(e, data) {
        this.checkbox.hasMod('focused') || this.checkbox.setMod('checked', data.value);
    }

}));

});