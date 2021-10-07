const axios = require('axios');

export const getQuestions = async () => {
    return await axios.get(`http://localhost:3001/binary-questions`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}