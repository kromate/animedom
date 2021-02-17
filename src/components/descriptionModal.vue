<template>
  <transition name="slide" appear>
    <div v-if="modal">
      <progress class="progress is-uni " max="70" v-if="!data.id && modal">1110%</progress>

      <div :class="[modal ? 'is-active' : '', 'modal']" v-else>
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{{ data.name }}</p>
            <button class="delete" aria-label="close" @click="close"></button>
          </header>
          <section class="modal-card-body">
            {{ data.summary }}
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button" @click="close">Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["showModal", "link"],
  data() {
    return {
      data: {},
      Error: false,
    };
  },
  computed: {
    modal() {
      return this.showModal;
    },
  },
  watch: {
    modal() {
      this.getDetails();
    },
  },

  methods: {
    close() {
      this.data = {};
      this.$emit("close");
    },
    getDetails() {
      this.data = {};
      fetch(`https://anime-web-scraper.herokuapp.com/desc/?link=${this.link}`)
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
};
</script>

<style>
progress {
  width: 50%;
  margin: 0px auto;
}
.is-uni {
  background: rgb(20, 117, 85);
  border: transparent;
  color: white;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  transform: scale(0);
}
</style>
