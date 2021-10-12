import { api } from "../apiClient";

export const getMessages = (channelId, cursor) =>
  api.get(`/messages/${channelId}/${cursor ? `?cursor=${cursor}` : ""}`);

export const sendMessage = (channelId, data, onUploadProgress) =>
  api.post(`/messages/${channelId}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });

export const deleteMessage = () => null;

export const editMessage = (messageId, text) =>
  api.put(`/messages/${messageId}`, {
    text,
  });
