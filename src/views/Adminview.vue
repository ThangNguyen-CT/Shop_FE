<script>
import HeaderShopVue from "../components/HeaderShop.vue";
import ListUser from "../components/ListUser.vue";
import UserService from "../services/User.service";
import toastsVue from "../components/toasts.vue";
import ProductService from "../services/Product.service";
import ListProduct from "../components/ListProduct.vue";
import Productcard from "../components/Productcard.vue";
import Usercard from "../components/Usercard.vue";
import toast from "../assets/js/toasts";
export default {
    data() {
        return {
            users: [],
            products: [],
            activeIndex: -1,
            activeUser: -1,
            toasts: {
                title: "Warning",
                msg: "Bạn không phải ADMIN",
                type: "warn",
                duration: 3000
            },
            searchuser: "",
            searchproduct: ""
        }
    },
    computed: {
        fiilterSearchProduct() {
            return this.products.filter(product => product.title.toLowerCase().includes(this.searchproduct.toLowerCase()));
        },
        fiilterSearchUser() {
            return this.users.filter(user => user.username.toLowerCase().includes(this.searchuser.toLowerCase()));
        },
        getindex() {
            if (this.activeIndex != -1) {
                const list = document.querySelectorAll(".product-item");
                list.forEach(element => {
                    element.classList.remove("active");
                });
                list[this.activeIndex].classList.add("active");
                return this.products[this.activeIndex];
            }
        },
        getindexuser() {
            if (this.activeUser != -1) {
                const list = document.querySelectorAll(".user-item");
                list.forEach(element => {
                    element.classList.remove("active");
                });
                list[this.activeUser].classList.add("active");
                return this.users[this.activeUser];
            }
        },
    },
    components: {
        HeaderShopVue,
        ListUser,
        ListProduct,
        toastsVue,
        Productcard,
        Usercard
    },
    methods: {
        toast,
        async getall() {
            try {
                this.products = await ProductService.getAll();
                this.users = await UserService.getAll();
            } catch (error) {
                console.log(error);
                this.toast();
                setTimeout(() => {
                    this.$router.push({ name: "ShopMain" });
                }, 1000);
            }
        },
    },
    created() {
        this.getall();
    },
}
</script>

<template>
    <HeaderShopVue></HeaderShopVue>
    <toastsVue></toastsVue>
    <div class="header text-center">
        <h2>Quản trị viên</h2>
    </div>
    <div class="main_admin d-flex" style="margin-top:30px; margin-left: 100px;">

        <div class="list_users w-50">
            <div class="user_heading">
                <h4>Danh Sách Người dùng</h4>
            </div>
            <div class="input-group">
                <span class="d-flex flex-column justify-content-center">Tìm kiếm</span>
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" v-model="searchuser" />
                </div>
            </div>
            <div class="list_item_user d-flex" id="user">
                <ListUser :users="fiilterSearchUser" :refeshlist="getall" v-model:activeUser="activeUser"></ListUser>
                <div class="card_product border border-light border-2 h-100 bg-light text-dark" style="padding: 10px;"
                    v-if="getindexuser">
                    <h5>Chi tiết người dùng</h5>
                    <Usercard :users="getindexuser" v-model:activeUser="activeUser"></Usercard>
                </div>
            </div>
        </div>

        <div class="list_products">
            <div class="product_heading">
                <h4>Danh Sách Người dùng</h4>
            </div>
            <div class="input-group">
                <span class="d-flex flex-column justify-content-center">Tìm kiếm</span>
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" v-model="searchproduct" />
                </div>
            </div>
            <div class="list_item_product d-flex" id="product">
                <ListProduct :products="fiilterSearchProduct" :refeshlist="getall" :getindex="getindex"
                    v-model:activeIndex="activeIndex"></ListProduct>
                <div class="card_product border border-light border-2 h-100 bg-light text-dark" style="padding: 10px;"
                    v-if="getindex">
                    <h5>Chi tiết sản phẩm</h5>
                    <Productcard :products="getindex"></Productcard>
                    <router-link :to="{
                        name: 'editproduct',
                        params: { id: getindex._id },
                    }">
                        <span class="badge bg-warning text-dark">
                            <i class="bi bi-pencil-square"></i>Hiệu chỉnh</span>
                    </router-link>
                    <span class="badge bg-danger text-dark btn" @click="activeIndex = -1" style="margin-left: 8px;">
                        <i class="bi bi-x-square"></i> Hủy
                    </span>
                </div>
            </div>
            <router-link to="/addproduct">
                <button class="btn btn-danger">Thêm Sản phẩm</button>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.list_item_product,
.list_item_user {
    height: 300px;
    overflow-y: scroll;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

#product::-webkit-scrollbar,
#user::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
}
</style>