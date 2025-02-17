<script setup lang="ts">
const searchQuery = ref('')
const { photos, loading, error, searchPhotos } = useUnsplash()

// const handleSearch = useDebounceFn(() => {
//   searchPhotos(searchQuery.value)
// }, 500)


onMounted(() => {
  searchPhotos()
})
</script>
<template>
  <div class="search-bar-bg">
    <div class="container">
      <div class="search-bar">
         <Input v-model="searchQuery"/>
        <IconsMagnifier class="magnifier"/>
      </div>
  
      <div v-if="loading" class="loading">
        Loading...
      </div>
  
      <div v-else-if="error" class="error">
        {{ error }}
      </div>
  
      <div v-else >
       <Card :photos="photos"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

*{
  font-family: 'Inter', sans-serif;
}

.magnifier{
  position: absolute;
  left: 1rem;
  bottom: 1.6rem;
}
.text-indent{
  text-indent: 1.4rem;
}
</style>

