export default function checkAuthentication() {
  let UserData = JSON.parse(localStorage.getItem("UserData"));
  return UserData?.verified;
}
