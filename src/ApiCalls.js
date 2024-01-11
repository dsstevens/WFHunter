const fetchAPI = () => {
  return fetch('https://jobicy.com/api/v2/remote-jobs')
    .then((response) => {
      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error("Error: There was a problem with the request");
        } else if (response.status >= 500) {
          throw new Error("Error: Please try again later");
        } else {
          throw new Error("Error: Unable to fulfill request");
        }
      }
      return response.json();
    })
};

export default fetchAPI