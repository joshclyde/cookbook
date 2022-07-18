export const parseDirections = (value: string) => {
  return value.split(/(\d+ minutes)/);
};

export const isParsedTimer = (value: string) => {
  return value.match(/(\d+ minutes)/) != null;
};

export const parsedTimerSeconds = (value: string) => {
  return (value.match(/\d+/) as any)[0] * 60;
};
