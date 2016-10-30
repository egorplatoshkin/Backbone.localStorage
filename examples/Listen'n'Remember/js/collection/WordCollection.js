define(['model/Word'], function(Word) {
    var WordsCollection = Backbone.Collection.extend({
        model: Word,
        url: 'words'
    });

    return WordsCollection;
});
