module.exports = (mongoose) => {
    const sleepDataSchema = new mongoose.Schema(
        {
            id: { type: mongoose.Schema.Types.ObjectId },
            userID: { type: String, index: true },
            nickname: { type: String, required: true },
            sleepGoal: {type: Number, enum:[1,2,3]},
            sleepStruggle: {
                // in weeks
                min: { type: Number, enum: [0, 2, 8] },
                max: { type: Number, enum: [2, 8, -1] },
            },
            bedTime: Date,
            wakeTime: Date,
            sleepDuration: { type: Number, min: 0, max: 24 },
            // to continue with same screen from which user left
            dataCollectionStep: { type: Number, min: 1, max: 5 },
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now }
        },
        { timestamps: true },
        { collection: 'sleepData' }
    );
    return mongoose.model('sleepData', sleepDataSchema);
};