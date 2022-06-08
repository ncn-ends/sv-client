import React, { useEffect } from "react";

const TimelineCard = ( { title, body, place, subtitle } ) => {
    const [isVisible, setVisible] = React.useState( true );
    const domRef = React.useRef();
    useEffect( () => {
        const observer = new IntersectionObserver( entries => {
            entries.forEach( entry => setVisible( entry.isIntersecting ) );
        } );
        observer.observe( domRef.current );
        return () => observer.unobserve( domRef.current );
    }, [] );

    const twVisible = isVisible ? 'is-visible' : ''

    useEffect( () => {
        const cards = Array.from( document.querySelectorAll<HTMLElement>( ".timeline-card" ) );
        const cardsAbove = cards.filter( card => card.dataset.place < place );
        const heightAbove = cardsAbove.reduce( ( acc, card ) => {
            return acc + card.offsetHeight;
        }, 0 );

        const currentCard = document.querySelector<HTMLElement>( `#timeline-card-${ place }` );
        const paddingBetweenCardsAbove = ( 15 * cardsAbove.length );
        currentCard.style.top = heightAbove + paddingBetweenCardsAbove + "px";
    }, [] )

    const bodyMapper = ( point ) => {
        if ( typeof point === "string" ) {
            return <li>{ point }</li>
        }

        return <li style={ { listStyle: "none" } }>
            <ul>
                { point.map( subpoint => <li style={ { listStyle: "circle" } }>{ subpoint }</li> ) }
            </ul>
        </li>
    }

    return (
        <div
            id={ "timeline-card-" + place }
            className={ "timeline-card " + twVisible }
            ref={ domRef }
            data-place={ place }
        >
            <h4>{ title }</h4>
            <h5>{ subtitle }</h5>
            <ul>
                { body.map( bodyMapper ) }
            </ul>
        </div>
    )
}

export { TimelineCard }