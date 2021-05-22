export function signup(username, password) {
  const url =
    process.env.NEXT_PUBLIC_ENDPOINT_BASE_URL +
    process.env.NEXT_PUBLIC_ENDPOINT_SIGNUP;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
}
