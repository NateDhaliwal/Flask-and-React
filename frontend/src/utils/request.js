export default function request(url, method = "GET", params) {
  params = params || false;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (params) {
    options.body = JSON.stringify(params);
  }

  let resp = fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
    })
    .catch((error) => {
      return "An error occured:\n" + error;
    });
  return resp;
}
