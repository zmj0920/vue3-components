<!-- button.vue -->
<template>
    <button class="k-button" :class="styleClass">
        <Icon v-if="iconFont.iconName && iconFont.position != 'right'" :name="iconFont.iconName" />
        <span class="k-button-text" v-if="slots.default">
            <slot />
        </span>
        <Icon v-if="iconFont.position == 'right' && iconFont.iconName" :name="iconFont.iconName" />
    </button>
</template>

<script lang="ts">
import './style/index.scss'
import { defineComponent, computed, useSlots } from 'vue'
import { buttonProps } from './types'
import Icon from '../icon/icon.vue'
export default defineComponent({
    name: 'k-button',
    props: buttonProps,
    components: { Icon },
    setup(props) {

        const styleClass = computed(() => {
            return {
                [`k-button--${props.type}`]: props.type,
                'is-plain': props.plain,
                'is-round': props.round,
                'is-disabled': props.disabled,
                [`k-button--${props.size}`]: props.size,
            }
        })

        //图标
        const iconFont = computed(() => {
            const iconName = props.icon
            const position = props.iconPosition
            return {
                iconName,
                position
            }
        })

        const slots = useSlots()


        return {
            styleClass,
            Icon,
            iconFont,
            slots
        };
    },
});
</script>
