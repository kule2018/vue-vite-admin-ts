<template>
    <yxs-view>
        <a-divider orientation="left">大文件上传</a-divider>
        <Breakpoint/>
    </yxs-view>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import Breakpoint from './breakpoint.vue'

export default defineComponent({
    name:'module-fileUpload',
    components: {
        Breakpoint
    },
    setup() {
        return {
            activeKey: ref('1'),
        };
    },
});
</script>