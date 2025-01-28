<template>
  <div class="flex justify-end item-center">
    <GithubLink />
    <UDivider
      orientation="vertical"
      :ui="{ border: { base: 'border-gray-400' } }"
      class="h-7 mt-1"
    />
    <VersionBadge />
  </div>
</template>
