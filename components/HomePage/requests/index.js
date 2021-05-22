export async function processData(token) {
  const url =
    process.env.NEXT_PUBLIC_ENDPOINT_BASE_URL +
    process.env.NEXT_PUBLIC_ENDPOINT_PROCESS;
  const result = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!result.ok) {
    throw new Error("Error Processing");
  }
}

export async function fetchData() {
  const url =
    process.env.NEXT_PUBLIC_ENDPOINT_BASE_URL +
    process.env.NEXT_PUBLIC_ENDPOINT_FETCH;
  const result = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (result.ok) {
    return await result.json();
  }
  throw new Error("Error Fetching");
}
