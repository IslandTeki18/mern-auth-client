import * as React from 'react'

type LabelInputProps = {
    topRightLabel?: string
    bottomLeftLabel?: string
    bottomRightLabel?: string
    placeholder?: string
    type: string
    label: string
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    variant?: string
}

export const LabelInput = (props: LabelInputProps) => {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{props.label}</span>
                {props.topRightLabel && <span className="label-text-alt">{props.topRightLabel}</span>}
            </div>
            <input type={props.type} placeholder={props.placeholder || "Text Here..."} value={props.value} onChange={props.onChange} className={`input input-bordered w-full ${props.variant ? `input-${props.variant}` : null}`} />
            <div className="label">
                {props.bottomLeftLabel && <span className="label-text-alt">{props.bottomLeftLabel}</span>}
                {props.bottomRightLabel && <span className="label-text-alt">{props.bottomRightLabel}</span>}
            </div>
        </label>
    )
}

