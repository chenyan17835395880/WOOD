<template>
    <div class="index">
        <header>
            <div class="header-box">
                <div class="left">
                    <router-link to="land">
                        <div class="login">登录</div>
                    </router-link>
                    <router-link to="">
                        <div class="zhuce">注册</div>
                    </router-link>
                </div>
                <div class="right">
                    <div class="own">
                        <img src="../../assets/img/own.png" alt="">
                    </div>
                    <div class="shop">
                        <img src="../../assets/img/shopping.png" alt="">
                    </div>
                </div>
            </div>
        </header>
        <nav>
            <div class="nav-box">
                <div class="nav-left">
                    <img src="../../assets/img/logo.png" alt="">
                    <p>WOOD</p>
                </div>
                <div class="nav-right">
                    <ul>
                        <router-link :to="{path:'/'}"><li>首页</li></router-link>
                        <router-link :to="{path:'recommend'}"><li>精品推荐</li></router-link>
                        <router-link :to="{path:'weekproduct'}"><li>本周新品</li></router-link>
                        <router-link :to="{path:'weekproduct'}"><li>热卖专区</li></router-link>
                    </ul>
                    <input type="text">
                    <img src="../../assets/img/search.png" alt="">
                </div>
            </div>
        </nav>
        <router-view></router-view>

        <footer>
            <div class="decoration">
                <img src="../../assets/img/dec.png" alt="">
            </div>
            <ul class="footer-top">
                <li>
                    <img src="../../assets/img/address.png" alt="">
                    <p>山西省太原市 / 平阳路学府街口 / 凯通大厦</p>
                </li>
                <li>
                    <img src="../../assets/img/phone.png" alt="">
                    <p>400-124556 / 400-522654</p>
                </li>
                <li>
                    <img src="../../assets/img/email.png" alt="">
                    <p>123456789@qq.com</p>
                </li>
            </ul>
            <div class="footer-bottom">
                <p>京ICP备11012222号-4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 北京市公安局朝阳分区备案编号：1111111222222&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 广播电视节目制作经营许可证 (京) 字第06990号</p>
            </div>
        </footer>
    </div>

</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style>
    *{
        margin: 0;
        padding:0;
        list-style: none;
        text-decoration: none;
    }
    .index>header{
        width: 100%;
        height:88px ;
    }
    .index>header>.header-box{
        width: 1200px;
        height: 100%;
        background: #fff;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .index>header>.header-box>.left{
        width: 276px;
        height: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .index .login,.index .zhuce{
        color:#000;
        width: 136px;
        height: 46px;
        font-size: 24px;
        line-height: 46px;
        text-align: center;
        box-sizing: border-box;
        border-radius: 30px;
    }
    .index .login{
        background: #dec09e;
        border: 1px solid #fff;
        box-shadow: 2px 2px 20px 2px rgba(222,192,158,0.5);
    }
    .index .zhuce{
        border: 1px solid #dec09e;
        box-sizing: border-box;
    }
    .index .header-box>.right{
        width:86px ;
        height: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .index .own>img{
        display: block;
        width:22px;
        height: 32px;
    }
    .index .shop>img{
        display: block;
        width: 32px;
        height: 30px;
    }
    /*导航*/
    .index nav{
        width: 100%;
        height: 100px;
        background: #dec09e;
    }
    .index .nav-box{
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .index .nav-left{
        width: 75px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .index .nav-left img{
        width: 46px;
        height: auto;
        display: block;
    }
    .index .nav-left p{
        font-size: 14px;
        color: #2c2620;
        font-weight: bold;
    }
    .index .nav-right{
        width: 820px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .index .nav-right ul{
        width: 500px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .index .nav-right ul li{
        height: 44px;
        line-height: 44px;
        margin-left: 50px;
        font-size: 16px;
        color: #e39f5c;
    }
    .index .nav-right ul a:first-of-type li{
        border-bottom: 2px solid #fff;
    }
    .index .nav-right ul a:first-of-type~a li{
        color:#8d7963;
    }
    .index .nav-right input{
        display: block;
        width: 290px;
        height: 46px;
        border-radius: 30px;
        border: 1px solid #e1a268;
        box-sizing: border-box;
        border: none;
        padding-left:15px;
    }
    .index .nav-right input:focus{
        outline: none;
    }
    .index .nav-right img{
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        right:15px;
        top:0;bottom:0;
        margin: auto;
    }
    /*footer*/
    .index footer{
        width: 100%;
        height: 408px;
        background: #e8d3bb;
        position: relative;
    }
    .index .footer-top{
        width: 1200px;
        height: 308px;
        margin: 0 auto;
        background: #e8d3bb;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    .index .footer-top li{
        width: 400px;
        height: 104px;
        margin-bottom: 52px;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        align-content: space-between;
    }
    .index .footer-top li img{
        display: block;
        width: 50px;
        height: 50px;
    }
    .index .footer-top li p{
        width: 400px;
        font-size: 14px;
        color: #938676;
        text-align: center;
    }
    .index .footer-bottom{
        height: 100px;
        background: #d2af85;
        text-align: center;
        line-height: 100px;
        font-size: 14px;
        color: #938676;
        text-align: center;
    }
    .index .decoration img{
        display: block;
        width: 560px;
        height: auto;
        position: absolute;
        top:-305px;
        left:0;right:0;
        margin: auto;
        z-index: -99;
    }

</style>