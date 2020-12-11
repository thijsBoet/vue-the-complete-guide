<template>
  <dialog open>
    <slot>

    </slot>
  </dialog>
</template>

<style scoped>
  dialog {
    margin: 0;
    position: fixed;
    top: 10vh;
    left: 30%;
    width: 40%;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }
</style>