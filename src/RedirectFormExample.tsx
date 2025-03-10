import {useState, ChangeEvent, FormEvent, JSX} from "react";

interface FormData {
    email: string;
    message: string;
}

export function RedirectFormExample(): JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [formMessage, setFormMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault(); // Prevent the default form submission

        setLoading(true); // Set loading state to true while the request is being processed

        const formData: FormData = {
            email,
            message
        };

        fetch('https://form-email-r8oy.onrender.com/ian.minami.02@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.text().then(text => {
                try {
                    return JSON.parse(text);
                } catch {
                    return text;
                }
            }))
            .then((data: string | { message: string }) => {
                setLoading(false); // Reset loading state
                if (typeof data === 'object') {
                    setFormMessage('Message sent successfully!');
                } else {
                    setFormMessage('Message sent successfully!');
                }
                setEmail(''); // Reset email field
                setMessage(''); // Reset message field
            })
            .catch((error: Error) => {
                setLoading(false); // Reset loading state
                setFormMessage('An error occurred while sending the message.');
                console.error('Error:', error);
            });
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setMessage(e.target.value);
    };

    return (
        <div className="max-w-[400px] mx-auto text-gray-900 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800 text-center">Without Redirect</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 mt-6"
            >
                <div>
                    <label htmlFor="email"
                           className="block text-lg font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        onChange={handleEmailChange}
                        value={email}
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
                        onChange={handleMessageChange}
                        value={message}
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
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Submit Form'}
                </button>
            </form>
            {formMessage && (
                <div className={`mt-4 p-4 rounded-lg ${formMessage.includes('error') ? 'bg-red-500' : 'bg-green-500'} text-white`}>
                    {formMessage}
                </div>
            )}
        </div>
    );
}
