pr<template>
  <div :class="[modal ? 'is-active' : '', 'modal']">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button" @click="close">Cancel</button>
      </footer>
    </div>
  </div>
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
    getDetails() {
      this.data = {};
      console.log(
        `https://us-central1-kromtech-archive.cloudfunctions.net/GetDownloadLink/?link=${this.link}`,
      );
      fetch(
        encodeURI(`https://us-central1-kromtech-archive.cloudfunctions.net/YT/?link=${this.link}`, {
          mode: "no-cors",
        }),
      )
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

<style></style>
