

import { computed, ref, defineComponent, onMounted, watch, watchEffect, nextTick } from 'vue';
import { debounce } from 'lodash-es';
const trackMap = new WeakMap();


const ignoreSymbolTypes = new Set(['Symbol(v-cmt)', 'Symbol(v-fgt)']);


export type TrackOptionsType = Record<string, any> | (($el: HTMLElement) => Record<string, any>);

export const track = (options: TrackOptionsType) => {
  return ($el?: any) => {
    if ($el instanceof HTMLElement) {
      const params = typeof options === 'function' ? options($el) : options;
      const key = params.key || $el;
      if (!trackMap.has(key)) {
        trackMap.set(key, params);
        console.log('track', $el, params);
      }
    }
  }
};


export const useTracker = (fn: TrackOptionsType) => {
  const elRef = ref<any>(null);
  // 监听 elRef.value 变化
  watch(elRef, (newVal, oldVal) => {
    if (newVal) {
      track(fn)(newVal);
    }
  })
  return elRef;
}

/** 
 * Tracker 只会曝光 children 节点（且必须为标准的 dom 节点）
 *  */
export const Tracker = defineComponent({
  name: 'Tracker',
  setup(props, { slots }) {
    const children = computed(() => {
      return slots.default?.();
    })
    const getOptions = ($el: HTMLElement) => {
      return {};
    }
    const observer = debounce((newVal: any) => {
      nextTick(() => {
        const vNodes = newVal || [];
        for (const vNode of vNodes) {
          if (ignoreSymbolTypes.has(String(vNode.type))) {
            continue;
          }
          track(getOptions)(vNode.el);
        }
      })
    }, 10);
    watch(children, (newVal, oldVal) => {
      observer(newVal);
    })
    return () => {
      return children.value;
    }
  }
})




