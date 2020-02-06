import axios from "axios";

const QUIZ_API_URL = "http://localhost:8080/";

class QuizService {
  retrieveQuiz() {
    return axios.get(`${QUIZ_API_URL}`);
  }
}

export default new QuizService();