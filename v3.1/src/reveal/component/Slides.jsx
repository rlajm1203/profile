import { useRef, useEffect } from 'react'
import Reveal from "reveal.js";

const Slides = ({ children }) => {

    const deckDivRef = useRef(null);
    const deckRef = useRef(null);

    useEffect(() => {

        if (deckRef.current) return;

        deckRef.current = new Reveal(deckDivRef.current, {
            transition: "slide",
            embedded: true,
            disableLayout: true
        });

        deckRef.current.initialize().then(() => {
            // good place for event handlers and plugin setups
        });

        return () => {
            try {
                if (deckRef.current) {
                    deckRef.current.destroy();
                    deckRef.current = null;
                }
            } catch (error) {
                console.log(error);
                console.warn("Reveal.js 종료 실패");
            }
        };
    }, []);

    return (
        <>
            <div className='reveal' ref={deckDivRef}>
                <div className='slides'>
                    {children}
                </div>
            </div>
        
        </>
    )
}

export default Slides