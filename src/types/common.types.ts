export type Status = "idle" | "loading" | "success" | "error";

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type SortOrder = "asc" | "desc";

export type SortConfig<T> = {
  field: keyof T;
  order: SortOrder;
};

export type FilterConfig = {
  [key: string]: string | number | boolean | null | undefined;
};

export type ResponseMetadata = {
  timestamp: string;
  requestId?: string;
};
