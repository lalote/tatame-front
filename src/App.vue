<template>
  <v-app>
    <ToolBar></ToolBar>
    <div style="height:24px;"></div>

    <v-content   class="main">
      <div id="top"></div> 
      <router-view></router-view>

      <v-fab-transition>
        <v-btn v-show="btnTopVisible"
          @click="$vuetify.goTo('#top', 
                   {duration: 500, offset: -55, easing: 'easeInOutCubic'})"
          color="red darken-2" dark fab absolute  bottom  right fixed class="btn-to-up">
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "@/components/shared/Footer.vue";
import ToolBar from "@/components/shared/ToolBar.vue";
import Home from "@/components/Home.vue";

export default {
  name: "App",
  components: {
    ToolBar,
    Footer,
    Home
  },
  props: {
    visibleoffset: {
      type: [String, Number],
      default: 600
    },
    scrollFn: {
      type: Function,
      default: function(eventObject) {}
    }
  },
  data() {
    return {
      btnTopVisible: false,
      colorBGToolBar: '',
      
    };
  },
  mounted() {
    window.addEventListener("scroll", this.catchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.catchScroll);
  },
  methods: {
    /**
     * Catch window scroll event
     * @return {void}
     */
    catchScroll() {
       const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset);
      const pastBottomOffset = window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - parseInt(this.visibleoffsetbottom);
      this.btnTopVisible = parseInt(this.visibleoffsetbottom) > 0
          ? pastTopOffset && !pastBottomOffset
          : pastTopOffset;
      this.scrollFn(this);
    }
  }
};
</script>

<style>
  .btn-to-up {
    margin-bottom: 80px;
  }
  .main {
    margin-top: 26px;
    /* margin-right: 20px;
    margin-left: 20px; */
  }
</style>

