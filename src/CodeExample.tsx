import Highlight from 'react-highlight'
import 'highlight.js/styles/github.css';
import {useState} from "react";

export function CodeExample() {
    const codeString = `<form action="https://abcwebforms.com/submit" method="POST">

    <!-- Replace with your Access Key -->
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

    <!-- Form Inputs. Each input must have a name="" attribute -->
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>

    <!-- Honeypot Spam Protection -->
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

    <button type="submit">Submit Form</button>

</form>`

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
        <div className={'bg-yellow-700 h-fit rounded-xl text-left'}>
            <div className={'bg-green-300 h-[50px] rounded-t-xl flex items-center px-2'}>
                <p className={'text-left text-gray-800 w-fit text-2xl'}>
                    Example Form
                </p>
                <button className={`bg-gray-700 size-9 ml-auto rounded-md duration-300 ${animCopy&&'w-32'}`}
                        onClick={handleCopyClick}>
                </button>
            </div>
            <Highlight className={'rounded-b-xl'}>
                <pre>
                    <code>
                    {codeString}
                    </code>
                </pre>
            </Highlight>
        </div>
    )
}