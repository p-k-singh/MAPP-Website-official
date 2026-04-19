import mongoose from 'mongoose';

export interface ILead extends mongoose.Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

const LeadSchema = new mongoose.Schema<ILead>({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    maxlength: [100, 'Email cannot be more than 100 characters'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number.'],
    maxlength: [20, 'Phone number cannot be more than 20 characters'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
    maxlength: [500, 'Message cannot be more than 500 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
