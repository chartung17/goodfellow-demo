// Written by the admin panel when blocks are installed or removed. Don't edit it by hand.
import type { ComponentConfig, Config } from "@puckeditor/core";
import block0 from "./shadcn-call-to-action/block";
import block1 from "./shadcn-cards/block";
import block2 from "./shadcn-faq/block";
import block3 from "./shadcn-hero/block";
import block4 from "./shadcn-notice/block";
import block5 from "./shadcn-tabs/block";
import block6 from "./shadcn-testimonials/block";

// biome-ignore lint/suspicious/noExplicitAny: blocks have arbitrary props
export const installedBlocks: Record<string, ComponentConfig<any>> = {
  "shadcn-call-to-action": block0,
  "shadcn-cards": block1,
  "shadcn-faq": block2,
  "shadcn-hero": block3,
  "shadcn-notice": block4,
  "shadcn-tabs": block5,
  "shadcn-testimonials": block6,
};

export const installedCategories: NonNullable<Config["categories"]> = {
  "installed-page-sections": { title: "Page sections", components: ["shadcn-call-to-action","shadcn-cards","shadcn-hero","shadcn-notice","shadcn-testimonials"] },
  "installed-interactive": { title: "Interactive", components: ["shadcn-faq","shadcn-tabs"] },
};
