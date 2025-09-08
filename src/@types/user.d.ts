interface ReqLogin {
  username: string
  password: string
}
interface ResLoginApi {}

interface ResLogin extends ActionRedux {}

interface ResLogoutApi {}

interface ResCurrentUserApi extends Res {
  data: {
    userId: string;
    username: string;
    email: string;
  }
}

interface UserState {
  loading: boolean;
  currentRequestId?: string;
  error?: string;
  currentUser?: {
    userId: string;
    username: string;
    email: string;
  }
}
