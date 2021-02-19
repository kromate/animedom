<template>
  <transition name="slide" appear>
    <div class="bg" v-if="modal" @click="$emit('close')">
      <div class="card">
        <div></div>
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
};
</script>

<style scoped>
.bg {
  position: fixed;
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
  min-width: 310px;
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
