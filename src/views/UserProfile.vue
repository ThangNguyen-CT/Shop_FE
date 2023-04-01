<script>
// import { mapState } from "pinia";
// import { useAuthStore } from "@/stores/Auth.store";
// import HeaderShop from "../components/HeaderShop.vue";
// import EditUser from "../components/EditUser.vue";
// import toastsVue from "../components/toasts.vue";
// export default {
// 	data() {
// 		return {
// 			checkedit: false,
// 		}
// 	},
// 	components: {
// 		HeaderShop,
// 		EditUser,
// 		toastsVue
// 	},
// 	computed: {
// 		...mapState(useAuthStore, {
// 			currentUser: "user",
// 		}),
// 	},
// 	methods: {
// 		getadmin() {
// 			return this.currentUser.isAdmin;
// 		},
// 		showedit() {
// 			if (!this.checkedit) {
// 				this.checkedit = true;
// 			}
// 			else {
// 				this.checkedit = false;
// 			}
// 		},
// 	},
// 	mounted() {
// 		this.getadmin();
// 	}
// };
</script>
<template>
	<!-- <HeaderShop></HeaderShop>
	<toastsVue></toastsVue>
	<router-link to="/admin" v-if="getadmin()">
		<span class="">Trang quản trị</span>
	</router-link>
	<div class="wrapper_profile">
		<div v-if="currentUser" class="profile">
			<div class="jumbotron">
				<h3>
					Thông tin người dùng
				</h3>
			</div>
			<div class="row">
				<div class="col-md-8">
					<p class="text-break">
						<strong>Name:</strong>
						{{ currentUser.username }}
					</p>
					<p>
						<strong>E-mail:</strong>
						{{ currentUser.email }}
					</p>
				</div>
			</div>
			<router-link to="/">
				<button class="btn btn-danger">Trở về</button>
			</router-link>
			<button class="btn btn-warning text-light" style="margin-left: 20px;" @click="showedit" v-if="!checkedit">Hiệu
				chỉnh</button>
			<button class="btn btn-warning text-light" style="margin-left: 20px;" @click="showedit"
				v-if="checkedit">Hủy</button>
		</div>
		<div v-if="checkedit" class="d-flex flex-column justify-content-center edit">
			<h4>Thay đổi thông tin</h4>
			<EditUser :user="currentUser"></EditUser>
		</div>
	</div> -->
	<h1>text-transform</h1>
</template>
<style scoped>
.wrapper_profile {
	display: flex;
	flex-direction: column;
	padding-top: 20px;
}
.profile{
	margin: auto;
}
.edit{
	padding: 20px 0;
	margin: auto;
	width: 300px;
}
</style>