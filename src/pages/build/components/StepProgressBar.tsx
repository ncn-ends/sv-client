import React from "react";

export default function StepProgressBar( { buildStep, setBuildStep } ) {
    /*
     * const count = useSelector((state: RootState) => state.counter.value);
     * const dispatch = useDispatch();
     */

    const steps = [
        "Whatever",
        "Build Order",
        "Preview/Publish"
    ];

    /*
     * <li className="step step-primary">Whatever</li>
     * <li className="step step-primary">Build Order</li>
     * <li className="step">Preview/Publish</li>
     * <button className="button" onClick={() => dispatch(increment())}>Increment</button>
     * <button className="button" onClick={() => dispatch(decrement())}>Decrement</button>
     */

    return (
        <>
            <ul className="w-full steps">
                { steps.map( ( step, i ) => (
                    <li
                        className={ `step ${ i + 1 <= buildStep ? "step-primary" : "" }` }
                        key={ i }
                    >{ step }</li>
                ) ) }
            </ul>
            <div className="w-full flex justify-between pl-[5%] mt-4 md:mt-0 md:pl-[25%] pr-[5%] md:pr-[25%] ">
                <button
                    disabled={ buildStep === 1 }
                    className="btn text-red-400"
                    onClick={ () => setBuildStep( prev => prev - 1 ) }
                >
                    Back
                </button>
                <button
                    disabled={ buildStep === 3 }
                    className="btn text-green-500"
                    onClick={ () => setBuildStep( prev => prev + 1 ) }
                >
                    Next
                </button>
            </div>
        </>
    );
}
