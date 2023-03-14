import createHttp from "./http.service";
class Users {
    constructor() {
        this.http = createHttp("https://puce-doubtful-harp-seal.cyclic.app/api/users",true);
    }
    async getAll() {
        return (await this.http.get("/all")).data;
    }
    async update(id, data) {
        return (await this.http.put(`/update/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.http.delete(`/del/${id}`)).data;
    }
}

export default new Users();