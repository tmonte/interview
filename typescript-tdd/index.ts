const factors = [
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export function arabicToRoman(in_arabic: number): string {
  if (in_arabic === 0) return "";
  const [arabic, roman] = factors.find(
    ([arabic, _]) => arabic <= in_arabic
  ) as [number, string];
  return roman + arabicToRoman(in_arabic - arabic);
}