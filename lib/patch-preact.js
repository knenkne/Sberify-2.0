/**
 * Patch that makes Preact skip noscript contents from "next/image" on the client only
 * https://github.com/vercel/next.js/issues/26621#issuecomment-869042400
 */
import { options } from 'preact';

export const patchPreact = () => {
    const CLIENT = typeof window !== 'undefined';

    const old = options.vnode;
    options.vnode = (vnode) => {
        if (vnode.type === 'noscript' && CLIENT) {
            vnode.props.children = null;
        }
        if (old) old(vnode);
    };
};
