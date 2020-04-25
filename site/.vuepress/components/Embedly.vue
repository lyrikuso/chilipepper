<template>
  <div>
    <blockquote class="embedly-card">
      <h4>
        <a :href="link">
          {{ title }}
        </a>
      </h4>
      <p>
        {{ description }}
      </p>
    </blockquote>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["link", "title", "description"]
}
</script>