export default function getUserData() {
  let data =
    JSON.parse(localStorage.getItem("UserData")).user ||
    JSON.parse(localStorage.getItem("UserData")).therapist ||
    JSON.parse(localStorage.getItem("UserData"));
  return data;
}
