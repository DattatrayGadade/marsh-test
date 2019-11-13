var mongoose = require('mongoose');

var config = require('../config');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}, function(err, db) {
    if (err) {
        return console.log('Unable to connect to MongoDB.');
    }
    console.log('Successfully connected to MongoDB Database.');
});

var userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: Number, required: true},
    address: {type: String, required: true},
}); 

module.exports = mongoose.model('User', userSchema);
