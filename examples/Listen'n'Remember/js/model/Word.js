define(function() {
    var Word = Backbone.Model.extend({
        url: 'words',
        defaults:
        {
            _id: guid(),
            orthography: '',
            additional: [],
            language: '',
            playbackAmount: '',
            flagToPlay: false,
            soundPath: '',
            type: '',
            lastUpdated: Date.new()
        }
    });

    return Word;
});
