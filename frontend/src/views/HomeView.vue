<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xs="12">
        <v-carousel cycle interval="5000">
          <v-carousel-item
          v-for="ad in ads"
          :key="ad.id"
          :src="ad.src"
          cover>
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
              <h3 class="headline mb0">Здесь будет заголовок</h3>
              <div>Здесь будет описание</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text>Open</v-btn>
            <v-btn raised color="primary">
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "Ремонт вмятин",
          desc: "First Desc",
          promo: true,
          src: "https://автоцарапина.рф/images/grey/overcontent-slider/overcontent-01.jpg",
          id: "1"
        },
        {
          title: "Оклейка авто плёнкой",
          desc: "Second Desc",
          promo: true,
          src: "https://автоцарапина.рф/images/grey/overcontent-slider/overcontent-08.jpg",
          id: "2"
        },
        {
          title: "Кузовной ремонт",
          desc: "Thitd Desc",
          promo: true,
          src: "https://автоцарапина.рф/images/grey/overcontent-slider/overcontent-11.jpg",
          id: "3"
        },
        {
          title: "Реставрация кожаного салона",
          desc: "Fourth Desc",
          promo: true,
          src: "https://автоцарапина.рф/images/grey/overcontent-slider/overcontent-05.jpg",
          id: "4"
        },
        {
          title: "Покраска",
          desc: "Fifth Desc",
          promo: true,
          src: "https://автоцарапина.рф/images/grey/overcontent-slider/overcontent-09.jpg",
          id: "5"
        },
        {
          title: "Удаление прожёгов",
          desc: "Sixth Desc",
          promo: true,
          src: "https://автоцарапина.рф/images/grey/overcontent-slider/overcontent-13.jpg",
          id: "6"
        },
        {
          title: "Полировка кузова авто",
          desc: "Seventh Desc",
          promo: true,
          src: "https://автоцарапина.рф/images/grey/overcontent-slider/overcontent-14.jpg",
          id: "7"
        }
      ]
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