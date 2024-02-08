import {Schema,model,models} from 'mongoose';

const newPrompts = new Schema({
    creator : {
        type: Schema.Types.ObjectId,
        ref: 'User', //referes to the User model we created
    },
    prompt : {
        type: String,
        required: [true,'Prompt is required']
    },
    tag : {
        type: String,
        required: [true, 'Tag is required']
    }
});

const Prompt = models.Prompt || model('Prompt',newPrompts)

export default Prompt