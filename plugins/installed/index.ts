// Written by the admin panel when plugins are installed or removed. Don't edit it by hand.
import { type GoodfellowPlugin, installedPlugin } from "@goodfellow-cms/core";
import plugin0 from "goodfellow-plugin-gutenberg";

export const installedPlugins: GoodfellowPlugin[] = [
  installedPlugin(plugin0, {"name":"goodfellow-plugin-gutenberg","release":"0.1.1","version":1,"title":"Gutenberg","description":"Edit pages in WordPress's block editor, Gutenberg, in place of Puck.","permissions":{},"admin":true,"editor":{"title":"Gutenberg","kinds":["page","header","footer","template"]}}),
];
