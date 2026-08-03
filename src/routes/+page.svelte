<script lang="ts">
    import '$lib/layout.css';
    import { Input, ThemeInit } from '$lib';

</script>

<ThemeInit defaults={{ defaultSeedColor: '#3d5cff', defaultMode: 'dark', defaultVariant: 'vibrant' }} />

<Input type="text" class="mb-4" name="email" label="Email" />
<Input type="password" class="mb-7" label="Password" name="password" />