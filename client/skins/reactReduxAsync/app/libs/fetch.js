export default (params) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      contentType: 'application/x-www-form-urlencoded',
      ...params,
      success: (data) => {
        if (data.code !== 200) {
          reject(data.result.msg);
        } else {
          resolve(data.result);
        }
      }, 
      error: (err) => {
        reject(err);
      },
    });
  });
};
