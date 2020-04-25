<template>
	<p>
		この記事はクロス投稿記事です。<a :href="href" target="_new" rel="nopener noreferrer">こちら</a>でも読めます。
	</p>
</template>

<script>
export default {
  props: ["href"],
  mounted () {
	const doc = document;
	const head = doc.getElementsByTagName("head")[0];
	const meta = doc.createElement("link");
	meta.setAttribute("rel", "canonical");
	meta.setAttribute("href", this.href);
	head.appendChild(meta);
  }
}
</script>