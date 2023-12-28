<script lang="ts">
  import { onMount } from "svelte";
  import MoonIcon from "../icons/MoonIcon.svelte";
  import SunIcon from "../icons/SunIcon.svelte";

  let theme: string;

  const setTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  };

  const handleClick = () => {
    theme = theme === "light" ? "dark" : "light";
    setTheme();
  };

  onMount(() => {
    theme = localStorage.getItem("theme") ?? "light";
    setTheme();
  });
</script>

<button
  class="rounded-full p-1 text-slate-600 dark:text-slate-100 focus:ring-2 ring-slate-600 dark:ring-slate-100 transition hover:bg-slate-300 dark:hover:bg-gray-500 hover:scale-110"
  on:click={handleClick}
>
  <!-- {theme === "light" ? "🌙" : "🌞"} -->
  {#if theme === "light"}
    <MoonIcon></MoonIcon>
  {:else}
    <SunIcon></SunIcon>
  {/if}
</button>
