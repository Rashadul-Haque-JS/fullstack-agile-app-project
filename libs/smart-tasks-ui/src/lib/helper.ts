import Cookies from 'js-cookie';

export const setCookies = (key: string, value: any) => {
  try {
    const inHour = 0.5;
    return Cookies.set(key, value, { expires: inHour });
  } catch (error) {
    console.error('Error in setting data to cookies', error);
    return null;
  }
};

export const getCookies = (key:string) => {
  try {
    return Cookies.get(key);
  } catch (error) {
    console.error('Error in getting data from cookies', error);
    return null;
  }
};

export const removeCookies = () => {
  try {
    const inHour = 0.5;
    Object.keys(Cookies.get()).forEach((cookie) => {
      const options = {
        expires: inHour,
      };
      Cookies.remove(cookie, options);
    });
    return
  } catch (error) {
    console.error('Error in getting data from cookies', error);
    return null;
  }
};
