<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .base-input {
    width: 100%;
    padding: 3px 5px;

    border: 1px solid lightgray;
    border-radius: 3px;
  }
</style>
