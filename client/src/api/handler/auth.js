import { api } from "../apiClient";

export const register = (formValues) =>
  api.post("/account/register", formValues);

export const login = () => null;

export const logout = () => null;

export const forgotPassword = () => null;

export const changePassword = () => null;

export const resetPassword = () => null;
