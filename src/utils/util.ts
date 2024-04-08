/**
 * 热门/最新的枚举
 */
export enum HotNewEnum {
  Hot = 0,
  New = 1,
}

export enum PlatformEnum {
  Twitter = 0,
  Articles = 1,
  Newsletter = 2,
  Announcement = 3,
}

/** 地址缩写 */
export const onAddressAbbreviation = (address: string) => {
  if (!address) return;
  return (
    address.substring(0, 5) + "..." + address.substring(address.length - 4)
  );
};
