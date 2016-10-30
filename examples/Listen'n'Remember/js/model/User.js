define(function() {
    var User = Backbone.Model.extend({
        url: 'user',
        defaults:
        {
            local: {
                email: '',
                password: ''
            },
            google: {
                id: '',
                token: '',
                email: '',
                name: ''
            }
        }
    });

    return User;
});