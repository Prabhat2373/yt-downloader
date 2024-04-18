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

// export function getDuration(milliseconds: number) {
//   if (!milliseconds) return 0;
//   // return milliseconds / 1000; // 1 second = 1000 milliseconds
//   const duration = milliseconds / (1000 * 60);
//   return duration?.toFixed(2);
// }

export function getDuration(milliseconds: number) {
  if (!milliseconds) return "00:00";

  const totalSeconds = milliseconds / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

export function convertSecondsToMinutes(seconds) {
  // Calculate minutes and seconds
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;

  // Pad minutes and seconds with leading zeros if necessary
  var minutesStr = String(minutes).padStart(2, "0");
  var secondsStr = String(remainingSeconds).padStart(2, "0");

  // Return formatted string
  return minutesStr + ":" + secondsStr;
}


export const isValidUrl = (videoUrl:string) => {
  try {
    // Attempt to create a new URL object with the provided videoUrl
    const url = new URL(videoUrl);
    // If the URL object is successfully created, return true
    return true;
  } catch (error) {
    // If an error occurs during URL parsing (invalid URL format), return false
    return false;
  }
};