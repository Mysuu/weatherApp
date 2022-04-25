import moment from "moment";

export const ListCity = [
  { id: "0", name: "Hà Nội", cityName: "Hanoi" },
  { id: "1", name: "Hồ Chí Minh", cityName: "ho chi minh" },
  { id: "2", name: "Đà Nẵng", cityName: "da nang" },
  { id: "3", name: "Hà Nam", cityName: "hanam" },
  { id: "4", name: "Cần Thơ", cityName: "can tho" },
];

export const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export const empty = {
  datetime: "",
  weather: {
    icon: "",
  },
  temp: "",
};

const day = moment().format("dddd");

export let toDay;
switch (day) {
  case "Sunday": {
    toDay = 0;
    break;
  }
  case "Monday": {
    toDay = 1;
    break;
  }
  case "Tuesday": {
    toDay = 2;
    break;
  }
  case "Wednesday": {
    toDay = 3;
    break;
  }
  case "Thursday": {
    toDay = 4;
    break;
  }
  case "Friday": {
    toDay = 5;
    break;
  }
  case "Saturday": {
    toDay = 6;
    break;
  }
  default:
    console.log("err");
}
