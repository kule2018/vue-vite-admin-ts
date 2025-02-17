import {defineComponent, h} from 'vue'
import classes from './index.module.less'

export default defineComponent({
    name: 'yxs-card',
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: true
        },
        class: {
            type: String || null,
            default: null
        }
    },
    setup(props, {slots}) {
        const title = slots.title ? <div class={classes['yxs-card-title']}>{slots.title?.()}</div> : null;
        const classNmae = classes['yxs-card'] + ' ' + props.class;
        return () => (
            <a-skeleton loading={props.loading}>
                <div class={classNmae}>
                    {title}
                    <div class={classes['yxs-card-content']}>{slots.default?.()}</div>
                </div>
            </a-skeleton>
        )
    },
    // 两种写法
    // render(ctx: any) {
    //     const html = [];
    //     if (ctx.$slots.title) {
    //         html.push(h('div', {class: classes['yxs-card-title']}, [ctx.$slots.title?.()]));
    //     }
    //     if (ctx.$slots.default) {
    //         html.push(h('div', {class: classes['yxs-card-content']}, ctx.$slots.default?.()));
    //     }
    //     return h('div', {class: classes['yxs-card'], loading: true}, [html]);
    // }
})
