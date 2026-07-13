"use client";

import { useState, type FormEvent } from "react";

type Message = { role: "assistant" | "user"; text: string };

const INITIAL: Message[] = [
  {
    role: "assistant",
    text: "Hi, I'm the Echo Reconnect assistant. Ask me anything about recovering missed calls.",
  },
];

// TODO(backend): connect to a real AI/chat endpoint. This is a scripted
// stand-in so the interface can be designed before that integration exists.
const STUB_REPLY =
  "Thanks for the message. A live agent will pick this up once chat is connected.";

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "assistant", text: STUB_REPLY },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] ${m.role === "user" ? "self-end text-right" : "self-start"}`}
          >
            <p
              className={`inline-block rounded-2xl px-5 py-3 text-left ${
                m.role === "user"
                  ? "bg-ink text-paper"
                  : "bg-surface text-ink"
              }`}
            >
              {m.text}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-10 flex gap-4 border-t border-line pt-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          className="flex-1 rounded-sm bg-transparent text-ink outline-none placeholder:text-ash focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          aria-label="Message"
        />
        <button
          type="submit"
          className="rounded-full bg-ink px-6 py-2.5 text-paper transition-colors hover:bg-accent"
        >
          Send
        </button>
      </form>
    </div>
  );
}
