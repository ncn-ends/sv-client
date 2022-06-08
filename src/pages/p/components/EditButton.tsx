import React from "react";
import { Button } from "@material-ui/core";

type EditBtnProps = {
    editing: boolean,
    onClick: ( value: boolean ) => void
}
type EditBtn = ( props: EditBtnProps ) => JSX.Element;
const EditBtn: EditBtn = ( { editing, onClick } ) => {
    const classListWhileEditing = "btn color-primary"
    const classListWhileDone = "btn bg-green-600"
    const classList = editing
        ? classListWhileDone
        : classListWhileEditing;

    const buttonText = editing
        ? "Done"
        : "Edit";

    return <button
        className={ classList }
        onClick={ () => onClick( !editing ) }
    >{ buttonText }</button>
};

export default EditBtn;