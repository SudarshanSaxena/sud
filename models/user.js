var mongoose = require('mongoose');

const EventUserData = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    branch: {
        type: String
    },
    dob:{
        type: String
    },
    events:{
        type: String
    },

});

const EventUserData = mongoose.model('EventData', EventUserData, 'EventData');
module.exports = EventUserData;