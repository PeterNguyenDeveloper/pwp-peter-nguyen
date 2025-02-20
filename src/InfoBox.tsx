import React from "react";

type Prop = {
    head: string
    body: string
}

export function InfoBox(props: Prop) {
    const [isOpen, setOpen] = React.useState(false)
    return (
        <>
            <div className={'bg-red-300 flex max-w-[500px] mx-auto'}>
                <p>
                    {props.head}
                </p>
                <button onClick={() => setOpen(!isOpen)}
                        className={'bg-green-300 size-8 ml-auto'}>
                </button>
            </div>
            {isOpen &&
                <div className={'bg-yellow-600 max-w-[500px] mx-auto text-left'}>
                    <p>
                        {props.body}
                    </p>
                </div>
            }
        </>
    );
}