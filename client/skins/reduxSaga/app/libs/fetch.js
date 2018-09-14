const url = 'http://localhost:9000/graphql';
export default (params) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      contentType: 'application/json',
      type: 'post',
      url,
      ...params,
      data: JSON.stringify({
        query: params.query,
        operationName: null,
        variables: {},
      }),
      success: (data) => {
        resolve(data.data);
      }, 
      error: (err) => {
        reject(err);
      },
    });
  });
};
