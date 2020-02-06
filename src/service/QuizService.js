import axios from "axios";

const QUIZ_API_URL = "https://vagado-rest-api-backend.herokuapp.com/";

class QuizService {
  retrieveQuiz() {
    return axios.get(`${QUIZ_API_URL}`);
  }
}

export default new QuizService();