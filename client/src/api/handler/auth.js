import { api } from "../apiClient";

export const register = (formValues) =>
  api.post("/account/register", formValues);

export const login = (formValues) => api.post("/account/login", formValues);

export const logout = () => api.post("/account/logout");

export const forgotPassword = (email) =>
  api.post("/account/forgot-password", { email });

export const changePassword = () => null;

export const resetPassword = () => null;
