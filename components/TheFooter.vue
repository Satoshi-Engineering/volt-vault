<template>
  <div class="flex justify-end py-2 gap-">
    <GithubLink />
    <UDivider
      orientation="vertical"
      :ui="{ border: { base: 'border-text' } }"
      class="h-7 mt-1"
    />
    <VersionBadge />
  </div>
</template>
