import { StdSelectButton } from "@/components/StdSelectButton";
import { GiSwordInStone, GiBroadsword, GiSwordsPower } from 'react-icons/gi';

const capitalize = str => str[0].toUpperCase() + str.slice( 1 );

const ButtonGroup = ( { label, filters } ) => {
    const labels = {
        faction: ["protoss", "zerg", "terran"],
        difficulty: ["beginner", "intermediate", "expert"]
    }[label];

    const difficultyIcons = {
        "beginner": <GiSwordInStone />,
        "intermediate": <GiBroadsword />,
        "expert": <GiSwordsPower />
    }

    return <div className="flex flex-col text-center my-4 items-center">
        <h3 className="w-2/3 border-b-2 text-sm border-gray-700 text-gray-300 uppercase tracking-widest mb-2 leading-3">
            { capitalize( label ) }
        </h3>
        <div className="flex">
            { labels.map( ( l, i ) =>
                <StdSelectButton
                    label={ l }
                    selection={ filters[l] }
                    hasBackground={ label === "faction" }
                    icon={ label === "difficulty" && difficultyIcons[l] }
                    key={ i }
                />
            ) }
        </div>
    </div>;
}

export { ButtonGroup };