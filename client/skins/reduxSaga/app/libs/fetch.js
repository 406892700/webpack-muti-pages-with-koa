export default (params) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      ...params,
      success: (data) => {
        resolve(data);
      }, 
      error: (err) => {
        reject(err);
      },
    });
  });
};
