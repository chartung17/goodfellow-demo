// Written by the admin panel when blocks are installed or removed. Don't edit it by hand.
import type { ComponentConfig, Config } from "@puckeditor/core";
import block0 from "./custom-html/block";
import block1 from "./shadcn-call-to-action/block";
import block2 from "./shadcn-cards/block";
import block3 from "./shadcn-carousel/block";
import block4 from "./shadcn-faq/block";
import block5 from "./shadcn-hero/block";
import block6 from "./shadcn-notice/block";
import block7 from "./shadcn-tabs/block";
import block8 from "./shadcn-testimonials/block";

// biome-ignore lint/suspicious/noExplicitAny: blocks have arbitrary props
export const installedBlocks: Record<string, ComponentConfig<any>> = {
  "custom-html": block0,
  "shadcn-call-to-action": block1,
  "shadcn-cards": block2,
  "shadcn-carousel": block3,
  "shadcn-faq": block4,
  "shadcn-hero": block5,
  "shadcn-notice": block6,
  "shadcn-tabs": block7,
  "shadcn-testimonials": block8,
};

export const installedCategories: NonNullable<Config["categories"]> = {
  "installed-advanced": { title: "Advanced", components: ["custom-html"] },
  "installed-page-sections": { title: "Page sections", components: ["shadcn-call-to-action","shadcn-cards","shadcn-hero","shadcn-notice","shadcn-testimonials"] },
  "installed-interactive": { title: "Interactive", components: ["shadcn-carousel","shadcn-faq","shadcn-tabs"] },
};
