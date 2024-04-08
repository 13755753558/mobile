/**
 * 获取字符串的字节长度，一个中文算两个字节
 */
export const getStrlen = (str: string) => {
  let len = 0;
  const re = /[\u4e00-\u9fa5]/;
  for (let i = 0, l = str.length; i < l; i++) {
    if (re.test(str.charAt(i))) {
      len += 2;
    } else {
      len++;
    }
  }
  return len;
};
