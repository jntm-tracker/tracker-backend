import * as dayjs from 'dayjs';

export const getCurrentTime = (format = 'YYYY-MM-DD HH:mm:ss') => {
  const now = new Date();
  return dayjs(now).format(format);
};
