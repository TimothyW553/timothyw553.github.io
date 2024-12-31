import { signal } from "@preact/signals"

export let page = signal<"home" | "about" | "projects">("home");
export let resumeVerbose = signal<boolean>(false);