<template>
    <div class="loginBox">
        <div class="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
        </div>
        <div class="loginMain">
          <div class="inputWrap onePx_bottom">
            <input type="text" placeholder="请输入手机号码" />
          </div>
          <div class="inputWrap onePx_bottom">
            <input type="password" placeholder="请输入登录密码" />
          </div>
          <div class="loginBtn">
            <button type="primary" >登录</button>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    }, 
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style lang="scss">
.loginBox{
    width: 100%;
    height: 100%;
    background: white;
    .logo{
        width: 100%;
        padding: 0.5rem 0 .25rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 1.6rem;
        }
    }
    .loginMain{
        padding: 0.9rem .2rem 0 .2rem;
        .inputWrap{
            height: 0.9rem;
            display: flex;
            justify-content: center;
            align-items: center;
            input{
                display: block;
                height: 80%;
                border: none;
                width: 100%;
                font-size: .2rem;
                outline: none;
                border-bottom: 0.01rem solid #eee;
            }
        }
        .loginBtn{
            margin-top: 0.5rem;
            width: 100%;
            button{
                width: 100%;
                display: block;
                outline: 0 none;
                -webkit-appearance: none;
                box-sizing: border-box;
                padding: 0;
                text-align: center;
                font-size: 18px;
                height: 0.47rem;
                line-height: 0.47rem;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
                white-space: nowrap;
                color: #fff;
                background-color: #108ee9;
                border-radius: 5px;
                border: 0;
            }
        }
    }
}
.login{
    height: 100%;
}
</style>