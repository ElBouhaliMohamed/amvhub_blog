<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="w-full p-4 mx-auto mb-20 sm:w-3/4 md:w-1/2">
    <div class="flex justify-center w-full">
      <img :src="article.img">
    </div>
    <h1 class="py-4 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
      {{ article.title }}
    </h1>
    <div class="bg-white">
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900">
            <a href="#" class="hover:underline"> {{ article.author }} </a>
          </p>
          <p class="text-sm text-gray-500">
            <a href="#" class="hover:underline"> {{ article.createdAt }}</a>
          </p>
        </div>
      </div>
    </div>
    <article class="prose lg:prose-xl">
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>
<style>
</style>
