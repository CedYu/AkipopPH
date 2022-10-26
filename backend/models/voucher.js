import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema({
    code: { type: String, min: 4, required: true, unique: true },
    type: { type: String, required: true },
    value: { type: Number, default: 0 },
    freebie: { type: String, default: "none" },
    creationDate: { type: Date, default: Date.now }, // TODO - Set to only save date and not include time.
    expiry: { type: Date, required: true },
});

const Voucher = mongoose.model("Voucher", voucherSchema);

export default Voucher;