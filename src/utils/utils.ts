export function formatString(str: string) {
  try {
    if (!str) return "";
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  } catch (err) {
    console.log("err", err);
  }
}

export function getDuration(milliseconds: number) {
  if (!milliseconds) return 0;
  // return milliseconds / 1000; // 1 second = 1000 milliseconds
  const duration = milliseconds / (1000 * 60);
  return duration?.toFixed(2);
}
