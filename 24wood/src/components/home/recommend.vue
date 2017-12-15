<template>
    <div class="recommend">
        <div class="banner1">
            <img src="../../assets/img/recommend.png" alt="">
            <div class="banner-box">
                <div class="text1">
                    <p>木器 / WOOD</p>
                    <p>感受自然的味道</p>
                    <p>FEEL THE NATURAL FLAVOR</p>
                </div>
            </div>
        </div>
        <div class="back">
            <div>
                <router-link :to="{path:'/'}"><p>首页</p></router-link>
                <span>>></span>
                <router-link :to="{path:'recommend'}"><p>精品推荐</p></router-link>
            </div>
        </div>
        <div class="center">
            <div class="jingpintu">
                <img src="../../assets/img/jingpin.png" alt="">
            </div>
            <ul class="jingpin2">
                <router-link to="">
                    <li>
                        <img src="../../assets/img/recommend1.png" alt="">
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <p>精品热销</p>
                        <p>名字</p>
                        <p>BOUTIQUE HOT SALE</p>
                        <span></span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <p id="p">精品热销</p>
                        <p id="p1">名字</p>
                        <p id="p2">BOUTIQUE HOT SALE</p>
                        <span id="span"></span>
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../../assets/img/recommend2.png" alt="">
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <img src="../../assets/img/recommend3.png" alt="">
                    </li>
                </router-link>
                <router-link to="">
                    <li>
                        <p>精品热销</p>
                        <p>名字</p>
                        <p>BOUTIQUE HOT SALE</p>
                        <span></span>
                    </li>
                </router-link>
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </ul>
            <div class="tu">
                <img src="../../assets/img/tu.png" alt="">
            </div>
            <div class="remai1">
                <div class="benzhou-top">
                    <img src="../../assets/img/remai.png" alt="">
                </div>
                <div class="type">
                    <div class="left">
                        <div>价格</div>
                        <ul>
                            <li>0-99<div class="select"></div></li>
                            <li>100-199<div class="select"></div></li>
                            <li>200-299<div class="select"></div></li>
                        </ul>
                    </div>
                    <div class="right">
                        <div>木色</div>
                        <ul>
                            <li>米白<div class="select"></div></li>
                            <li>原木色<div class="select"></div></li>
                            <li>深木色<div class="select"></div></li>
                        </ul>
                    </div>
                </div>
                <ul class="list">
                    <router-link to="">
                        <li>
                            <p>英文名</p>
                            <p>中文名</p>
                            <p><span>60</span>RMB</p>
                            <div class="buy">BUY</div>
                            <div class="gouwuche">
                                <img src="../../assets/img/shoppingb.png" alt="">
                                <p class="text">购物车</p>
                            </div>
                            <img src="../../assets/img/dashao.png" alt="">
                        </li>
                    </router-link>
                    <router-link to="">
                        <li>
                            <p>英文名</p>
                            <p>中文名</p>
                            <p><span>60</span>RMB</p>
                            <div class="buy">BUY</div>
                            <div class="gouwuche">
                                <img src="../../assets/img/shoppingb.png" alt="">
                                <p class="text">购物车</p>
                            </div>
                            <img src="../../assets/img/dashao.png" alt="">
                        </li>
                    </router-link>
                    <router-link to="">
                        <li>
                            <p>英文名</p>
                            <p>中文名</p>
                            <p><span>60</span>RMB</p>
                            <div class="buy">BUY</div>
                            <div class="gouwuche">
                                <img src="../../assets/img/shoppingb.png" alt="">
                                <p class="text">购物车</p>
                            </div>
                            <img src="../../assets/img/dashao.png" alt="">
                        </li>
                    </router-link>
                    <router-link to="">
                        <li>
                            <p>英文名</p>
                            <p>中文名</p>
                            <p><span>60</span>RMB</p>
                            <div class="buy">BUY</div>
                            <div class="gouwuche">
                                <img src="../../assets/img/shoppingb.png" alt="">
                                <p class="text">购物车</p>
                            </div>
                            <img src="../../assets/img/dashao.png" alt="">
                        </li>
                    </router-link>
                    <router-link to="">
                        <li>
                            <p>英文名</p>
                            <p>中文名</p>
                            <p><span>60</span>RMB</p>
                            <div class="buy">BUY</div>
                            <div class="gouwuche">
                                <img src="../../assets/img/shoppingb.png" alt="">
                                <p class="text">购物车</p>
                            </div>
                            <img src="../../assets/img/dashao.png" alt="">
                        </li>
                    </router-link>
                    <router-link to="">
                        <li>
                            <p>英文名</p>
                            <p>中文名</p>
                            <p><span>60</span>RMB</p>
                            <div class="buy">BUY</div>
                            <div class="gouwuche">
                                <img src="../../assets/img/shoppingb.png" alt="">
                                <p class="text">购物车</p>
                            </div>
                            <img src="../../assets/img/dashao.png" alt="">
                        </li>
                    </router-link>
                </ul>
                <div class="page">
                    <img src="../../assets/img/left.png" alt="" class="left-img" @click="SlideLeft">
                    <div class="page-box">
                        <ul  :style="{left:left+'px'}">
                            <li><span>1</span></li>
                            <li><span>2</span></li>
                            <li><span>3</span></li>
                        </ul>
                    </div>

                    <img src="../../assets/img/right.png" alt="" class="right-img" @click="SlideRight">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                left:10,
                num:1,
                num1:1,
                flag:true,
            }
        },
        methods:{
            SlideLeft(){
                if(this.flag){
                    this.left-=60;
                    this.flag=false;
                }
            },
            SlideRight(){
                if(!this.flag){
                    this.left+=60;
                    this.flag=true;
                }
            },

        }
    }
</script>

<style>
    @import "../../assets/css/recommend.css";
</style>