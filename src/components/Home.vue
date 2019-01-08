<template>
  <v-container pa-0 ma-0 fluid>
    <section>
      <v-layout
        row
        wrap
        style="background-color: this.$store.getters.getNavBarBGColor !important;" >
<!--       style="background: linear-gradient(320deg, #fff 20%, rgba(197, 225, 165, 1) 40%);"
 -->        <!--  flex general seccion nosotros padding: 30px !important;-->
        <!--   <div class="text-xs-center" style="border:4px solid green;" >
        -->
        <!--  flex vcard texto-->
        <v-flex
          row
          wrap
          xs12
          sm6
          class="text-xs-center"
          style="padding:20px;height:100%;width:100%;padding:3px;border:0px solid black;"
        >
          <v-card
            flat
            style="padding:3px;border:4px solid black;min-height:300px;"
            color="transparent"
          >
            <!--  flex vcard texto H1 y H3-->
            <v-layout row wrap justify-space-between>
              <v-flex xs12>
                <br>
                <h1 class="display-2 font-weight-bold">Mejora tu vida 🥋</h1>
                <v-card-title>
                  <h3 class="title font-weight-thin">
                    <span class="font-weight-bold">JIUJITSU</span>, Arte marcial, deporte de combate y sistema de defensa personal de desarrollo brasileño de origen japonés.
                  </h3>
                </v-card-title>
              </v-flex>
            </v-layout>

            <!--  flex vcard BOTONES -->
            <v-layout row wrap>
              <!-- <div class="text-xs-center d-flex"> -->
              <v-flex xs12 sm12 md6 block>
                <v-btn large round color style="font-size:20px;">Aprende</v-btn>
              </v-flex>
              <v-flex xs12 sm12 md6 block>
                <v-btn large round color="primary " style="font-size:20px;">Conoce</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <!--  flex video-->
        <v-flex
          xs12
          sm6
          style="padding:3px;border:0px solid black;min-height:300px;padding:20px;"
          class="text-xs-center"
        >
          <!--           <youtube :video-id="videoId" :player-vars="{ autoplay: 1 }"></youtube>
          -->
          <iframe
            src="https://player.vimeo.com/video/233844936"
            width="100%"
            height="100%"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>

          <!--             <iframe
              style="min-height:200px;height:100%;min-width:480px;width:100%;"
              src="https://www.youtube.com/embed/LUmgrve1sZc?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
          ></iframe>-->
        </v-flex>
      </v-layout>

      <!--  QUE ES?? -->
      <v-layout row wrap style="padding:3px;border:0px solid black;background-color: #B7B8B6 !important;">
        <v-flex>
          <div id="quees"></div>
          <v-card flat style="padding:3px">
            <v-layout row wrap>
              <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                  <v-card style="padding:3px;border:0px solid black;">
                    <v-layout row wrap>
                      <v-flex v-for="n in 9" :key="n" xs4 d-flex>
                        <v-card flat tile class="d-flex">
                          <v-img
                            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                            aspect-ratio="1"
                            class="grey lighten-2"
                          >
                            <v-layout
                              slot="placeholder"
                              fill-height
                              align-center
                              justify-center
                              ma-0
                            >
                              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                          </v-img>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
              </v-layout>
              <!-- nuevo v-flex -->
              <!--  flex vcard QUE ES?? texto-->
              <v-flex
                row
                wrap
                xs12
                sm6
                class="text-xs-center"
                style="padding:20px;height:100%;width:100%;"
              >
                <div id="quees"></div>

                <v-card flat >
                  <!--  flex vcard texto H1 y H3-->
                  <v-flex xs12>
                    <br>
                    <h1 class="display-2 font-weight-bold">¿Que es?</h1>
                    <v-card-title>
                      <h3 class="title font-weight-thin">
                        <span class="font-weight-bold">JIUJITSU</span>Lorem ipsum dolor sit cuchuflí barquillo bacán jote gamba listeilor po cahuín, luca melón con vino pichanga coscacho ni ahí peinar la muñeca chuchada al chancho achoclonar. Chorrocientos pituto ubicatex huevo duro bolsero cachureo el hoyo del queque en cana huevón el año del loly hacerla corta impeque de miedo quilterry la raja longi ñecla. Hilo curado rayuela carrete quina guagua lorea piola ni ahí.
                      </h3>
                    </v-card-title>
                  </v-flex>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

            <!--     SUSCRIPCION -->
      <v-layout column wrap style="padding:10px;border:0px solid gray;" class="text-xs-center">

        <v-flex column xs12 style="border:0px solid gray;">
          <v-layout style="border:0px solid gray;" justify-center align-center>
            <v-flex xs12 align-self-center class="text-xs-center">
              <h2 class="display-3">Newsletter</h2>
              <h4 class="display-6">Suscribete para estár informado de nuevos servicios, promociones y más !!</h4>
            </v-flex>
          </v-layout>
        </v-flex>


          <v-layout row wrap pa-1 justify-space-between style="border:0px solid gray;">

            <v-flex  xs4 style="border:0px solid gray;">
            </v-flex>

            <v-flex xs4 grow   style="border:0px solid gray;width:100%;margin:auto;">
              <v-layout row wrap pa-1 justify-space-around fill-height style="border:0px solid gray;width:100%;">
                
                        <v-flex order-xs1 order-sm1 column xs6 pa-2 class="text-xs-left " style="border:0px solid gray" >
                          <v-text-field  v-model="email" :error-messages="emailErrors" label="E-mail" outline required @input="$v.email.$touch()"  @blur="$v.email.$touch()" ></v-text-field>
                        </v-flex>

                        <v-flex order-xs2 order-sm2 column xs6 pa-2  class="text-xs-center text-md-right " style="border:0px solid gray;" >
                          <v-btn  @click="submit" > Suscribirme!  </v-btn>
                        </v-flex>


              </v-layout>
            </v-flex>

             <v-flex  xs4 style="border:0px solid gray">
            </v-flex>

          </v-layout>

      </v-layout>

      <!--     SUSCRIPCION -->
<!--       <v-layout column wrap style="padding:10px;border:0px solid gray;" class="text-xs-center">

        <v-flex column xs12 align-self-center>
          <v-layout style="border:0px solid gray;" justify-center align-center>
            <v-flex xs12 align-self-center class="text-xs-center">
              <h2 class="display-3">Newsletter</h2>
              <h4 class="display-6">Suscribete para estár informado de nuevos servicios, promociones y más !!</h4>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12  pa-1  style="border:1px solid gray;min-width:300px;">
          <v-layout row wrap pa-1 justify-center style="border:1px solid gray;">
            <v-flex
              row
              xs6              
              pa-2              
              align-self-center
              class="text-xs-center text-md-right"
              style="border:1px solid gray;min-width:300px;max-width:300px;" >
              <v-btn >Suscribirme!</v-btn>
            </v-flex>
            <v-flex
              row
              xs6              
              pa-2
              align-self-center
              style="border:1px solid gray;min-width:300px;max-width:400px;" >
              <v-text-field label="Ingresa tu mail" placeholder="Mail" outline full-width></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout> -->

      

      <!-- CLASES  -->
      <v-layout row wrap style="padding:30px" color="transparent" justify-start>
        <h1 class="display-2 font-weight-medium">PRECIOS</h1>

        <v-layout wrap>
          <v-flex xs12 sm4 style="padding:20px">
            <v-card-title class="text-xs-center">
              <v-layout align-center justify-center>
                <v-icon x-large color="green darken-2" style="font-size:100px;">child_care</v-icon>
              </v-layout>
            </v-card-title>

            <v-card>
              <v-layout style="padding:20px">
                <p>Progressively build 2.0 manufactured products before go forward partnerships. Rapidiously matrix go forward initiatives without cross-platform potentialities. Enthusiastically matrix mission-critical paradigms whereas high-quality value.</p>
              </v-layout>
            </v-card>
          </v-flex>

          <v-flex xs12 sm4 style="padding:20px">
            <v-card-title class="text-xs-center">
              <v-layout align-center justify-center>
                <v-icon x-large color="green darken-2" style="font-size:100px;">child_care</v-icon>
              </v-layout>
            </v-card-title>
            <v-layout style="padding:20px">
              <p>Progressively build 2.0 manufactured products before go forward partnerships. Rapidiously matrix go forward initiatives without cross-platform potentialities. Enthusiastically matrix mission-critical paradigms whereas high-quality value.</p>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm4 style="padding:20px">
            <v-card-title class="text-xs-center">
              <v-layout align-center justify-center>
                <v-icon x-large color="green darken-2" style="font-size:100px;">child_care</v-icon>
              </v-layout>
            </v-card-title>
            <v-layout style="padding:20px">
              <p>Progressively build 2.0 manufactured products before go forward partnerships. Rapidiously matrix go forward initiatives without cross-platform potentialities. Enthusiastically matrix mission-critical paradigms whereas high-quality value.</p>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-layout>

      <v-layout row wrap style="padding:3px" color="transparent">
        <v-flex row wrap xs12 sm12 class="text-xs-center">
          <div id="nosotros"></div>

          <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-card flat style="padding:3px;border:0px solid black;" color>
              <v-container grid-list-sm fluid fill-height>
                <v-layout row wrap align-center>
                  <v-flex v-for="n in 6" :key="n" xs6 md2 d-flex class="text-xs-center">
                    <v-card flat tile class="d-flex">
                      <v-img
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-layout>
                      </v-img>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-parallax>

          <!--           <v-card flat style="padding:3px;border:0px solid black;" color>

            <v-flex xs12>
              <br>
              <h1 class="display-2 font-weight-bold">¿Clases? 1</h1>
              <v-card-title>
                <h3 class="title font-weight-thin">
                  <span class="font-weight-bold">JIUJITSU</span> Lorem ipsum dolor sit cuchuflí barquillo bacán jote gamba listeilor po cahuín, luca melón con vino pichanga coscacho ni ahí peinar la muñeca chuchada al chancho achoclonar. Chorrocientos pituto ubicatex huevo duro bolsero cachureo el hoyo del queque en cana huevón el año del loly hacerla corta impeque de miedo quilterry la raja longi ñecla. Hilo curado rayuela carrete quina guagua lorea piola ni ahí.
                </h3>
              </v-card-title>
            </v-flex>
          </v-card>-->
        </v-flex>
      </v-layout>

      <!-- PRECIOS -->
      <v-layout row wrap style="padding:30px" color="transparent" justify-center>
        <v-flex xs12 sm6 md3 style="padding:20px">
          <v-card-title class="text-xs-center">
            <v-layout align-center justify-center>
              <v-flex>
                <h1>Gratis</h1>
                <h2>$0</h2>
                <h4>por mes</h4>
              </v-flex>
            </v-layout>
          </v-card-title>

          <v-card class="text-xs-center">
            <v-layout style="padding:20px">
              <v-flex>
                <ul style="list-style-type:none;">
                  <li>
                    <v-icon>check_circle</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                  <li>
                    <v-icon>label</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                  <li>
                    <v-icon>schedule</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                </ul>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="loader = 'loading'">Ir por clase gratis</v-btn>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md3 style="padding:20px">
          <v-card-title class="text-xs-center">
            <v-layout align-center justify-center>
              <v-flex>
                <h1>Gratis</h1>
                <h2>$0</h2>
                <h4>por mes</h4>
              </v-flex>
            </v-layout>
          </v-card-title>

          <v-card class="text-xs-center">
            <v-layout style="padding:20px">
              <v-flex>
                <ul style="list-style-type:none;">
                  <li>
                    <v-icon>check_circle</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                  <li>
                    <v-icon>label</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                  <li>
                    <v-icon>schedule</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                </ul>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="loader = 'loading'">Ir por clase gratis</v-btn>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md3 style="padding:20px">
          <v-card-title class="text-xs-center">
            <v-layout align-center justify-center>
              <v-flex>
                <h1>Gratis</h1>
                <h2>$0</h2>
                <h4>por mes</h4>
              </v-flex>
            </v-layout>
          </v-card-title>

          <v-card class="text-xs-center">
            <v-layout style="padding:20px">
              <v-flex>
                <ul style="list-style-type:none;">
                  <li>
                    <v-icon>check_circle</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                  <li>
                    <v-icon>label</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                  <li>
                    <v-icon>schedule</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                </ul>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="loader = 'loading'">Ir por clase gratis</v-btn>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md3 style="padding:20px">
          <v-card-title class="text-xs-center">
            <v-layout align-center justify-center>
              <v-flex>
                <h1>Gratis</h1>
                <h2>$0</h2>
                <h4>por mes</h4>
              </v-flex>
            </v-layout>
          </v-card-title>

          <v-card class="text-xs-center">
            <v-layout style="padding:20px">
              <v-flex>
                <ul style="list-style-type:none;">
                  <li>
                    <v-icon>check_circle</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                  <li>
                    <v-icon>label</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                  <li>
                    <v-icon>schedule</v-icon>Intrinsicly reinvent unique e-business
                  </li>
                </ul>
              </v-flex>
            </v-layout>
            <v-btn color="primary" @click="loader = 'loading'">Ir por clase gratis</v-btn>
          </v-card>
        </v-flex>
      </v-layout>

      <!-- CLASES 2-->
      <v-layout row wrap>
        <v-flex>
          <h1 id="clases"></h1>

          <v-timeline align-top>
            <v-timeline-item
              v-for="(item, i) in items"
              :color="item.color"
              :icon="item.icon"
              :key="i"
              fill-dot
            >
              <v-card :color="item.color" dark>
                <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
                <v-card-text class="white text--primary">
                  <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                  <v-btn :color="item.color" class="mx-0" outline>Button</v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>

      <!-- PRECIOS -->
    </section>
  </v-container>
</template>

<script>
export default {
  data: {
    valid: true,
  },
  components: {
    name: "Home",
    videoId: "HjxYvcdpVnU",
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ],
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  },
  methods: {}
};
</script>

<style>
.layNosotros {
  background: linear-gradient(90deg, #fff 33%, rgba(108, 95, 199, 0.3) 100%);
  /* height: 90vh; */
}

.nosBtn {
  justify-self: center;
  align-self: center;
}

.nosBtn .v-btn {
  margin: 10px;
}
</style>

