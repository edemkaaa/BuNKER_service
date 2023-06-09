<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xs="12">
        <v-carousel>
          <v-carousel-item v-for="ad in promoAds" :key="ad.id" :src="ad.src" cover>
            <div class="ad-link">
              <v-btn class="error" :to="'/ad/' + ad.id">
                {{ ad.title }}
              </v-btn>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
  <v-container grid-list-lg>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" xs="12" v-for="ad in ads" :key="ad.id">
        <v-card>
          <v-img :src="ad.src" height="200px"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb0">Удаление вмятин</h3>
              <div>Сервисный центр «Автоцарапина» в СЗАО, САО, СВАО, ВАО, ЮВАО, ЮАО, ЮЗАО Москвы проводит работы по удалению мелких и глубоких вмятин на автомобилях разных марок, моделей и годов выпуска. Мы предлагаем наиболее эффективные решения по восстановлению кузова в каждом конкретном случае, используем передовые технологические разработки и качественные расходные материалы известных мировых производителей, предоставляем гарантию и обеспечиваем доступные цены. Профессионально выполним рихтовку вмятин на двери, багажнике, бампере, капоте, крыше и на других элементах кузова автомобиля без покраски.</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="'/ad/' + ad.id">Open</v-btn>
            <buy-ad-modal :ad="ad"></buy-ad-modal>
            Buy
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    promoAds() {
      return this.$store.getters.promoAds
    },
    ads() {
      return this.$store.getters.ads
    }
  }
}
</script>

<style scoped>
.ad-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgb(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>