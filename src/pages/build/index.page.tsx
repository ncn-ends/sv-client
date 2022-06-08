import { GetServerSideProps } from "next";
import BuildStep1Whatever from "./containers/BuildStep1Whatever";
import BuildStep2BuildOrder from "./containers/BuildStep2BuildOrder";
import BuildStep3PreviewPublish from "./containers/BuildStep3PreviewPublish";
import StepProgressBar from "./components/StepProgressBar";
import { store } from "./logic/store";
import { Provider } from "react-redux";
import React, { useState } from "react";

const BuildPage = (): JSX.Element => {
    /*
     * const [stepNumber, setStepNumber] = useState<number>(1);
     * const count = useSelector((state: RootState) => state.counter.value);
     */
    const [ buildStep, setBuildStep ] = useState<number>( 1 );

    return (
        <Provider store={ store }>
            <StepProgressBar buildStep={ buildStep } setBuildStep={ setBuildStep } />
            {
                {
                    1: <BuildStep1Whatever />,
                    2: <BuildStep2BuildOrder />,
                    3: <BuildStep3PreviewPublish />,
                }[buildStep]
            }
        </Provider>
    );
};

/*
 * export const getServerSideProps: GetServerSideProps = async() => {
 *     try {
 *         return { props: {}, };
 *     }
 *     catch ( err ) {
 *         console.log( err );
 *     }
 * };
 */

export default BuildPage;
