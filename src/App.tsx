import './App.css';
import { CodeExample } from "./CodeExample.tsx";
import { InfoBoxGroup } from "./InfoBoxGroup.tsx";
import { ExampleContactForm } from "./ExampleContactForm.tsx";
import {RedirectFormExample} from "./RedirectFormExample.tsx";

export default function App() {
    return (
        <section className="min-h-screen">
            <section className="mx-auto max-w-[1000px]">
                <section className="bg-teal-600 text-center py-16 px-4 sm:px-8 rounded-lg shadow-xl">
                    <div className="flex justify-center items-center space-x-4">
                       {/* <img
                            src="/react.svg"
                            alt="Company Icon"
                            className="w-12 h-12"
                        />*/}
                        <h1 className="text-4xl font-bold text-white">OneLineForms</h1>
                    </div>
                    <h2 className="mt-4 text-3xl font-semibold text-white">Submit your HTML forms</h2>
                    <p className="mt-2 mb-4 text-lg text-teal-100">No backend</p>
                    <CodeExample/>
                    <h2 className="mt-4 text-3xl font-semibold text-white">Step 1.</h2>
                    <p className="mt-2 mb-4 text-lg text-teal-100">Replace "youremail@gmail.com" with your email</p>
                    <CodeExample/>
                    <h2 className="mt-4 text-3xl font-semibold text-white">Step 2.</h2>
                    <p className="mt-2 mb-4 text-lg text-teal-100">Make sure each input attribute has a
                        name="unique_name" attribute</p>
                    <CodeExample/>
                    <h2 className="mt-4 text-3xl font-semibold text-white">That's it!</h2>
                    <p className="mt-2 mb-4 text-lg text-teal-100">You will now receive emails</p>
                    <ExampleContactForm/>
                    <h2 className="mt-4 text-3xl font-semibold text-white">Example without redirect</h2>
                    <p className="mt-2 mb-4 text-lg text-teal-100">Different Behavior</p>
                    <RedirectFormExample/>
                    <h2 className="mt-4 text-3xl font-semibold text-white">FAQ</h2>
                    <p className="mt-2 mb-4 text-lg text-teal-100">Common questions</p>
                    <InfoBoxGroup/>
{/*                    <ChatGPTWidget/>*/}
                </section>
            </section>
        </section>
    );
}
