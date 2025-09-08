interface Res {
  data: any;
  message: string;
}

interface PagingReq {
  keyword: string;
  page: number;
  size: number;
}

interface PagingRes<T> {
  Items: T[];
  Page: number;
  Size: number;
  TotalPages: number;
  TotalRecords: number;
}
