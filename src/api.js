import axios from "axios";

export default {
  user: {
    login: (credentials) =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user),

    signin: (credentials) =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user)
  }
};