import { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

import type { Message } from "./types";

type Props = {
  messages: Message[];
  typing: boolean;
};

export default function ChatMessages({
  messages,
  typing,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  return (
    <div className="flex-1 overflow-y-auto px-5 py-6 bg-slate-950/80">

      <div className="space-y-8">

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        {typing && <TypingIndicator />}

        <div ref={bottomRef} />

      </div>

    </div>
  );
}