import createHttp from "./http.service";
class CartService {
    constructor() {
        this.http = createHttp("/api/carts",true);
    }
    async create(data) {
        return (await this.http.post("/add", data)).data;
    }
    async getAll() {
        return (await this.http.get("/all")).data;
    }
    async get(id) {
        return (await this.http.get(`/find/${id}`)).data;
    }
    async update(id, data) {
        return (await this.http.put(`/up/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.http.delete(`/del/${id}`)).data;
    }
}

export default new CartService();