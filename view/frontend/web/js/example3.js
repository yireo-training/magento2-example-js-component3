console.log('[ExampleJsComponent3] JS component is loaded');

define(['uiComponent', 'ko'], function(Component, ko) {

    "use strict";

    return Component.extend({
        defaults: {
            message: ''
        },
        initialize: function () {
            console.log('[ExampleJsComponent3] JS component is initialized');
            return this._super();
        }
    });
});