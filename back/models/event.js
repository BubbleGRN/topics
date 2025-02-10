import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'eventNameRequired'],
    },
    price: {
      type: Number,
      required: [true, 'eventPriceRequired'],
      min: [0, 'eventPriceTooSmall'],
    },
    date: {
      type: Date,
      required: [true, 'eventDateRequired'],
    },
    location: {
      type: String,
      required: [true, 'eventLocationRequired'],
    },
    image: {
      type: String,
      required: [true, 'eventImageRequired'],
    },
    description: {
      type: String,
      required: [true, 'eventDescriptionRequired'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

export default model('events', schema)
