<template>
  <li class="ms-Breadcrumb-listItem">
    <a
      :href="href"
      class="ms-Breadcrumb-itemLink">
      <slot />
    </a>
    <i class="ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"/>
  </li>
</template>
<script>
export default {
  name: 'OuBreadcrumbItem',
  props: {
    href: {
      type: String,
      default: ''
    }
  }
}
</script>
