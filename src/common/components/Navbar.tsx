import Link from "next/link";
import React, { useEffect, useState } from "react";

/*
 * type Props = { label: 'Home' | 'Build' | 'Find'; href?: any; onClick?: any };
 * type Ref = HTMLAnchorElement;
 * const Anchor = forwardRef<Ref, Props>(({ onClick, href, label }, ref) => {
 *     return (
 * <a
 *     href={href}
 *     onClick={onClick}
 *     ref={ref}
 *     className="btn btn-ghost btn-sm rounded-btn mx-4"
 * >
 *     {label}
 * </a>
 *     );
 * });
 */

export default function Navbar() {
    const [ searchField, setSearchField ] = useState<string>( "" );

    useEffect( () => {
        const deferInput = setTimeout( () => {
            // console.log( searchField );
            // TODO: add to the search criteria
        }, 500 );

        return () => {
            clearTimeout( deferInput );
        };
    }, [ searchField ] );

    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="px-2 mx-2 navbar-start">
                <Link href="/">
                    <span className="text-lg font-bold">StrategyVault</span>
                </Link>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    <Link href="/build">
                        <a className="btn btn-ghost btn-sm rounded-btn mx-4">Build</a>
                    </Link>
                    <Link href="/find">
                        <a className="btn btn-ghost btn-sm rounded-btn mx-4">Find</a>
                    </Link>
                    <Link href="/p/me">
                        <a className="btn btn-ghost btn-sm rounded-btn mx-4">Account</a>
                    </Link>
                </div>
            </div>
            <div className="navbar-end ml-7">
                <div className="w-48 md:w-96 lg:flex-none">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={ e => setSearchField( e.target.value ) }
                            className="input input-ghost"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
