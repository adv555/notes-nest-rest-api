export const getDateFromContent = (text: string): string[] => {
  const results = text.match(
    /[0-9]{1,2}([\-\/ \.])[0-9]{1,2}([\-\/ \.])((19)|(20))[0-9]{2}/g,
  );

  if (!results) {
    return [];
  }
  return results;
};
