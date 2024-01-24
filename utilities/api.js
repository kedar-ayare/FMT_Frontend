export const fetchDataWithTimeout = (url) => {
  return new Promise((resolve, reject) => {
    // Set a timeout for the request
    const timeoutId = setTimeout(() => {
      reject(new Error('Request timed out'));
    }, TIMEOUT_DURATION);

    // Make the fetch request
    fetch(url)
      .then(response => {
        // Clear the timeout since the request succeeded
        clearTimeout(timeoutId);
        return response.json();
      })
      .then(data => {
        // Resolve with the data if the request was successful
        resolve(data);
      })
      .catch(error => {
        // Clear the timeout in case of an error
        clearTimeout(timeoutId);
        reject(error);
      });
  });
};