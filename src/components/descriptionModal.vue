<template>
  <transition name="slide" appear>
    <div class="bg" v-if="modal" @click="close($event)">
      <div class="card">
        <a v-for="(ep, index) in 10" :key="index" :link="ep.link" target="_blank">
          Download (360P - mp4)
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "success",
  props: ["showModal"],
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
    close(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
a {
  background: black;
  margin: 3px;
  color: goldenrod;
  padding: 4px;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(35, 31, 31, 0.893);
  min-width: 100vw;
  min-height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 100px;
}
.card {
  padding: 1rem;
  background: white;
  min-width: 600px;
  max-width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
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
