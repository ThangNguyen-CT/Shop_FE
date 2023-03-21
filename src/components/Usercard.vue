<script>
export default {
	props: {
		users: { type: Object, required: true },
        activeUser : {type : Number , default : -1}
	},
    emits:['update:activeUser'],
    methods:{
        closeform(){
            this.$emit("update:activeUser",-1);
        }
    }
};
</script>
<template>
	<div class="d-flex">
        <div>
            <div class="p-1">
                <strong>Username:</strong>
                {{users.username}}
            </div>
            <div class="p-1">
                <strong>Email :</strong>
                {{users.email}}
            </div>
            <div class="p-1">
                <strong>Admin:</strong>
                <i v-if="users.isAdmin" class="bi bi-check text-success"></i>
                <i v-else class="bi bi-x text-danger"></i>
            </div>
            <span class="badge bg-danger text-dark btn" @click="closeform">
                <i class="bi bi-x-square"></i> Hủy
            </span>
        </div>
	</div>
</template>
