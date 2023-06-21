import base from "./baseURL";

const LOCALSTORAGE_KEY = "token";

export async function signin(username, password) {
  // Make request to singin user to retrieve a token
  const response = await base.post("users/signin", {
    username,
    password,
  });

  // Put the token on localstorage, for 30min (duration set in server)
  localStorage.setItem(LOCALSTORAGE_KEY, response.data.token);

  return response.data;
}

export async function signup(username, password) {
  const response = await base.post("users/signup", {
    username,
    password,
  });

  return response.data;
}

export async function isTokenValid() {
  const response = await base.get("/auth/isTokenValid");
  return response.data;
}
