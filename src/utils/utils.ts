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
