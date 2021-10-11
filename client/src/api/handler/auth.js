import { api } from "../apiClient";

export const register = (formValues) =>
  api.post("/account/register", formValues);

export const login = (formValues) => api.post("/account/login", formValues);

export const logout = () => null;

export const forgotPassword = () => null;

export const changePassword = () => null;

export const resetPassword = () => null;
