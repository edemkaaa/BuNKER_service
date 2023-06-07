export default {
    state: {
        ads:[
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
    },
    mutations: {
		createAd(state, payload){
			state.ads.push(payload)
		}
	},
	actions: {
		createAd({commit},payload){
			payload.id = Math.random()
			commit('createAd', payload)
		}
	},
	getters: {
		ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds(state) {
			return state.ads
		},
		adById(state) {
			return id => {
				return state.ads.find(ad => ad.id == id)
			}
		}

	}
}
