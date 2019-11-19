export const getCurrentGeoPosition = () =>
  new Promise((resolve, reject) => {
    if (typeof navigator.geolocation === "undefined") {
      reject({ message: "not supported" });
    }

    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error)
    );
  });
