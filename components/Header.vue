<template>
  <nav class="transition-colors duration-700 bg-gray-900 headerContainer">
    <div class="flex items-center justify-center w-full text-center text-white">
      <a target="_blank" :href="AMVHUB_URL">
        <logo />
      </a>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>

.headerContainer {
  @apply fixed flex flex-col z-40 w-full mx-auto items-start py-4 shadow-lg border-0;
}

.avatar {
  @apply h-8 w-8 rounded-full;
  -webkit-transition: width 0.4s, height 0.4s ease-in-out;
  transition: width 0.4s, height 0.4s ease-in-out;
}

@screen md {
  .headerContainer {
    @apply flex-row items-center;
  }
  .logo {
    @apply block;
  }
  .searchBox {
    @apply w-1/4 py-2;
  }

  .searchBox:focus {
    @apply w-5/6;
    outline: none;
  }

}

</style>
