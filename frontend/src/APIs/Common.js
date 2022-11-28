const baseUrl = "http://localhost:3000/api/";

export const get = async (relUrl) => {
  const response = fetch(baseUrl + relUrl, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const post = async (relUrl, payload) => {
  const response = fetch(baseUrl + relUrl, {
    method: "POST",
    body: payload, // string or object
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response;
};

export const put = async (relUrl, payload) => {
  const response = fetch(baseUrl + relUrl, {
    method: "PUT",
    body: payload, // string or object
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response;
};

export const deleteVal = async (relUrl, payload) => {
  const response = await fetch(baseUrl + relUrl, {
    method: "PUT",
    body: payload, // string or object
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
