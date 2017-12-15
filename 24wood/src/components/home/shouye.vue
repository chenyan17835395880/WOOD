<template>
    <div class="">
        <section class="banner">
            <ul>
                <li>
                    <img src="../../assets/img/bannerjpg.jpg" alt="">
                </li>
            </ul>
            <div class="text">
                <p>木器 / WOOD</p>
                <p>感受自然的味道</p>
                <p>FEEL THE NATURAL FLAVOR</p>
            </div>
        </section>
        <div class="center">
            <div class="jingpin">
                <div class="jingpin-top">
                    <img src="../../assets/img/jingpin.png" alt="">
                </div>
                <ul class="jingpin-bottom">
                    <router-link to="">
                        <li>
                            <img src="../../assets/img/dangao.jpg" alt="">
                        </li>
                    </router-link>
                    <router-link to="">
                        <li>
                            <p>名字</p>
                            <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        </li>
                    </router-link>
                    <router-link to="">
                        <li>
                            <p>名字</p>
                            <div class="zhuangshi">
                                <img src="../../assets/img/zhuangshi.png" alt="">
                            </div>
                        </li>
                    </router-link>
                    <router-link to="">
                        <li>
                            <img src="../../assets/img/panzi.png" alt="">
                        </li>
                    </router-link>
                </ul>
            </div>
            <div class="benzhou">
                <div class="benzhou-top">
                    <img src="../../assets/img/benzhou.png" alt="">
                </div>
                <ul class="benzhou-bottom">
                    <router-link to="">
                        <li>
                            <img src="../../assets/img/benzhou1.jpg" alt="">
                        </li>
                    </router-link>
                    <router-link to="">
                        <li>
                            <img src="../../assets/img/benzhou2.jpg" alt="">
                        </li>
                    </router-link><router-link to="">
                    <li>
                        <img src="../../assets/img/benzhou3.jpg" alt="">
                    </li>
                </router-link>
                    <div class="text1">
                        <p>FEEL THE NATURAL FLAVOR</p>
                        <p>木器 / 感受自然的味道</p>
                    </div>
                    <div class="text2">
                        <div class="text2-top">
                            <div>599</div>
                            <p>[一套]人/民/币</p>
                        </div>
                        <div class="text2-bottom">
                            <div>相思木质工艺</div>
                            <p>WOOD TECHNOLOGY</p>
                        </div>
                    </div>
                </ul>
            </div>
            <div class="remai">
                <div class="benzhou-top">
                    <img src="../../assets/img/remai.png" alt="">
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
            }
        }
    }
</script>

<style>
    @import "../../assets/css/index.css";

</style>