const axios = require('axios');

export const getQuestions = async () => {
    return await axios.get(`http://localhost:3001/answers`)
      .then(function (response) {
        //return response;
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
}