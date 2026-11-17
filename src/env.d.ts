/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  setLang(lang: string): void;
  setTheme(theme: "light" | "dark"): void;
  showTip(el: HTMLElement, content: string): void;
}
