export const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postData = (url, requestBody) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: requestBody
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const putData = (url, requestBody) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      body: requestBody
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteData = (url, requestBody) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      body: requestBody
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
