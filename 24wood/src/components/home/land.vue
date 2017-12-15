<template>
    <div class="land" :class="active">
        <section class="land-box">
            <div class="title">
                <img src="../../assets/img/land.png" alt="">
            </div>
            <img src="../../assets/img/close.png" alt="" class="close" @click="Close">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名：" >
                    <el-input v-model="form.name" style="border:none;outline:none;border:2px solid #e39f5c;border-radius: 6px"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input  v-model="form.pass" style="border:none;outline:none;border:2px solid #e39f5c;border-radius: 6px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" style="font-size:22px;border:none;margin-top:20px;width: 180px;height:50px;background: #e39f5c">立即创建</el-button>
                    <el-button style="color:#fff;font-size:22px;border:none;margin-top:20px;width: 180px;height:50px;background: #f6ab6b">取消</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active:'',
                form: {
                    name: '',
                    pass:'',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            Close(){
                this.active='active';
                this.$router.push({path:'/'})
            },

        }
    }
</script>

<style>
    @import '../../assets/css/land.css';
</style>