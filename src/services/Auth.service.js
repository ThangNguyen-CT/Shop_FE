import createHttp from "./http.service";
class AuthService {
    constructor() {
        this.http = createHttp("/api/users");
    }
    async createsignup(data) {
        return (await this.http.post("/dangky", data)).data;
    }
    async createlogin(data) {
        return (await this.http.post("/dangnhap", data)).data;
    }
}

export default new AuthService();