interface ProgramUnit {
  Id: string;
  Name: string;
  Rules: string;
  Structure: string;
  HealthCode: string;
  Note: string;
  ParentId: number;
  ParentType: any;
}

interface ResProgramApi extends Res {
  data?: PagingRes<ProgramUnit>;
}

interface ProgramState {
  loading: boolean;
  currentRequestId?: string;
  error?: string;
  programs?: PagingRes<ProgramUnit>,
  getProgramReq: PagingReq;
};
