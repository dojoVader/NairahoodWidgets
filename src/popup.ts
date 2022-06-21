import About from "./components/About.svelte";
import type { IStorage } from "./types";

chrome.storage.sync.get({ count: 0 } as IStorage, ({ count }: IStorage) => {
    const app = new About({
        target: document.body
    });
});
