export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.h-EeHgz3.js",app:"_app/immutable/entry/app.C-dlLazz.js",imports:["_app/immutable/entry/start.h-EeHgz3.js","_app/immutable/chunks/DiFDQoIQ.js","_app/immutable/chunks/ZSrVmk2I.js","_app/immutable/entry/app.C-dlLazz.js","_app/immutable/chunks/ZSrVmk2I.js","_app/immutable/chunks/DOw9hhkV.js","_app/immutable/chunks/uPlyAR0U.js","_app/immutable/chunks/B15Wu3Bk.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
