<template>
  <div>
    <div class="photo-grid">

      <div v-for="photo in photos" :key="photo.id" class="photo-card">
        <img :src="photo.urls.regular" :alt="photo.description" />
        <div class="photo-info">
          <h3>{{ photo.user.name }}</h3>
          <p>{{ photo.user.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Photo } from "~/types/photo";

defineProps<{
  photos: Photo[];
}>();
</script>

<style></style>
