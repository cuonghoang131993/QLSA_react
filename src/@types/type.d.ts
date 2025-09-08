interface TypeUnit {
  Id: string;
  Name: string;
}

interface ResTypeApi extends Res {
  data?: PagingRes<TypeUnit>;
}

interface TypeState {
  loading: boolean;
  currentRequestId?: string;
  error?: string;
  types?: PagingRes<TypeUnit>,
  getTypeReq: PagingReq;
};
