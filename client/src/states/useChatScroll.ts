import { useEffect, useRef, MutableRefObject } from 'react';

const useChatScroll = <T>(dep: T): MutableRefObject<HTMLDivElement | null> => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [dep]);
    return ref;
};

export default useChatScroll;
