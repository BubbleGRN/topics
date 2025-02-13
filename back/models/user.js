import { Schema, model, ObjectId, Error } from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'
import UserRole from '../enums/UserRole.js'

const cartSchema = new Schema({
  product: {
    type: ObjectId,
    ref: 'products',
    required: [true, 'userCartProductRequired'],
  },
  quantity: {
    type: Number,
    required: [true, 'userCartQuantityRequired'],
    min: [1, 'userCartQuantityTooSmall'],
  },
})

const rentSchema = new Schema({
  product: {
    type: ObjectId,
    ref: 'products',
    required: [true, 'userRentProductRequired'],
  },
  name: {
    type: String,
    required: [true, 'userRentNameRequired'],
  },
  rentdate: {
    type: Date,
    required: [true, 'userRentDateRequired'],
  },
  returndate: {
    type: Date,
    required: [true, 'userReturnDateRequired'],
  },
  location: {
    type: String,
    required: [true, 'userRentLocationRequired'],
  },
})

const schema = new Schema(
  {
    account: {
      type: String,
      required: [true, 'userAccountRequired'],
      minlength: [4, 'userAccountTooShort'],
      maxlength: [20, 'userAccountTooLong'],
      unique: true,
      validate: {
        validator(value) {
          return validator.isAlphanumeric(value)
        },
        message: 'userAccountInvalid',
      },
    },
    password: {
      type: String,
      required: [true, 'userPasswordRequired'],
    },
    email: {
      type: String,
      required: [true, 'userEmailRequired'],
      unique: true,
      validate: {
        validator(value) {
          return validator.isEmail(value)
        },
        message: 'userEmailInvalid',
      },
    },
    tokens: {
      type: [String],
    },
    role: {
      type: Number,
      default: UserRole.USER,
    },
    rent: {
      type: [rentSchema],
    },
    cart: {
      type: [cartSchema],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

// mongoose 驗證後，存入資料庫前執行動作
schema.pre('save', function (next) {
  const user = this

  // 密碼欄位有修改再處理
  console.log('modified', user.isModified('password'))
  if (user.isModified('password')) {
    // 自己寫驗證
    if (user.password.length < 4) {
      const error = new Error.ValidationError()
      error.addError('password', new Error.ValidatorError({ message: 'userPasswordTooShort' }))
      next(error)
    } else if (user.password.length > 20) {
      const error = new Error.ValidationError()
      error.addError('password', new Error.ValidatorError({ message: 'userPasswordTooLong' }))
      next(error)
    } else {
      user.password = bcrypt.hashSync(user.password, 10)
    }
  }

  next()
})

export default model('users', schema)
