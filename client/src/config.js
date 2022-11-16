export const baseurl = "http://localhost:3000"

export function setLoginUser(value) {
  localStorage.setItem("loginuser", value)
}

export function getLoginUser() {
  return localStorage.getItem("loginuser")
}

