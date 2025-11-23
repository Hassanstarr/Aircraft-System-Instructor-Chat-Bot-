import { useEffect, useRef } from 'react';
import { useChat } from '@/hooks/useChat';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import Sidebar from '@/components/Sidebar';
import { Loader2 } from 'lucide-react';
import { getQuickFact } from '@/lib/aircraftKnowledge';

const Index = () => {
  const { messages, isLoading, sendMessage, clearChat } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (userMessage: string) => {
    const quickFact = getQuickFact(userMessage);
    if (quickFact) {
      console.log('Quick fact:', quickFact);
    }
    sendMessage(userMessage);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar onNewChat={clearChat} />
      
      <main className="flex-1 flex flex-col">
        <header className="bg-card border-b border-border px-6 py-4">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            ✈️ AI Virtual Instructor for Aircraft Systems
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Ask anything about hydraulics, propulsion, avionics, electrical systems, brakes, and more.
          </p>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4 max-w-2xl">
                <div className="text-6xl mb-4">✈️</div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Welcome to Your Aircraft Systems Instructor
                </h2>
                <p className="text-muted-foreground">
                  Start by asking a question about any aircraft system. I'm here to help you understand hydraulics, turbofan engines, avionics, electrical systems, brakes, flight controls, and more!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                  <button
                    onClick={() => handleSendMessage("How does a turbofan engine work?")}
                    className="p-4 bg-muted hover:bg-accent rounded-lg text-left transition-colors"
                  >
                    <p className="font-medium">How does a turbofan engine work?</p>
                  </button>
                  <button
                    onClick={() => handleSendMessage("Explain aircraft hydraulic systems")}
                    className="p-4 bg-muted hover:bg-accent rounded-lg text-left transition-colors"
                  >
                    <p className="font-medium">Explain aircraft hydraulic systems</p>
                  </button>
                  <button
                    onClick={() => handleSendMessage("What is fly-by-wire technology?")}
                    className="p-4 bg-muted hover:bg-accent rounded-lg text-left transition-colors"
                  >
                    <p className="font-medium">What is fly-by-wire technology?</p>
                  </button>
                  <button
                    onClick={() => handleSendMessage("How do aircraft brakes work?")}
                    className="p-4 bg-muted hover:bg-accent rounded-lg text-left transition-colors"
                  >
                    <p className="font-medium">How do aircraft brakes work?</p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Instructor is typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        <div className="border-t border-border bg-card px-6 py-4">
          <div className="max-w-4xl mx-auto">
            <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
