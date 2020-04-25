<template>
<clientOnly>
	<div is="import-doc" :src="docid"></div>
</clientOnly>
</template>

<script>
export default {
  props: ["id"],
  computed: {
	docid () {
		return `https://api.importdoc.com/document?id=${this.id}`
	}
  }
}
</script>