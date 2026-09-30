export const StorageConnectionErrorCode = {
  STORAGE_ERROR: "STORAGE_ERROR",
};

export type StorageConnectionErrorCode =
  (typeof StorageConnectionErrorCode)[keyof typeof StorageConnectionErrorCode];
