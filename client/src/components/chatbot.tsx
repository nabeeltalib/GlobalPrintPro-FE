import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const predefinedResponses = {
  greeting: "Hello! I'm here to help you with Global Print Co. services. I can assist with product information, pricing, and connecting you with our team. What can I help you with today?",
  products: "We offer premium branded merchandise from top brands like Nike, Yeti, Under Armour, and Moleskine. Our main categories include apparel, drinkware, tech accessories, office supplies, bags, and promotional items. All with zero minimum orders!",
  countries: "We operate in 70+ countries worldwide with local production and fulfillment. This means faster delivery times and no customs delays for your orders.",
  pricing: "Our pricing is competitive with no minimum order quantities. Costs vary by product and customization. For accurate pricing, I'd recommend contacting our team at rohitd@globalprintco.com for a personalized quote.",
  contact: "You can reach us at rohitd@globalprintco.com or call 334-796-0770. Our team is available Mon-Fri 8AM-6PM EST. Would you like me to help you start a quote request?",
  services: "We provide branded swag & giveaways, print & marketing materials, employee kits & onboarding packs, warehousing & fulfillment, premium brand customization, and custom Shopify storefronts.",
  shipping: "We ship globally with local production and fulfillment in 70+ countries. This eliminates customs delays and reduces shipping costs significantly. Many orders can be delivered same-day or within 24 hours.",
  minimums: "No minimum orders required! Whether you need 1 item or 10,000, we can accommodate your needs with the same quality and service.",
  brands: "We partner with premium brands including Nike, Yeti, Under Armour, Moleskine, Adidas, Hydro Flask, JBL, Bose, Anker, and many more. We focus on quality items people actually want to keep.",
  quote: "I'd be happy to help you get a quote! You can fill out our quote form on this page, email rohitd@globalprintco.com directly, or call 334-796-0770. What type of products are you interested in?"
};

const quickReplies = [
  "Product pricing",
  "Global shipping",
  "Premium brands",
  "Get a quote",
  "Zero minimums",
  "Contact team"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: predefinedResponses.greeting,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return predefinedResponses.greeting;
    } else if (message.includes('product') || message.includes('item') || message.includes('merchandise')) {
      return predefinedResponses.products;
    } else if (message.includes('countr') || message.includes('global') || message.includes('international')) {
      return predefinedResponses.countries;
    } else if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return predefinedResponses.pricing;
    } else if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return predefinedResponses.contact;
    } else if (message.includes('service') || message.includes('what do you') || message.includes('what can you')) {
      return predefinedResponses.services;
    } else if (message.includes('ship') || message.includes('deliver') || message.includes('fulfillment')) {
      return predefinedResponses.shipping;
    } else if (message.includes('minimum') || message.includes('moq') || message.includes('small order')) {
      return predefinedResponses.minimums;
    } else if (message.includes('brand') || message.includes('nike') || message.includes('yeti') || message.includes('premium')) {
      return predefinedResponses.brands;
    } else if (message.includes('quote') || message.includes('estimate') || message.includes('proposal')) {
      return predefinedResponses.quote;
    } else {
      return "I'd be happy to help! For specific questions about our services, products, or pricing, I recommend contacting our team directly at rohitd@globalprintco.com or 334-796-0770. They can provide detailed information tailored to your needs.";
    }
  };

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(content),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Global Print Co.</h3>
                <p className="text-sm text-blue-100">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    {message.sender === 'bot' && (
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-4 h-4 text-blue-600" />
                      </div>
                    )}
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                className="flex-1"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}