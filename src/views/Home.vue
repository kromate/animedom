<template>
  <div class="is-flex conf">
    <div class="is-flex w-50">
      <input
        class="input"
        type="text"
        placeholder="Name of the Anime"
        v-model="searchValue"
      />
      <button class="button" @click="search">Search</button>
    </div>

    <div>
      <Loader v-if="loading" />
      <div v-else-if="searchResult.length">
        <div
          class="card "
          v-for="(n, index) in searchResult"
          :key="index"
          @click="direct(n.link, n.image)"
        >
          <img :src="n.image" class="res-img" />
          <span class="name">{{ n.name }}</span>
          <span> {{ n.release }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  components: { Loader },
  name: "Home",
  data() {
    return {
      link: "",
      showModal: true,
      loading: false,
      searchValue: ""
    };
  },
  computed: {
    searchResult() {
      return this.$store.state.searchArray;
    }
  },

  methods: {
    direct(link, image) {
      // this.$store.commit("updateDesc", { link: link, image: image });
      // this.$router.push("about");
      // this.link = link;
      // this.showModal = true;

      this.$router.push({
        name: "About",
        query: { link: link, image: image }
      });
    },
    search() {
      this.loading = true;
      let value = encodeURIComponent(this.searchValue);
      // https://anime-web-scraper.herokuapp.com/search/?name=haikyu
      fetch(`https://anime-web-scraper.herokuapp.com/search/?name=${value}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.$store.commit("addsearchedRes", data);
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          alert("something went wrong");
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
.res-img {
  max-width: auto;
  height: 100px;
  margin-right: 0.5rem;
}
.name {
  flex: 70%;
  margin-right: 5px;
}
.card {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background: #daefd6;
  cursor: pointer;
  width: 300px;
  min-height: 60px;
  height: auto;
  display: flex;
  flex-basis: 100%;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  margin: 12px 4px;
  border-radius: 4px;
}
p {
  text-align: center !important;
  justify-content: center;
  font-size: 1.2rem;
}
progress {
  width: 50%;
  margin: 0px auto;
}
.is-uni {
  background: rgb(20, 117, 85);
  border: transparent;
  color: white;
}

.conf {
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
button {
  margin: 7px;
  width: 100px;
  background: rgb(20, 117, 85);
  border: transparent;
  color: white;
  font-size: 0.9rem;
}

button:hover {
  background: rgb(20, 117, 85);
  border: transparent;
  color: white;
}
input {
  width: 290px;
  max-width: 85vw;
  border: 1px solid rgb(65, 88, 24);
  margin: 7px;
}
.w-50 {
  max-width: 90vw;
  margin: 0px auto;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
</style>
