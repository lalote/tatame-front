<template>
  <v-container pa-0 ma-0 fluid>
    <section>
      <v-layout
        row
        wrap
        style="padding:30px;
      background: linear-gradient(0deg, #fff 23%, rgba(197, 225, 165, 1) 40%);"
      >
        <!--  flex general seccion nosotros padding: 30px !important;-->
        <!--   <div class="text-xs-center" style="border:4px solid green;" >
        -->
        <!--  flex vcard texto-->
        <v-flex
          row
          wrap
          xs12
          sm6
          class="text-xs-center"
          style="padding:20px;min-height:200px;height:100%;min-width:480px;width:100%;"
        >
          <v-card flat style="padding:3px;border:4px solid black;" color="transparent">
            <!--  flex vcard texto H1 y H3-->
            <v-flex xs12>
              <br>
              <h1 class="display-2 font-weight-bold">Mejora tu vida 🥋</h1>
              <v-card-title>
                <h3 class="title font-weight-thin">
                  <span class="font-weight-bold">JIUJITSU</span>, Arte marcial, deporte de combate y sistema de defensa personal de desarrollo brasileño de origen japonés.
                </h3>
              </v-card-title>
            </v-flex>

            <!--  flex vcard BOTONES -->
            <v-layout row wrap>
              <!-- <div class="text-xs-center d-flex"> -->
              <v-flex xs6 sm12 md6 block>
                <v-btn large round color style="font-size:20px;">Aprende</v-btn>
              </v-flex>
              <v-flex xs6 sm12 md6 block>
                <v-btn large round color="primary " style="font-size:20px;">Conoce</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <!--  flex video-->
        <v-flex xs12 sm6 style="padding:20px;">
          <v-responsive :aspect-ratio="16/9">
            <iframe
              style="min-height:200px;height:100%;min-width:480px;width:100%;"
              src="https://www.youtube.com/embed/LUmgrve1sZc?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-responsive>
        </v-flex>
      </v-layout>

      <!--  QUE ES?? -->
      <v-layout row wrap>
        <v-flex>
          <div id="quees"></div>
          <v-card>
            <v-layout row wrap>
              <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                  <v-card>
                    <v-container grid-list-sm fluid>
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
                    </v-container>
                  </v-card>
                </v-flex>
              </v-layout>
              <!-- nuevo v-flex -->
              <!--  flex vcard texto-->
              <v-flex
                row
                wrap
                xs12
                sm6
                class="text-xs-center"
                style="padding:20px;min-height:200px;height:100%;min-width:480px;width:100%;"
              >
                <div id="nosotros"></div>

                <v-card flat style="padding:3px;border:4px solid black;" color="transparent">
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

      <!-- CLASES -->
      <v-layout row wrap>
        <v-flex>
          <h1 id="clases"></h1>
          <v-card>
            <v-layout row wrap>
                            <!--  flex vcard texto-->
              <v-flex row wrap xs12 sm6 class="text-xs-center"
                style="padding:20px;min-height:200px;height:100%;min-width:480px;width:100%;">
                <div id="nosotros"></div>

                <v-card flat style="padding:3px;border:4px solid black;" color="transparent">
                  <!--  flex vcard texto H1 y H3-->
                  <v-flex xs12>
                    <br>
                    <h1 class="display-2 font-weight-bold">¿Clases?</h1>
                    <v-card-title>
                      <h3 class="title font-weight-thin">
                        <span class="font-weight-bold">JIUJITSU</span>Lorem ipsum dolor sit cuchuflí barquillo bacán jote gamba listeilor po cahuín, luca melón con vino pichanga coscacho ni ahí peinar la muñeca chuchada al chancho achoclonar. Chorrocientos pituto ubicatex huevo duro bolsero cachureo el hoyo del queque en cana huevón el año del loly hacerla corta impeque de miedo quilterry la raja longi ñecla. Hilo curado rayuela carrete quina guagua lorea piola ni ahí.
                      </h3>
                    </v-card-title>
                  </v-flex>
                </v-card>
              </v-flex>
              
              <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                  <v-card>
                    <v-container grid-list-sm fluid>
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
                    </v-container>
                  </v-card>
                </v-flex>
              </v-layout>
              <!-- nuevo v-flex -->


            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

      <!-- PRECIOS -->
      <v-layout row wrap>
        <v-flex>
          <h1 id="precios"></h1>
          <v-card>
            <v-layout row wrap>
              <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                  <v-card>
                    <v-container grid-list-sm fluid>
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
                    </v-container>
                  </v-card>
                </v-flex>
              </v-layout>
              <!-- nuevo v-flex -->
              <!--  flex vcard texto-->
              <v-flex
                row
                wrap
                xs12
                sm6
                class="text-xs-center"
                style="padding:20px;min-height:200px;height:100%;min-width:480px;width:100%;"
              >
                <div id="nosotros"></div>

                <v-card flat style="padding:3px;border:4px solid black;" color="transparent">
                  <!--  flex vcard texto H1 y H3-->
                  <v-flex xs12>
                    <br>
                    <h1 class="display-2 font-weight-bold">Precios</h1>
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


    </section>
  </v-container>
</template>

<script>
export default {
  components: {
    name: "Home",
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

