<template>
  <v-layout row wrap fill-height>

    <v-flex xs12 sm12 md4  style="border:0px solid black;">
      <v-list>
        <v-list-tile>
          <v-list-tile-avatar>
            <img src="@/assets/tatame-logo.png" alt>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              <h1>
                {{info.first_name}} {{info.last_name}}
                <span
                  v-if="info.alias.length > 0"
                >({{info.alias}})</span>
              </h1>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-card flat>
        <v-divider></v-divider>
        <v-layout row justify-center align-center>
          <v-flex pa-2 ma-1>{{info.resumen}}</v-flex>
        </v-layout>
      </v-card>
    </v-flex>


    <v-flex xs12 sm12 md8  style="border:0px solid black;">
        <v-layout justify-center align-center row>
          <v-flex>
            <v-img aspect-ratio="1.4" lazy-src :src="info.url_photo"></v-img>
          </v-flex>
        </v-layout>

    </v-flex>

<!--     <v-navigation-drawer absolute clipped disable-route-watcher permanent enable-resize-watcher>
      <v-list>
        <v-list-tile>
          <v-list-tile-avatar>
            <img src="@/assets/tatame-logo.png" alt>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              <h1>
                {{info.first_name}} {{info.last_name}}
                <span
                  v-if="info.alias.length > 0"
                >({{info.alias}})</span>
              </h1>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-card flat>
        <v-divider></v-divider>
        <v-layout row justify-center align-center>
          <v-flex pa-2 ma-1>{{info.resumen}}</v-flex>
        </v-layout>
      </v-card>
    </v-navigation-drawer> -->

<!--     <v-card hover round class="mx-auto" color="#739E82" dark width="100%" style="text-xs-center">
      <v-card-media class="headline font-weight-bold">
        <v-layout justify-center align-center row>
          <v-flex>
            <v-img aspect-ratio="2.6" lazy-src :src="info.url_photo"></v-img>
          </v-flex>
        </v-layout>
      </v-card-media>
    </v-card> -->

    <v-alert :value="existeError" type="error">{{errorMsg}}</v-alert>
  </v-layout>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      existeError: false,
      errorMsg: "",
      drawer: null
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:3000/api/fighters/" + this.$route.params.id + ".json")
      .then(response => {
        this.info = response.data;
      })
      .catch(error => {
        this.existeError = true;
        this.errorMsg = error;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
</style>
