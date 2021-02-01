<template>
  <div class="home">
    <header>
      <div class="content">
        <div>
          <div class="logo">
            路盟科技
          </div>
          <!-- 菜单 -->
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <template v-for="(item, i) in menuList" :key="i">
              <el-menu-item v-if="!item.children" :index="i">
                {{ item.text }}
              </el-menu-item>
              <el-submenu v-else :index="i">
                <template #title>{{ item.text }}</template>
                <template v-for="(ele, j) in item.children" :key="j">
                  <el-menu-item>{{ ele.text }}</el-menu-item>
                </template>
              </el-submenu>
            </template>
          </el-menu>
        </div>

        <span>服务热线: 40077168</span>
      </div>
    </header>

    <!-- 内容 -->
    <main>
      内容
    </main>

    <!-- 底部 -->
    <footer>
      <div>
        <div class="foot-logo">
          <img src="" alt="" srcset="">
          <h3>金融科技综合服务提供商</h3>
        </div>
        <div class="flex flex-between">
          <div class="list">
            <h5>关于我们</h5>
            <li>公司简介</li>
            <li>发展历程</li>
          </div>
          <div class="qr">
            微信公众号
          </div>
        </div> 
        <p>版本协议</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "home",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      menuList: [
        {
          text: "首页"
        },
        {
          text: "基础产品",
          children: [
            {
              text: "周结"
            },
            {
              text: "月结"
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  header {
    @include wh(100%, 60px);
    display: flex;
    justify-content: center;
  }
  .content {
    display: flex;
    justify-content: center;
    line-height: 60px;
    & > div {
      @include wh(1200px, 100%);
      @extend .flex, .flex-between;
    }
  }
  footer {
    background: #3d3d3d;
  }
}
::v-deep .el-menu.el-menu--horizontal {
  border-bottom: 0;
}
</style>
