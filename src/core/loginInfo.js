import shoopeClient from '../session/shoopeClient.js';
import { loggerFailed, loggerSuccess } from '../utils/logger.js';
import terminalClear from '../utils/terminalClear.js';
const loginInfo = async () => {
  try {
    terminalClear();
    const url = 'https://shopee.co.id/api/v4/account/get_profile';
    const r = await shoopeClient.get(url);
    if (r.data.data == null) {
      loggerFailed('Invalid credentials please use get cookie again');
      return;
    }
    loggerSuccess(`Login as Username: ${r.data.data.user_profile.username}`);
  } catch (error) {
    console.log(error);
  }
};
export default loginInfo;
