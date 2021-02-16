<template>
  <div class="is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
    <div class="is-flex w-50">
      <input class="input is-link" type="text" placeholder="Link input" />
      <button class="button is-info">Info</button>
    </div>

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
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.w-50 {
}
</style>
