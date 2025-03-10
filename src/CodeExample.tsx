import Highlight from 'react-highlight'
import 'highlight.js/styles/github.css';
import { useState } from "react";

export function CodeExample() {
    const codeString = `<form action="https://form-email-r8oy.onrender.com/youremail@gmail.com" method="POST">

    <!-- Form Inputs. Each input must have a name="" attribute -->
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>

    <!-- Honeypot Spam Protection -->
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

    <button type="submit">Submit Form</button>

</form>`;

    const [animCopy, setAnimCopy] = useState(false);

    const handleCopyClick = () => {
        window.navigator.clipboard.writeText(codeString).then(r => {
            console.log(r)
        });
        setAnimCopy(true); // Set state to true on button click
        setTimeout(() => {
            setAnimCopy(false); // Set state to false after 1 second
        }, 1000); // 1000 milliseconds = 1 second
    };

    return (
        <div className="text-left shadow-lg bg-white rounded-xl">
            <div className="bg-teal-500 text-white rounded-t-xl flex items-center justify-between px-4 py-2">
                <p className="text-lg font-semibold">Example Form</p>
                <button
                    className={`bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none transition-all duration-300 transform ${animCopy ? 'w-40' : 'w-20'}`}
                    onClick={handleCopyClick}
                >
                    {animCopy ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <Highlight className="rounded-b-xl">
                <pre>
                    <code>
                        {codeString}
                    </code>
                </pre>
            </Highlight>
        </div>
    );
}
