export enum UserVerifyStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified, // đã xác thực email
  Banned // bị khóa
}
export enum USER_ROLE {
  Admin, //0
  Staff, //1
  User //2
}

export enum TokenType {
  AccessToken, // 0
  RefreshToken, // 1
  ForgotPassordToken, // 2
  EmailVerificationToken //3
}
