import React from "react";
import { TimelineCard } from "@/pages/index/components/TimelineCard";
import { TimelineLine } from "@/pages/index/components/TimelineLine";
import { Timeline } from "@/pages/index/components/Timeline";

const IndexPage = () => {
    const items = [{
        title: "Stage 1",
        subtitle: "Initial MVP",
        body: [
            "Core features",
            ["Account creation via Auth0",
                "Build creation tool",
                "Build submission",
                "Find builds via search / filter",
                "Search bar",],
            "Basic design with DaisyUI",
            ["Implement proper design system later",],
            "API with ASP.NET Core"
        ]
    }, {
        title: "Stage 2",
        subtitle: "Expanding core features",
        body: [
            "Add build branching under conditions to build creation tool",
            "Build list pages",
            ["Commenting",
            "Favorite",
            "Rating",],
            "Replay upload built with Go",
            "Unit comparison",
            "Blog section / blog writers",
            "User roles",
            ["Content creators, moderators, etc"],
        ]
    },
        {
            title: "Stage 3",
            subtitle:
                "UI/UX Polish",
            body:
                [
                    "Remove DaisyUI (used primarily for MVP mock up)",
                    "Page transitions",
                    "More transitions / effects",
                ]
        },
        {
            title: "Stage 4",
            subtitle:
                "Getting ready for release",
            body:
                [
                    "Implement notification system with email",
                    "Monitoring",
                    "Logging",
                    "Scalability preparations",
                    "Security auditing"
                ]
        }
    ]

    return (
        <>
            <div className="body-panel">
                <article className="h-[80vh]">Example intro</article>
                <Timeline items={ items } />
            </div>
            {/*<div className="absolute w-full h-[150vh] parallelogram bg-gray-900/50 -z-5 top-[60vh]"/>*/ }
        </>
    )
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

export default IndexPage;
