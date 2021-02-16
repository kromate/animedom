<template>
  <div class="is-flex conf">
    <div class="is-flex w-50">
      <input class="input" type="text" placeholder="Name of the Anime" v-model="searchValue" />
      <button class="button is-uni" @click="search">Search</button>
    </div>

    <div class="mx-4 ">
      <progress class="progress is-uni " max="70" v-if="loading">10%</progress>
      <div v-else-if="searchResult.length">
        <div
          class="card p-1 m-1"
          v-for="(n, index) in searchResult"
          :key="index"
          @click="direct(n.link)"
        >
          <header class="card-header ">
            <p class="card-header-title ">
              {{ n.name }}
              <br />
              {{ n.release }}
            </p>
            <br />
          </header>
        </div>
      </div>
    </div>
    <DescriptionModal />
  </div>
</template>

<script>
import descriptionModal from "@/components/descriptionModal.vue";
export default {
  components: { descriptionModal },
  name: "Home",
  data() {
    return {
      loading: false,
      searchValue: "",
      searchResult: [],
    };
  },

  methods: {
    direct(link) {
      console.log(link);
    },
    search() {
      this.loading = true;
      let value = encodeURIComponent(this.searchValue);
      console.log(value);
      // https://anime-web-scraper.herokuapp.com/search/?name=haikyu
      fetch(`https://anime-web-scraper.herokuapp.com/search/?name=${value}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.searchResult = data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          alert("something went wrong");
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.card {
  background: #daefd6;
  cursor: pointer;
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
.is-uni:hover {
  background: rgb(20, 117, 85);
  border: transparent;
  color: white;
}
.conf {
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
button {
  margin: 7px;
  width: 100px;
}
input {
  width: 290px;
  border: 1px solid rgb(65, 88, 24);
  margin: 7px;
}
.w-50 {
  max-width: 90vw;
  margin: 0px auto;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
