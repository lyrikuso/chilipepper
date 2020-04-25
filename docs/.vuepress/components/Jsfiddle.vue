<template>
<clientOnly>
  <script async :src="src"></script>
</clientOnly>
</template>

<script>
export default {
  props: ["src"]
}
</script>