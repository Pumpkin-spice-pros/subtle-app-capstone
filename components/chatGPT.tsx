"use client";

import { useState } from 'react';
import { OpenAIApi, Configuration } from 'openai';
import { Config } from 'dotenv'
import readline from 'readline';

const openai = new OpenAIApi(new Configuration({ apiKey: "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" }));

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: input}],
        })

        setMessages([...messages, {role: "user", content: input}]);
        setMessages([...messages, {role: "ChatGPT :", content: res.data.choices[0].message.content}]);
        setInput("");
    }

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        <span>{message.role}</span>
                        <span>{message.content}</span>
                    </div>
                ))}
            </div>
            <div>
                <input value={input} onChange={e => setInput(e.target.value)} />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}


export default Chat;
