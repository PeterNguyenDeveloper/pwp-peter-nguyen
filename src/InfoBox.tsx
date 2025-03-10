import React from "react";

type Prop = {
    head: string;
    body: string;
}

export function InfoBox(props: Prop) {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <div className={`bg-white shadow-lg ${isOpen?'rounded-t-lg mb-0':'rounded-lg mb-4'} p-6 max-w-[500px] mx-auto`}>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-gray-800">{props.head}</p>
                    <button
                        onClick={() => setOpen(!isOpen)}
                        className="bg-teal-500 text-white rounded-full p-2 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        {isOpen ? '-' : '+'}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="bg-gray-50 max-w-[500px] mx-auto text-left p-6 rounded-b-lg shadow-inner mb-4">
                    <p className="text-gray-700">{props.body}</p>
                </div>
            )}
        </>
    );
}
