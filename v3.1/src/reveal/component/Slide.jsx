import React from 'react'

const Slide = ({ children, dataTransition  }) => {

    return (
        <section data-transition={dataTransition}>
            {children}
        </section>
    )
}

export default Slide