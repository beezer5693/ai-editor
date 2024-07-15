import { APIResponse, ServerError } from "../types/types";

export const generateResponse = <T>(options: {
  serverErrors?: ServerError | null;
  validationErrors?: Record<string, string[]> | null;
  data?: T | null;
}): APIResponse<T> => {
  return {
    serverErrors: options.serverErrors || null,
    validationErrors: options.validationErrors || null,
    data: options.data || null,
  };
};
