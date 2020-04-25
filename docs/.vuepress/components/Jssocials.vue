<template>
    <div>
        <clientOnly>
            <div v-sharethis="text"></div>
        </clientOnly>
    </div>
</template>

<script>
export default {
    props: [
        "context"
    ],
    directives: {
        sharethis: {
            bind (el,binding,vnode) {
                const doc = document.createElement("div");
                doc.innerHTML = binding.value;
                const text = (binding.value !== "") ? $(doc).text() + "／" + document.title : document.title;
                $(el).jsSocials({
                    shareIn: "popup",
                    showCount: false,
                    showLabel: false,
                    text: text,
                    shares: ["facebook", "twitter"]
                });
            }
        }
    },
    computed: {
        text () {
            return _.isUndefined(this.context) ? "" : this.context
        }
    }
}
</script>