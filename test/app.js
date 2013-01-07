Ext.application({
    name: "Hello",
    requires: ['Ext.container.Viewport'],
    appFolder: "/test/app",
    launch:
        function() {
            Ext.create("Ext.container.Viewport", {
                layout: "fit",
                items:
                    {
                        xtype: 'userlist',
                    }

            });
        },
    controllers: [
        'Users'
    ]
});

