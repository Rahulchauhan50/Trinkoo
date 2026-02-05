import api from "../api/axios";

// normal register (OTP)
export const startRegister = (data) => {
  return api.post("/auth/start-register", data);
};

// register with google
export const registerWithGoogle = (idToken) => {
  return api.post("/auth/register-with-google", { idToken });
};

// login with google (future use)
export const loginWithGoogle = (idToken) => {
  return api.post("/auth/login-with-google", { idToken });
};
