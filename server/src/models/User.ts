import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        displayName: {
            type: String,
            required: true
        },
        photoURL: {
            type: String,
        },
        darkTheme: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
)

const User = mongoose.model("Users", UserSchema)

export default User