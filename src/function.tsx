export function shuffleString(string1: string, string2: string) {
  const str = string1.concat(string2).split("");

  for (let i = str.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [str[i], str[j]] = [str[j], str[i]];
  }

  return str.join("");
}

export function revertString(str: string) {
  if (!str) {
    return str;
  }
  else {
    return str.charAt(str.length - 1) + revertString(str.substring(0, str.length - 1));
  }
}