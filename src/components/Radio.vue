<template>
    <div class="flex gap-4 mt-10 text-xl space-y-2">
      <label 
        v-for="option in options" 
        :key="option.value" 
        class="flex items-center space-x-2 cursor-pointer"
      >
        <!-- Hidden radio input to bind the value -->
        <input
          type="radio"
          :value="option.value"
          v-model="localValue"
          class="hidden peer"
        />
        
        <!-- Custom radio circle styling -->
        <div
          class="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center
                 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"
        >
          <div 
            v-if="localValue === option.value" 
            class="w-2 h-2 rounded-full bg-black transition-all "
          ></div>
        </div>
        
        <!-- Label text styling -->
        <span class="text-gray-700 peer-checked:text-blue-500">
          {{ option.label }}
        </span>
      </label>
    </div>
  </template>
  
  <script setup>
  import { computed, toRefs } from 'vue';
  
  // Props definition
  const props = defineProps({
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
  });
  
  // Emits definition
  const emit = defineEmits(['update:modelValue']);
  // Computed property for two-way binding with modelValue
  const localValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });


  </script>
  