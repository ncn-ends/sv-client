import { AbstractFC } from "../types/main";
import { AppDispatch } from "../redux/store";

type StdInput = AbstractFC<{
    label: string,
    width?: string,
    scale?: string,
    value: string,
    action: AppDispatch
}>


const StdInput: StdInput = ( { label, width = "100%", scale = "1", action, value, ...props } ) => {
    const id = label.toLowerCase() + `TextInput`;

    return (
        <div className="stdInputGroup"
             style={ { width, transform: `scale(${ scale })` } }>
            <input
                type="input"
                placeholder={ label }
                name={ id }
                id={ id }
                required
                autoComplete="off"
                onChange={ action }
                value={ value }
                { ...props }
            />
            <label htmlFor={ id }>{ label }</label>
        </div>
    )
};

export { StdInput }

