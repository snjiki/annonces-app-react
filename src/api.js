import axios from "axios";

export default {
  user: {
    login: (credentials) =>
      axios.post("localhost:8000/api/auth", { credentials }).then(res => res.data.user),

    signin: (credentials) =>
      axios.post("localhost:8000/api/user", { credentials }).then(res => res.data.user)
  }
};