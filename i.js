const express = require("express")
const mongoose = require("mongoose")

const app =express()

app.use(express.json())

const connectDB= () => {
    return mongoose.connect( "mongodb+srv://deepak123:<password>@cluster0.aqkfd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

//user schema

const userSchema = new mongoose.Schema(
    {
     firstName: {type: String, required: true},
     middleName: {type: String, required: false},
     lastName: {type: String, required: true},
     age: {type: Number, required: true},
     email: {type: String, required: true},
     address: {type: String, required: true},
     gender: {type: String, required: false, default: "Female"}

    },
    {
        versionKey: false,
        timestamps: true,
    }

)

// create user model
const User= mongoose.model("user", userSchema);

// *********************************************************

// BranchDetail

const branchDetailSchema = new mongoose.Schema(
    {
     firstName: {type: String, required: true},
     middleName: {type: String, required: false},
     lastName: {type: String, required: true},
     MICR: {type: Number, required: true},
     IFSC: {type: String, required: true},
     address: {type: String, required: true},
    //  gender: {type: String, required: false, default: "Female"}

    },
    {
        versionKey: false,
        timestamps: true,
    }

)

// create model
const BranchDetail= mongoose.model("branchDetail", branchDetailSchema);
// *****************************************************

//MasterAccount
const masterAccountSchema = new mongoose.Schema(
    {
        balance:  {type: Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const MasterAccount= mongoose.model("masterAccount", masterAccountSchema);

// ********************************************************
//SavingsAccount

const savingsAccountSchema = new mongoose.Schema(
    {
        account_number:  {type: Number, required: true, unique: true},
        balance:  {type: Number, required: true},
        interestRate:  {type: Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

            // ****************************************************

 // FixedAccount
 const fixedAccountSchema = new mongoose.Schema  (
     {
        account_number:  {type: Number, required: true, unique: true},
        balance:  {type: Number, required: true},
        interestRate:  {type: Number, required: true},
        startDate: {type: Number, required: true},
        maturityDate:{type: Number, required: true},
     },
     {
        versionKey: false,
        timestamps: true,
    }
 )
