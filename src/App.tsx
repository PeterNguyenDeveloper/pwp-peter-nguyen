import './App.css'
import {CodeExample} from "./CodeExample.tsx";

export default function App() {
    return (
        <section className={'bg-gray-700'}>
            <section className={'mx-auto max-w-[1000px] text-white'}>
                <section className={'bg-blue-600 text-center h-fit'}>
                    <div className={'bg-red-500 flex items-center'}>
                        <img src="/src/assets/react.svg"
                             alt="Company Icon"/>
                        <h1 className={'text-2xl'}>
                            ABCWebForms
                        </h1>
                    </div>
                    <h1 className={'text-3xl'}>
                        Submit your HTML forms
                    </h1>
                    <p className={'text-xl'}>
                        No backend
                    </p>
                    <button className={'bg-orange-400 p-4 rounded-2xl'}>
                        Create your Access Key
                    </button>
                    <CodeExample/>
                    <div className={'bg-gray-700 flex flex-col p-4 gap-4 max-w-[500px] mx-auto'}>
                        <input className={'bg-gray-500 p-2 outline-0'}
                               placeholder={"Email Address"}/>
                        <button className={'bg-orange-400 p-2'}>Press</button>
                    </div>
                    <h1>
                        Example Contact Form
                    </h1>
                    <p>
                        Requires name attribute
                    </p>
                    <CodeExample/>
                    <h1>
                        Add Access Key
                    </h1>
                    <p>
                        Replace value with your access key
                    </p>
                    <CodeExample/>
                    <h1>
                        That's it!
                    </h1>
                    <p>
                        You will now receive emails
                    </p>
                    <h1>
                        FAQ
                    </h1>
                    <p>
                        Information
                    </p>
                    <p>
                        Information
                    </p>
                    <p>
                        Information
                    </p>
                    <p>
                        Information
                    </p>
                    <p>
                        Information
                    </p>
                    <p>
                        Information
                    </p>
                    <p>
                        Information
                    </p>
                    <div className={'bg-red-500 max-w-[500px] h-fit mx-auto p-4 gap-4 flex flex-col'}>
                        <h1>
                            Get Started!
                        </h1>
                        <p>
                            Power your contact forms
                        </p>
                        <button className={'bg-orange-400 p-2'}>
                            Create your Access Key
                        </button>
                    </div>
                    <footer className={'bg-green-600 h-[200px] flex items-center'}>
                        <p className={'text-4xl mx-auto'}>
                           Site Map
                        </p>
                    </footer>
                </section>
            </section>
        </section>
    )
}