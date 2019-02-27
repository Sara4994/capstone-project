var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notesSchema = new Schema({
    noteId: String,
    noteTitle: String,
    isSentence: Boolean,
    users: [{userId: String, uname: String}],
    createdBy: String,
    labels: [{labelId: String, name: String}],
    lists: [{listId: String, isChecked: Boolean, listText: String}]
})

var LabelSchema = new Schema ({
    labelId: String,
    labelName: String
})

var notesModel = mongoose.model('Notes', notesSchema);
var LabelModel = mongoose.model('Label', LabelSchema);