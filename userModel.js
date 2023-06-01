module.exports = (mongoose) => {
    const UserSchema = new mongoose.Schema(
        {
            id: { type: mongoose.Schema.Types.ObjectId },
            userID: { type: String, index: true },
            firstName: { type: String, maxlength: 32 },
            lastName: { type: String, maxlength: 32 },
            emailID: { type: String, trim: true, required: true },
            password: { type: String },
            phoneCountryCode: { type: String },
            phoneNumber: { type: String },
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now },
        },
        { timestamps: true },
        { collection: 'user' }
    );
    module.exports = mongoose.model('user', UserSchema);
}