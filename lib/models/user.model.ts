import {Schema,model,models} from "mongoose";

const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    firstTime : {
        type :Boolean,
        default : true
    },
    onboarding:{
        firstName : String,
        lastName : String,
        mobileNo : String,
        company : String,
        linkedIn : String,
        mediumAccount : String,
        twitter : String,
        techStack : String,
        entrepreneurialJourney : String,
        productDescription : String
    }
},{
    timestamps : true
});

const User = models.User || model('User',UserSchema);
export default User;