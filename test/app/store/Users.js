Ext.define("Hello.store.Users",{
    extend: "Ext.data.Store",
    model: "Hello.model.User",
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api:{
            read: '/data/users.json',
            update: '/data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});
