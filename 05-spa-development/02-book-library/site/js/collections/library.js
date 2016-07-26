/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
var app = app || {};

app.Library = Backbone.Collection.extend({
    model: app.Book,
    url: '/api/books'
});