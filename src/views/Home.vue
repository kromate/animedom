<template>
  <div class="is-flex conf">
    <div class="is-flex w-50">
      <input class="input" type="text" placeholder="Name of the Anime" />
      <button class="button is-uni">Search</button>
    </div>

    <div class="mx-4">
      <progress class="progress is-uni" max="100">30%</progress>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Card header
          </p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
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
