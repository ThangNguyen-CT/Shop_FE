<script>
import UserService from "../services/User.service";
import toastjs from "../assets/js/toasts";
    export default{
        data(){
            return{
                toasts:{
                    title:"",
                    msg:"",
                    type:"",
                    duration:0
                 },
            }
        },   
        props:{
            users:Array,
            refeshlist:Function,
            activeUser: { type: Number, default: -1 },
        },
        emits:['update:activeUser'],
        methods:{
            toastjs,
            async deluser(user){
                try{
                    if(!user.isAdmin){
                        await UserService.delete(user._id);
                        this.refeshlist();
                        this.toasts.title = "Success",
                        this.toasts.msg="Đã xóa người dùng",
                        this.toasts.type = "success",
                        this.toasts.duration=2000
                        this.toastjs();
                    }else{
                        this.toasts.title = "Warning",
                        this.toasts.msg="Bạn không thể xóa người quản trị",
                        this.toasts.type = "warn",
                        this.toasts.duration=2000
                        this.toastjs();
                    }
                }catch(error){
                    console.log(error);
                     this.toasts.title = "Warning",
                    this.toasts.msg="Tài khoản không phải ADMIN",
                    this.toasts.type = "warn",
                    this.toasts.duration=2000
                    this.toastjs();
                }
            },
            updateuserindex(index){
                this.$emit("update:activeUser",index)
            }
        },
    }
</script>
<template>
        <ul class="list-group">
        <li 
			class="list-group-item user-item d-flex justify-content-between" 
			v-for="(user, index) in users"
			:key="user._id"
            @click="updateuserindex(index)"

		>
			<span>{{user.username}}</span>
            <button class="btn btn-outline-danger btn-sm" @click="deluser(user)">X</button>
		</li>
        </ul>
</template>
<style scoped>
    .list-group-item:hover{
        background-color: #0d6efd;
        color: azure;
    }
    .list-group span{
        margin-right: 8px;
    }
</style>