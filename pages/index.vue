<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="w-full p-4 mx-auto mb-20 sm:w-3/4 md:w-1/2">
    <div class="overflow-hidden bg-white border border-gray-300 rounded-md">
      <ul role="list" class="divide-y divide-gray-300">
        <li v-for="article of articles" :key="article.slug" class="px-6 py-4">
          <div class="flex justify-center w-full">
            <img :src="article.img">
          </div>
          <div class="prose lg:prose-xl">
            <NuxtLink :to="article.slug">
              <h2>{{ article.title }}</h2>
            </NuxtLink>
            <p>by {{ article.author }}</p>
            <p>{{ article.description }}</p>
            <nuxt-content :document="{ body: article.excerpt }" />
            <NuxtLink :to="article.slug">
              Read More...
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'excerpt', 'slug', 'author', 'img'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>

<style>
</style>
