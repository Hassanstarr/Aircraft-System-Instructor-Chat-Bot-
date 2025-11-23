import { Message } from '@/hooks/useChat';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={cn("flex w-full mb-4", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
          isUser
            ? "bg-primary text-primary-foreground ml-auto"
            : "bg-muted text-foreground mr-auto"
        )}
      >
        <div className="flex items-start gap-2">
          {!isUser && (
            <span className="text-lg" role="img" aria-label="instructor">
              ✈️
            </span>
          )}
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
