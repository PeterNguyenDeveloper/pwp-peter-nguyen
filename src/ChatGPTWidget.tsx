import { useState } from "react";
import dotenv from "dotenv";
dotenv.config()

import OpenAI from "openai";

const openai = new OpenAI({
apiKey: process.env.OPENAI_API_KEY,dangerouslyAllowBrowser:true}
);

const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    max_tokens: 10,
    messages: [
        {"role": "user", "content": "write a haiku about ai"},
    ],
});

completion.then((result) => console.log(result.choices[0].message));

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function ChatGPTWidget() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");

    const sendMessage = async () => {
        console.log('Sending message:', input);
        if (!input.trim()) return;
        const userMessage: Message = { role: "user", content: input };
        setMessages([...messages, userMessage]);
        setInput("");

        const response = await fetch("/api/chatgpt", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: [...messages, userMessage] }),
        });

        const data = await response.json();
        const assistantMessage: Message = { role: "assistant", content: data.reply };
        setMessages([...messages, userMessage, assistantMessage]);
    };

    return (
        <div className="fixed bottom-4 right-4 w-80 p-4 bg-white shadow-lg rounded-xl border border-gray-300">
            <div className="h-60 overflow-y-auto p-3 border border-gray-200 rounded-md bg-gray-100">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-2 rounded-md mb-2 text-sm max-w-xs ${msg.role === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-300 text-black self-start mr-auto"}`}
                    >
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="flex gap-2 mt-3">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something..."
                    className="flex-1 p-2 rounded-md border border-gray-300"
                />
                <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-md">Send</button>
            </div>
        </div>
    );
}
