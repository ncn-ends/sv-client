import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import BuildOrderListItem from "@/components/BuildOrderListItem";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";

const buildOrder = [
    {
        unitId: 10,
        uuid: "6d25cc9e-3bb7-447e-a9a5-36c25cdde016",
        note: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
    odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
    quis sem at nibh elementum imperdiet. Duis sagittis ipsum.`,
    },
    {
        unitId: 10, uuid: "6d25cc9e-3bb7-447e-a9a5-36c25cdde013", note: ""
    },
    {
        unitId: 10, uuid: "6d25cc9e-3bb7-447e-a9a5-36c25cdde015", note: ""
    },
    { unitId: 10, uuid: "5d18acb5-bfd9-4a0f-91f7-9966d82e7b14" },
    { unitId: 10, uuid: "d94253e8-022f-4108-98c6-157d0615a31b" },
    { unitId: 10, uuid: "81e2fa95-6417-4090-9490-cceaaa238c05" },
    { unitId: 5, uuid: "ab6a02e6-1cbd-4b94-80c0-576f4e60fbf7" },
    { unitId: 6, uuid: "98ec0fab-6c05-48d4-b102-ed52c43ef1fa" },
    { unitId: 15, uuid: "bb83db64-04c7-4752-b035-497aff09a961" },
];

const BPage = () => {
    const router = useRouter();

    /*
     * const { bid } = router.query;
     * const [ body, setBody ] = useState( {} );
     */

    /*
     * useEffect(() => {
     *     setTimeout(async () => {
     *         const whatever = await fetch('./mockDbData.json');
     *         console.log(whatever);
     *     }, 1000);
     * }, []);
     */

    const TempFaction = "Zerg";
    const factionSigilDetails = {
        w: {
            Protoss: 200,
            Zerg: 225,
            Terran: 200,
        }[TempFaction],
        h: {
            Protoss: 200,
            Zerg: 200,
            Terran: 200,
        }[TempFaction],
        img: {
            Protoss: "https://i.imgur.com/MC1Q1L6.png",
            Zerg: "https://i.imgur.com/WYyMrl7.png",
            Terran: "https://i.imgur.com/cCc3OQK.png",
        }[TempFaction],
    };

    return (
        <>
            <div className="fade-down-base min-h-[100vw]">
                <div
                    className="w-full bg-cover min-h-[40vw] absolute z-5 bg-fixed hidden md:block"
                    style={ { backgroundImage: `url(${ "https://i.imgur.com/EbTQzQb.jpg" })` } }
                >
                    <div className="h-full w-full z-5 absolute fade-down-banner"></div>
                </div>
                <div className=" h-full w-full flex flex-col items-center">
                    <main className="max-w-[55rem] mt-1 md:mt-4 flex flex-col items-center relative z-10 mx-2 md:mx-0">
                        {/* Post: {bid} */ }
                        <div
                            className="rounded-lg md:rounded-2xl p-1 md:p-4 md:pt-5 justify-between flex flex-col bg-base-200 z-20 relative bg-opacity-90 shadow-xl md:scale-90">
                            <div
                                className="bg-base-300 p-4 rounded-md md:rounded-xl w-full flex justify-between pr-6 relative">
                                <a
                                    className="absolute right-3 text-xs bottom-[100%] text-gray-400 md:flex hidden"
                                    href="deviantart.com"
                                >
                                    Artist Credit: Yo
                                </a>
                                <div>
                                    <h1 className="text-2xl tracking-wider uppercase text-center md:text-left">
                                        PvT Cannon Rush
                                    </h1>
                                    <h3 className="text-xs md:text-sm mt-3 tracking-wider flex flex-col md:flex-row justify-between md:text-left text-center">
                                        <span>Created by Ox - 6 days ago</span>
                                        <span className="text-blue-300 hover:text-green-300 cursor-pointer">
                                            <a>#asd #cannonrush #cheese</a>
                                        </span>
                                    </h3>
                                    {/* <h3 className="text-sm mt-2 tracking-wider"></h3> */ }
                                    <h3 className="md:text-sm text-xs mt-4 tracking-wider text-gray-500 text-center md:text-left md:pl-6 md:border-l-2 border-gray-800">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer nec odio. Praesent libero. Sed cursus ante dapibus
                                        diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                                        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                                        augue semper porta. Mauris massa. Vestibulum lacinia arcu
                                        eget nulla. Class aptent taciti sociosqu ad litora torquent
                                        per conubia nostra, per inceptos himenaeos. Curabitur
                                        sodales ligula in libero. Sed dignissim lacinia nunc.
                                    </h3>
                                </div>

                                {/* <Image src={ProtossIcon} /> */ }
                                {/* <Image src={ProtossIcon} /> */ }
                                <div className="w-[250px] justify-end md:flex hidden">
                                    <Image
                                        layout="fixed"
                                        src={ factionSigilDetails.img }
                                        width={ factionSigilDetails.w }
                                        height={ factionSigilDetails.h }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="p-3 z-20 bg-base-200 rounded-xl mt-3 shadow-md">
                            <div className="flex ">
                                <button
                                    className="bg-base-300 text-lg p-4 px-6 rounded-md shadow-xl active:scale-90 transition-all mr-3 text-green-700">
                                    <FaRegThumbsUp />
                                </button>
                                <button
                                    className="bg-base-300 text-lg p-4 px-6 rounded-md shadow-xl active:scale-90 transition-all mr-3 text-red-700">
                                    <FaRegThumbsDown />
                                </button>
                                <button
                                    className="bg-base-300 p-4 rounded-md shadow-xl active:scale-90 transition-all text-sm mr-3"
                                    style={ { color: "#B99100" } }
                                >
                                    Save
                                </button>
                                <button
                                    className="bg-base-300 p-4 rounded-md shadow-xl active:scale-90 transition-all text-sm mr-3 text-blue-600">
                                    Clone/Edit
                                </button>
                                <button
                                    className="bg-base-300 p-4 px-6 rounded-md shadow-xl active:scale-90 transition-all text-xl text-red-700">
                                    <IoFlagSharp />
                                </button>
                            </div>
                            <p className="text-2xs text-gray-400 text-center mt-1">
                                Note: Ratings and editing will be available when account creation is
                                added.
                            </p>
                            <p className="text-2xs text-gray-400 text-center">
                                Decks are saved in cookies until then as well.
                            </p>
                        </div>
                        <div className="p-3 max-w-[calc(.80*55rem)] bg-base-200 mt-4 rounded-lg shadow-md">
                            <ul className="w-full flex flex-col bg-base-300">
                                { buildOrder.map( ( item, index ) => (
                                    <BuildOrderListItem
                                        key={ index }
                                        index={ index }
                                        { ...item }
                                        buildOrderLength={ buildOrder.length }
                                        pageType="bPage"
                                    />
                                ) ) }
                            </ul>
                        </div>
                        {/* <div className="w-96 h-48 bg-base-200"></div> */ }
                    </main>
                </div>
                <div className="h-[50vw] text-gray-500 mt-20 text-center">
                    Anonymous commenting coming in future update
                    <br /> Account creation coming after.
                </div>
            </div>
        </>
    );
};

export default BPage;

/*
 * <div className="sidebar bg-base-300 rounded-xl p-4 w-64 flex flex-col items-center">
 * <button className="btn btn-primary mb-4">Clone/Edit</button>
 * <div className="card shadow bg-base-200 w-full">
 *  <div className="card-body">
 *      <h2 className="card-title">Author</h2>
 *      <p className="">Ox</p>
 *  </div>
 *  <div className="card-body">
 *      <h2 className="card-title">Units</h2>
 *      <p className=""></p>
 *  </div>
 * </div>
 * </div> 
 */
