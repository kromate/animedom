<template>
  <div class="container" v-if="data.name">
    <DescriptionModal :showModal="showModal" :link="link" @close="showModal = false" />
    <div class="details">
      <h2>{{ data.name }}</h2>
      <p>
        <span class="title">
          summary
        </span>
        <br />
        {{ data.summary }}
      </p>

      <p>
        <span class="title">
          Other Names
        </span>
        <br />
        {{ data.otherNames }}
      </p>

      <p>
        <span class="title">
          Release
        </span>
        <br />
        {{ data.release }}
      </p>

      <p>
        <span class="title">
          Type
        </span>
        <br />
        {{ data.type }}
      </p>

      <p>
        <span class="title">
          Genre
        </span>
        <br />
        {{ data.genre }}
      </p>

      <div class="epic">
        <span class="title ept">
          Episodes
        </span>
        <br />
        <div class="blc">
          <div
            class="epi"
            v-for="(ep, index) in data.episodes"
            :key="index"
            @click="getEpis(data.id, ep.start, ep.end, data.name)"
          >
            {{ ep.start }} - {{ ep.end }}
          </div>
        </div>
      </div>

      <!-- EPISODES -->
      <div v-if="show" class="epicES">
        <Loader v-if="!Episodes.length" />
        <div
          v-else
          class="epiES"
          v-for="(ep, index) in Episodes"
          :key="index"
          @click="getLinks(ep.link)"
        >
          {{ ep.name }}
        </div>
      </div>
    </div>

    <div class="detImg">
      <img :src="$route.query.image" alt="" />
    </div>
  </div>

  <div class="container2" v-else>
    <div>
      <Loader w="233.39" h="340" b="8" />
      <p class="lood">loading....</p>
    </div>
  </div>
</template>

<script>
import DescriptionModal from "@/components/descriptionModal.vue";
import Loader from "@/components/Loader.vue";
export default {
  components: { DescriptionModal, Loader },
  name: "Details",
  data() {
    return {
      data: "",
      Episodes: [],
      showModal: false,
      link: "",
      show: false,
    };
  },
  computed: {
    desc() {
      return this.$store.state.desc;
    },
  },

  methods: {
    getLinks(link) {
      let uplink = encodeURIComponent(link.trim());
      this.link = uplink;
      this.showModal = true;
      console.log("object");
    },
    getEpis(id, start, end, name) {
      this.Episodes = [];
      this.show = true;

      // https://anime-web-scraper.herokuapp.com/episodes/?start=0&end=99&id=1089&name=naruto
      console.log(
        `https://anime-web-scraper.herokuapp.com/episodes/?start=${start}&end=${end}&id=${id}&name=${name}`,
      );
      fetch(
        `https://anime-web-scraper.herokuapp.com/episodes/?start=${start}&end=${end}&id=${id}&name=${name}`,
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("data");
          console.log(data);
          this.Episodes = data;
          // this.Eload = false;
        })
        .catch((err) => {
          console.log(err);
          // this.Eload = false;
          this.Error = true;
        });
    },
    getDetails() {
      this.data = {};
      console.log(`https://anime-web-scraper.herokuapp.com/desc/?link=${this.$route.query.link}`);
      fetch(`https://anime-web-scraper.herokuapp.com/desc/?link=${this.$route.query.link}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.vidOne);
          this.data = data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.Error = true;
        });
    },
  },
  created() {
    console.log(this.desc);
    if (this.desc == null && this.$route.query.link == undefined) {
      this.$router.push("/");
    } else {
      this.getDetails();
    }
  },
};
</script>

<style scoped>
.ept {
  margin-bottom: 1rem;
}
.epicES {
  min-height: 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.epic {
  /* overflow: hidden; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 140px;
}
.epiES {
  height: fit-content;

  cursor: pointer;
  display: inline;
  color: #d79943;
  background: black;
  margin: 9px 5px;
  padding: 3px 6px;
  font-size: 1rem;
  font-weight: 600;
}
.epi {
  height: fit-content;
  cursor: pointer;
  display: inline;
  background: #d79943;
  color: black;
  margin: 9px 5px;
  padding: 3px 6px;
  font-size: 1rem;
  font-weight: 600;
}
img {
  position: fixed;
  top: 49px;
  right: 54px;
}
.title {
  font-weight: 700;
  font-size: 1.4rem;
  text-decoration: underline;
}
.priBtn {
  margin: 0px 6px;
  height: 40px;
  border: 1px solid #f4ae53;
  flex-basis: 180px;
  font-size: 2.4rem;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px rgb(0, 0, 0), 2px 4px 2px rgba(0, 0, 0, 0.459);
}
.secBtn {
  flex-basis: 60px;
  margin: 0px 6px;
  height: 38px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.unitBtn {
  margin-top: 10px;
  margin-left: -6px;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: #f4ae53;
}
.empty {
  font-size: 2rem;
  text-align: center;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 4px 2px rgba(0, 0, 0, 0.541);
  font-weight: 900;
  text-decoration: none;
  width: 260px;
  vertical-align: 20px;
  margin-top: 2rem;
}
.lood {
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  color: #d79947;
}
.text {
  margin-left: 1rem;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.315), 0px 2px 1px rgba(0, 0, 0, 0.541);
  font-size: 1.3rem;
}
.cartbtn {
  max-width: 180px;
}
.sItem {
  margin: 0px 4px;
  border: 1px solid #d79947;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-weight: 400;
  color: #d79947;
}
.size {
  display: flex;
  margin-top: 2rem;
}
h2 {
  margin-top: 5rem;
  font-size: 2.5rem;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 4px 2px rgba(0, 0, 0, 0.541);
}
h1 {
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 4px 2px rgba(0, 0, 0, 0.541);
  font-size: 4rem;
  margin-left: 1rem;
  margin-top: 6rem;
}

.container {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  color: #d79947;
}
.container2 {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}
.details {
  flex-basis: 60%;
  margin: 12px;
  margin-left: 40px;
  max-width: 400px;
}
.detImg {
  flex-basis: 40%;
  display: flex;
  align-items: flex-end;
}
@media (max-width: 800px) {
  img {
    position: static;
  }
  .detImg {
    order: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .details {
    order: 2;
    text-align: center;
    margin: 0px;
    margin-left: 0px;
    max-width: 400px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -65px;
    max-width: 100%;
  }
  .text {
    margin-left: 0px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    flex-direction: column;
  }
}
</style>
