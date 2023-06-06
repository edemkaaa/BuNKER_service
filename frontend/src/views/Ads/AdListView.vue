<template>
    <v-container>
        <h1 class="text--secondary mb-3 mt-3">Наши услуги</h1>
        <v-card v-for="ad in ads" :key="ad.id" class="mx-auto" max-width="1000">
            <v-row>
                <v-img :src="ad.src" height="300px" width="100%"></v-img>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-card-text>
                    <h2 class="text--primary">{{ ad.title }}</h2>
                    <p>{{ ad.desc }}</p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">
                        Open
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-row>
        </v-card>
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
            ],
        };
    },
};
</script>