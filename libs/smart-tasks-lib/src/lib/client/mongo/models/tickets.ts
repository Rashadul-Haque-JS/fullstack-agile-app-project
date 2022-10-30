import { model, Schema } from 'mongoose';

//declare user type
export interface ITickets {
  title: string;
  shortDesc: string;
  desc: string;
  created_by: string;
  assigneesId: string;
  assigneesName: string;
  finished: string;
  photo: string;
}

// define user schema
const TicketSchema: Schema = new Schema<ITickets>(
  {
    title: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, 'Name is required'],
      index: true,
    },
    shortDesc: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: [32, 'Maximum of 32 characters'],
    },
    desc: {
      type: String,
      required: [true, 'Description is required'],
      index: true,
    },

    created_by: {
      type: String,
      lowercase: true,
      required: [true, 'Asignees id is required'],
    },

    assigneesId: {
      type: String,
      lowercase: true,
      required: [true, 'Asignees id is required'],
    },
    assigneesName: {
      type: String,
      lowercase: true,
      required: [true, 'Asignees id is required'],
    },

    finished: {
      type: String,
      lowercase: true,
      enum: ['working on', 'done'],
      default: 'Working on',
    },
    photo: {
      type: String,
      required: false,
      default: 'default-ticket.png',
    },
  },
  { timestamps: true }
);

export const TicketModel =  model('Tickets', TicketSchema);
