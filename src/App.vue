<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
body {
  background: rgb(2, 36, 10);
  overflow-x: hidden !important;
}
html {
  overflow-x: hidden !important;
}
* {
  overflow-x: hidden !important;
  font-family: "Poppins", sans-serif;
}
.is-flex {
  display: flex;
}
input {
  padding: 9px 5px;
  border-radius: 3px;
  color: rgb(74, 81, 101);
  border: none;
  outline: none;
  box-shadow: 1px 1px 2px 2px #7d7f88;
  height: 20px;
  background: #f3f1f1;
  font-size: 1rem;
  font-weight: 600;
  color: black;
}

button {
  padding: 9px;
  border-radius: 3px;
  border: none;
  outline: none;
  box-shadow: 1px 1px 2px 2px #1c5a2b99;
  width: 100px;
}
</style>
