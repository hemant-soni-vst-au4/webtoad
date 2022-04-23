export interface User {
  email: string
  password: string
  fullName: string
  recoverEmailId: string
  profilePic: string
  phone: string
  provider: string
  otp: object
  status: string
  signupType: string
  dob: Date
  gender: string
  address: {
    addressLine1: string
    city: string
    state: string
    country: string
    pinCode: string
  }
  card: {
    cardNo: string
    expDate: string
    cvv: string
    ccName: string
  }
  completedLesson: number
  subscriptionLesson: number
  extraSubscriptionLesson: number
  completedSubscriptionLesson: number
  completedExtraSubscriptionLesson: number
  subscriptionStartDate: Date
  subscriptionEndDate: Date
  currentPackage: object
  trialLessonLimit: number
  isLevel: boolean
  isBlock: boolean
  userSubscriptionStartDate: Date
  userSubscriptionEndDate: Date
  totalLesson: number
}
