
import Vue from "vue"

declare module "vue/types/vue" {
  interface Vue {
    readonly $style: Record<string, any>
  }
}
