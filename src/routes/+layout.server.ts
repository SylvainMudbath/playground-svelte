import { env } from '$env/dynamic/private';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	console.log('env.VERCEL_ANALYTICS_ID_____', env.VERCEL_ANALYTICS_ID)
	return { analyticsId: env.VERCEL_ANALYTICS_ID };
}
