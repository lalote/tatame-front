<template>
  <v-layout>
    <!-- PRECIOS -->
    <v-layout row wrap style="padding:30px" color="transparent" justify-center>
      <v-flex xs12 sm6 md4 style="padding:20px" v-for="item in info" :key="item.url_photo">

        <v-card hover round class="mx-auto" color="#739E82" dark max-width="400" style="border-radius:5px;">
          <v-card-title>
            <v-icon large left>mdi-twitter</v-icon>
            <span class="title font-weight-light">{{item.first_name}} {{item.last_name}} 
                <span v-if="item.alias.length > 0"> ({{item.alias}})   </span>
            </span>
          </v-card-title>

          <v-card-media class="headline font-weight-bold">
              <v-img lazy-src  :src="item.url_photo"></v-img>
         </v-card-media>

          <v-card-actions>
            <v-list-tile class="grow">
              <v-list-tile-avatar color="grey darken-3">
                <v-img class="elevation-6" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{item.team}}</v-list-tile-title>
              </v-list-tile-content>

<!--               <v-layout align-center justify-end>
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">45</span>
              </v-layout> -->
            </v-list-tile>
          </v-card-actions>
        </v-card>

  <!--      <v-card-title class="text-xs-center">
          <v-layout align-center justify-center>
            <v-flex>
              <h2>{{item.first_name}} {{item.last_name}}</h2>
            </v-flex>
          </v-layout>
        </v-card-title>

         <v-card class="text-xs-left">
          <v-layout style="padding:20px">
            <v-flex>
              <ul style="list-style-type:none;">
                <li>
                  <v-icon>label</v-icon>
                  {{item.team}}
                </li>
                <li>
                  <v-icon v-if="item.alias.length > 0">check_circle</v-icon>
                  {{item.alias}}
                </li>

                <li>
                  <v-img :src="item.url_photo"></v-img>
                </li>
              </ul>
            </v-flex>
          </v-layout>
        </v-card> -->
      </v-flex>
    </v-layout>

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
      errorMsg: ""
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:3000/fighters.json")
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