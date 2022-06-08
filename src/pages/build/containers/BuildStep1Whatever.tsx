import React from "react";

const WhateverPage = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <main className="px-4 mt-4 max-w-[40rem] w-full">
                    <div className="flex justify-between">
                        <select className="select select-bordered w-[calc(50%-.5rem)]">
                            <option disabled>
                                Faction
                            </option>
                            <option>Protoss</option>
                            <option>Terran</option>
                            <option>Zerg</option>
                        </select>
                        <select className="select select-bordered w-[calc(50%-.5rem)]">
                            <option disabled selected>
                                Difficulty
                            </option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title..."
                            className="input input-bordered bg-base-200"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tags</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Add tags (separated by space)..."
                            className="input input-bordered bg-base-200"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            className="textarea h-28 bg-base-200"
                            placeholder="Description..."
                        />
                    </div>
                </main>
            </div>
        </>
    );
};

export default WhateverPage;