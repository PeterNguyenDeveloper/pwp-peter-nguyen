import React from "react";

export function ExampleContactForm() {
    const [email, setEmail] = React.useState('');

    return (
        <div className="max-w-[400px] mx-auto text-gray-900 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800 text-center">Default Behavior</h1>
            <form
                action={`https://onelineforms.com/${email}`}
                className="flex flex-col gap-6 mt-6"
                method="POST"
            >
                <div>
                    <label htmlFor="email"
                           className="block text-lg font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message"
                           className="block text-lg font-medium text-gray-700">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        className="mt-2 p-3 border border-gray-300 rounded-lg w-full resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                        placeholder="Enter your message here..."
                    />
                </div>
                <input type="checkbox"
                       name="botcheck"
                       className="hidden"/>
                <button
                    type="submit"
                    className="mt-6 py-3 px-6 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                >
                    Submit Form
                </button>
            </form>
        </div>
    );
}
