var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
   first_name: { type: String, required: true, minlength: 4},
   last_name: { type: String, required: true, minlength: 4},
   email: { type: String, required: true, minlength: 6,
   unique: [true, 'This email is already registered!'],
   validate: {
     validator: function( value ) {
       return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
     },
     message: "Email failed validation, enter please valid email"
   }
 },
   password: { type: String, required: true, minlength: 4},
   blocked: { type: Date },
   Bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
})
var BikeSchema = new mongoose.Schema({
   _User: {type: Schema.Types.ObjectId, ref: 'User'},
   
   img: {type: String },
   title: {type: String },
   description: {type: String },
   price: {type: String },
   location: {type: String },
}, {timestamps: true });


mongoose.model('Bike', BikeSchema);
var Bike = mongoose.model('Bike');

mongoose.model('User', UserSchema);
var User = mongoose.model('User')
