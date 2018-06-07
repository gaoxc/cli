<style lang="scss">
    @import './login.scss';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import store from 'store';
export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.$http.post('/admin/login', {
                        "password": this.form.password,
                        "userName": this.form.userName
                    })
                    .then((res) => {
                        console.log(res);
                        if (res.data.data && res.data.data.token) {
                            // 登陆成功
                            store.set('tokenObj', res.data.data);
                            this.$router.push({
                                name: 'home_index'
                            });
                        } else {
                            this.$Message.info(res.data.errorMsg);
                        }
                    })
                    .catch(() => {
                        this.$Message.info('系统异常，稍后重试');
                    })
                    // Cookies.set('user', this.form.userName);
                    // Cookies.set('password', this.form.password);
                }
            });
        }
    }
};
</script>

<style>

</style>
