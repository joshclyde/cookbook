export const parseDirections = (value: string) => {
  /*
    Addiitonal ways for me to parse.

    - One recipe has "10 more minutes".
    - seconds
    - hours
    - 8 to 10 minutes
    - 8 - 10 minutes
    - maybe do something like if I find "minutes" then see if there is a number a few words before it

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
