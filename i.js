const express= require("express")
const mongoose= require("mongoose")

const app= express()

app.use(express.json())

const connectDB= () => {
    return mongoose.connect(
        mongodb+srv://deepak123:<password>@cluster0.aqkfd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    )
}

//user model

const userSchema = new mongoose.Schema(
    {
     firstName: { type: String, required: true, minlength: 3, maxlength:30},
     lastName: { type: String, required: false, minlength: 3, maxlength:30},
     age: {type: Number, required: true},
     email: {type: String, required: true, unique: true},

    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const user= mongoose.model("user", userSchema)


//book model
const bookSchema = new mongoose.Schema(
    {
        likes:{type: Number, default:0},
        coverImage: {type: String, required: true, default: 1}
        content: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const book= mongoose.model("book", bookSchema)

// comment model
const commentSchema = new mongoose.Schema(
    {
        body:{type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const comment= mongoose.model("comment", commentSchema)

// publication model

// - Publication Model ( Publication is the company which releases the book )
//     - name ( string, required )
//     - timestamps (string, required)

const publicationSchema = new mongoose.Schema(
    {
        name: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)