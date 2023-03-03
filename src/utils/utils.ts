const urlPattern =
  /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

export const isValidUrl = (url: string | undefined) => {
  if (!url) return false;
  return new RegExp(urlPattern).test(url);
};
