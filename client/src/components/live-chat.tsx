import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Headphones, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'specialist';
  timestamp: Date;
  type?: 'text' | 'contact' | 'transfer';
}

const specialists = [
  { name: "Sarah Chen", role: "Product Specialist", avatar: "👩‍💼", status: "online" },
  { name: "Mike Rodriguez", role: "Event Solutions", avatar: "👨‍💼", status: "online" },
  { name: "Lisa Park", role: "Corporate Gifts", avatar: "👩‍💼", status: "busy" }
];

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Sarah, your product specialist. I can help you with product selection, pricing, and custom solutions. What brings you to Global Print Co today?",
      sender: 'specialist',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentSpecialist] = useState(specialists[0]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateSpecialistResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return "I'd be happy to provide pricing! Our costs vary by product and quantity, but we offer competitive rates with no minimums. Would you like me to prepare a custom quote? I'll need to know: 1) Product type, 2) Quantity needed, 3) Decoration method, and 4) Timeline.";
    } else if (message.includes('event') || message.includes('trade show') || message.includes('conference')) {
      return "Perfect! We specialize in event solutions. I can connect you with Mike Rodriguez, our Event Solutions specialist, or I can help you right now. For events, we typically recommend: rush production capabilities, on-site delivery options, and backup inventory. What's your event date and location?";
    } else if (message.includes('employee') || message.includes('gift') || message.includes('corporate')) {
      return "Corporate gifting is one of our specialties! Lisa Park handles our corporate gift programs. We can set up employee stores, curated gift boxes, or custom recognition programs. Are you looking for ongoing employee gifts or a specific occasion?";
    } else if (message.includes('minimum') || message.includes('small order')) {
      return "Great news! We have ZERO minimum orders. Whether you need 1 item or 10,000, we treat every order with the same priority. Our on-demand printing allows us to be flexible with quantities. What product are you interested in?";
    } else if (message.includes('rush') || message.includes('urgent') || message.includes('emergency')) {
      return "We understand urgent needs! We offer 24-hour production and same-day delivery in major markets. I can check availability for your specific location and timeline. Where do you need the products delivered and by when?";
    } else if (message.includes('custom') || message.includes('design') || message.includes('logo')) {
      return "Custom work is our specialty! We handle everything from simple logo placement to complex custom designs. Our design team can work with your existing artwork or create something new. Do you have existing brand guidelines or artwork you'd like to use?";
    } else {
      return "I'm here to help with any questions about our products and services. Feel free to ask about pricing, timelines, custom options, or specific product recommendations. You can also call us directly at 334-796-0770 or email rohitd@globalprintco.com for immediate assistance.";
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

    // Simulate specialist typing delay
    setTimeout(() => {
      const specialistResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateSpecialistResponse(content),
        sender: 'specialist',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, specialistResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleContactTransfer = () => {
    const transferMessage: Message = {
      id: Date.now().toString(),
      content: "I'm connecting you with our sales team for immediate assistance. You can also reach us directly:",
      sender: 'specialist',
      timestamp: new Date(),
      type: 'contact'
    };
    
    setMessages(prev => [...prev, transferMessage]);
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center space-x-2"
          aria-label="Chat with specialist"
        >
          <Headphones className="w-6 h-6" />
          <span className="hidden md:inline text-sm font-medium">Chat with Specialist</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">{currentSpecialist.avatar}</span>
              </div>
              <div>
                <h3 className="font-semibold">{currentSpecialist.name}</h3>
                <p className="text-sm text-green-100 flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-1"></div>
                  {currentSpecialist.role}
                </p>
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
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id}>
                  <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className="flex items-start space-x-2 max-w-[85%]">
                      {message.sender === 'specialist' && (
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-xs">{currentSpecialist.avatar}</span>
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
                  
                  {message.type === 'contact' && (
                    <div className="mt-3 bg-blue-50 rounded-lg p-3 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-blue-600" />
                          <span>Call: 334-796-0770</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span>Email: rohitd@globalprintco.com</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">{currentSpecialist.avatar}</span>
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
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleSendMessage("I need a rush order")}
                className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full hover:bg-red-100 transition-colors"
              >
                Rush Order
              </button>
              <button
                onClick={() => handleSendMessage("I need pricing")}
                className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
              >
                Get Pricing
              </button>
              <button
                onClick={handleContactTransfer}
                className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
              >
                Talk to Sales
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about products, pricing, or timelines..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                className="flex-1"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                size="sm"
                className="bg-green-600 hover:bg-green-700"
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