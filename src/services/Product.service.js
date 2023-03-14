import createHttp from "./http.service";
class ProductService {
    constructor() {
        this.http = createHttp("https://puce-doubtful-harp-seal.cyclic.app/api/products",true);
    }
    async getAll() {
        return (await this.http.get("/all")).data;
    }
    async create(data) {
        return (await this.http.post("/add", data)).data;
    }
    async get(id) {
        return (await this.http.get(`/find/${id}`)).data;
    }
    async update(id, data) {
        return (await this.http.put(`/update/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.http.delete(`/delete/${id}`)).data;
    }
}

export default new ProductService();