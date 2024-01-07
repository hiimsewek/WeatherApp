export const celsiusToFahrenheit = (value: number) => value * (9 / 5) + 32;

export const mmsToInches = (value: number) => value / 25.4;

export const kmhToMph = (value: number) => value * 0.621;

export const degToDirection = (value: number) => {
  const piece = Math.ceil(value / 22.5);

  switch (piece) {
    case 1:
    case 16:
      return "North";
    case 2:
    case 3:
      return "Northeast";
    case 4:
    case 5:
      return "East";
    case 6:
    case 7:
      return "Southeast";
    case 8:
    case 9:
      return "South";
    case 10:
    case 11:
      return "Southwest";
    case 12:
    case 13:
      return "West";
    case 14:
    case 15:
      return "Northwest";
    default:
      return "";
  }
};
