<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-tile>
          <v-list-tile-avatar>
            <img src="@/assets/tatame-logo.png" alt>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>TATAMELIFE</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-divider></v-divider>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="$vuetify.goTo(item.selector, 
                                            {duration: 500, offset: -55, easing: 'easeInOutCubic'})"
          @click.stop="drawer = !drawer"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed clipped-left flat height="50px" v-bind:style="getNavBarBGColor">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer" class="hidden-xs-and-down">
          <v-layout row align-center justify-start style="min-width:200px">
            <img src="@/assets/tatame-logo.png" style="width:38px;height:38px;margin-right:4px;">
            <span>TATAMELIFE</span>
          </v-layout>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-for="item in items" :key="item.title">
        <!--         <router-link v-if="item.esEnlace" to=item.link class="btn btn-logout btn-sm">{{item.title}}</router-link>
        -->
        <v-btn v-if="item.esEnlace" block to="/fighters" flat>
          <v-icon left dark class="hidden-xs-only">{{item.icon}}</v-icon>
          <span class="hidden-sm-and-down">{{item.title}}</span>
        </v-btn>

        <v-btn
          v-if="!item.esEnlace"
          block
          @click="$vuetify.goTo(item.selector, {duration: 500, offset: -55, easing: 'easeInOutCubic'})"
          flat
        >
          <v-icon left dark class="hidden-xs-only">{{item.icon}}</v-icon>
          <span class="hidden-sm-and-down">{{item.title}}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {

  data() {
    return {
      drawer: null,
      items: [
        { title: "¿Que es?", icon: "explore", selector: "#quees" },
        { title: "Clases", icon: "room_service", selector: "#clases" },
        { title: "Precios", icon: "monetization_on", selector: "#precios" },
        { title: "Contacto", icon: "contact_mail", selector: "#contacto" },
        {
          title: "Luchadores",
          icon: "contact_mail",
          link: "/fighters",
          esEnlace: true
        }
      ]
    };
  },
  methods: {
    goToHome() {
      router.push("/");
    }
  },
  computed: {
 ...mapGetters({
    // map `this.doneCount` to `this.$store.getters.doneTodosCount`
    getNavBarBGColor: "getNavBarBGColor"
  })
  }



 
};
</script>

<style>
</style>
