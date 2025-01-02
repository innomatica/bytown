import { browser } from '$app/environment';
import { openDB, type IDBPDatabase } from 'idb';
import { defaultSettings } from './defaults';

export async function getDatabase(): Promise<IDBPDatabase<void>> {
	return await openDB('kanto', 2, {
		async upgrade(db, oldVer, newVer, transaction) {
			if (oldVer === 0) {
				console.log('create a new db');
				// store: keyval
				const store = db.createObjectStore('keyval');
				// key: settings
				store.add(defaultSettings, 'settings');
			} else if (newVer === 2) {
				console.log(`db upgrade from ${oldVer} to ${newVer}`);
				// update all values of the store
				const store = transaction.objectStore('keyval');
				store.put(defaultSettings, 'settings');
			}
		}
	});
}

export async function loadSettings(): Promise<Settings | undefined> {
	if (browser) {
		const db = await getDatabase();
		const data = await db.get('keyval', 'settings');
		console.log('loadSettings:', data);
		return data;
	}
}

export async function saveSettings(data: Settings): Promise<void> {
	if (browser) {
		console.log('saveSettings:', data);
		const db = await getDatabase();
		await db.put('keyval', data, 'settings');
	}
}
