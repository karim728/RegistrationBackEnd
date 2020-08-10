import  mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    firstname : {type: String},
    lastname :  {type: String},
    email:      {type: String},
    password:   {type: String}
})

  export default mongoose.model('User',userSchema);