<!-- App.vue -->
<template>
  <div>
    <TemplateSyntax />
    <Methods />
    <ReactivityFundamentals />
    <ComputedProperties />
    <ClassStyleBindings />
    <ListRendering />
    <EventHandling />
    <FormInputBinding />
    <Watchers />
    <Components />
  </div>
</template>

<script>
import TemplateSyntax from "@/components/1.vue";
import Methods from "@/components/2.vue";
import ReactivityFundamentals from "@/3.vue";
import ComputedProperties from "@/components/4.vue";
import ClassStyleBindings from "@/components/5.vue";
import ListRendering from "@/components/6.vue";
import EventHandling from "@/components/7.vue";
import FormInputBinding from "@/components/8.vue";
import Watchers from "@/components/9.vue";
import Components from "@/components/10.vue";


export default {
  components: {
    TemplateSyntax,
    Methods,
    ReactivityFundamentals,
    ComputedProperties,
    ClassStyleBindings,
    ListRendering,
    EventHandling,
    FormInputBinding,
    Watchers,
    Components,
  },
};
</script>
