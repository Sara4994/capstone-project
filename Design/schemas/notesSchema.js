var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notesSchema = new Schema({
    noteId: String,
    noteTitle: String,
    isSentence: Boolean,
    lists: [{listId: String, isChecked: Boolean, listText: String}],
    createAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
    _createdBy: [{type: mongoose.Schema.ObjectId, ref: 'User' }],
    _labels: [{type: mongoose.Schema.ObjectId, ref: 'Label'}]    
})

var LabelSchema = new Schema ({
    labelId: String,
    labelName: String,
    users: [{userId: String, uname: String}],
    createAt: {type: Date, default: Date.now()},
})



var notesModel = mongoose.model('Notes', notesSchema);
var LabelModel = mongoose.model('Label', LabelSchema);