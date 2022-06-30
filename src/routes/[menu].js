import { db } from '$lib/firebase';

export async function get({ params: { menu } }) {
	const snapshot = await db.collection('menus').get();
	snapshot.forEach((doc) => {
		console.log(doc.id, '=>', doc.data());
	});

	return {
		body: { menu }
	};
}
