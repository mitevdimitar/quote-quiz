const axios = require('axios');

export const getQuestions = async (mode) => {
    const endPoint = `http://localhost:3001/${mode}-questions`;
    return await axios.get(endPoint)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
}