Ext.define("Hello.view.user.Edit",{
    extend:     "Ext.window.Window",
    alias:      "widget.useredit",
    title:      "Edit mah User",
    layout:     "fit",
    autoShow:   true,
    initComponent: function(){
        this.items = [
            {
                xtype: "form",
                items: [
                    {
                        xtype: "textfield",
                        name: "name",
                        fieldLabel: "Name"
                    },
                    {
                        xtype: "textfield",
                        name: "email",
                        fieldLabel: "Email"
                    }
                ]
            }
        ];
        this.buttons = [
            {
                text: "Save",
                action: 'save'
            },
            {
                text: "Cancel",
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
