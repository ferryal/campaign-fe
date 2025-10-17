import type { Pagination, ResponseMetadata } from "./common.types";

export type ApiResponse<T> = {
  data: T;
  message?: string;
  metadata?: ResponseMetadata;
};

export type ApiError = {
  message: string;
  code: string;
  details?: Record<string, string[]>;
  statusCode?: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  pagination: Pagination;
  metadata?: ResponseMetadata;
};

export type ListParams = {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};
