<template>
  <div class="is-flex conf">
    <div class="is-flex w-50">
      <input class="input" type="text" placeholder="Name of the Anime" v-model="searchValue" />
      <button class="button is-uni" @click="search">Search</button>
    </div>

    <div class="mx-4 ">
      <progress class="progress is-uni " max="70" v-if="loading">10%</progress>
      <div class="card p-1 " v-else>
        <header class="card-header">
          <p class="card-header-title ">
            Naruto
          </p>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      loading: false,
      searchValue: "",
    };
  },

  methods: {
    search() {
      let value = encodeURIComponent(this.searchValue);
      console.log(value);
    },
  },
};
</script>

<style scoped>
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
