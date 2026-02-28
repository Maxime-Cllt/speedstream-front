import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.C6CZTBWX.js","_app/immutable/chunks/DOw9hhkV.js","_app/immutable/chunks/ZSrVmk2I.js","_app/immutable/chunks/CfHxjR8V.js","_app/immutable/chunks/uPlyAR0U.js","_app/immutable/chunks/4HpQsPH8.js"];
export const stylesheets = ["_app/immutable/assets/0.CQUCmYJK.css"];
export const fonts = [];
