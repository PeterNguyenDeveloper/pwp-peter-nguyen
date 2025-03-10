import './App.css';
import { CodeExample } from "./CodeExample.tsx";
import { InfoBoxGroup } from "./InfoBoxGroup.tsx";
import { ExampleContactForm } from "./ExampleContactForm.tsx";

export default function App() {
    return (
        <section className="bg-gray-50 min-h-screen">
            <section className="mx-auto max-w-[1000px] text-gray-900">
                <section className="bg-teal-600 text-center py-16 px-4 sm:px-8 rounded-lg shadow-xl">
                    <div className="flex justify-center items-center space-x-4">
                        <img
                            src="/src/assets/react.svg"
                            alt="Company Icon"
                            className="w-12 h-12"
                        />
                        <h1 className="text-4xl font-bold text-white">ABCWebForms</h1>
                    </div>
                    <h2 className="mt-4 text-3xl font-semibold text-white">Submit your HTML forms</h2>
                    <p className="mt-2 text-lg text-teal-100">No backend</p>
                    <CodeExample/>
                    <h2 className="mt-4 text-3xl font-semibold text-white">Step 1.</h2>
                    <p className="mt-2 text-lg text-teal-100">Replace "youremail@gmail.com" with your email</p>
                    <CodeExample/>
                    <h2 className="mt-4 text-3xl font-semibold text-white">That's it!</h2>
                    <p className="mt-2 text-lg text-teal-100">You will now receive emails</p>
                    <ExampleContactForm/>
                    <h2 className="mt-4 text-3xl font-semibold text-white">FAQ</h2>
                    <p className="mt-2 text-lg text-teal-100">Common questions</p>
                    <InfoBoxGroup/>
                </section>
            </section>
        </section>
    );
}
