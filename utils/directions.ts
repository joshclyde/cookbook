export const parseDirections = (value: string) => {
  /*
    Addiitonal ways for me to parse.

    - One recipe has "10 more minutes".
    - seconds
    - hours
    - 8 to 10 minutes

    Alternatively, just change the text of the directions to be X minutes
  */
  return value.split(/(\d+ minutes)/);
};

export const isParsedTimer = (value: string) => {
  return value.match(/(\d+ minutes)/) != null;
};

export const parsedTimerSeconds = (value: string) => {
  return (value.match(/\d+/) as any)[0] * 60;
};
