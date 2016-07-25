/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/cover.png',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    }
});