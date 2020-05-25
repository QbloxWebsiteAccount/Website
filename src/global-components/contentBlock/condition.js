// Components==============
// =========================

export default function condition(mb) {
  const marginBottom =
    mb === 1
      ? 5
      : mb === 2
      ? 7
      : mb === 3
      ? 9
      : mb === 4
      ? 11
      : mb === 5
      ? 14
      : mb === 6
      ? 15
      : 11;

  return marginBottom;
}
