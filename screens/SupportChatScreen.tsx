import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { aiOrchestrator, AgentResponse } from '../services/aiAgentsService';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  agent?: string;
}

const SupportChatScreen: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: "مرحباً! أنا مساعد Kam Tech الذكي. لدي فريق من الوكلاء المتخصصين لمساعدتك:\n• دعم العملاء\n• مدير الحجوزات\n• محلل الخدمات\n\nكيف يمكنني مساعدتك اليوم؟",
      agent: 'customer_support'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeAgent, setActiveAgent] = useState<string>('customer_support');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // استخدام نظام الوكلاء الذكي
      const response: AgentResponse = await aiOrchestrator.processUserRequest({
        type: 'customer_query',
        query: input,
        userId: 'user_001'
      });

      setActiveAgent(response.agent);

      const modelMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response.message,
        agent: response.agent
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "عذراً، حدث خطأ في النظام. يرجى المحاولة مرة أخرى.",
        agent: 'customer_support'
      };
      setMessages(prev => [...prev, errorMsg]);
    }

    setIsLoading(false);
  };

  const getAgentIcon = (agent?: string) => {
    switch (agent) {
      case 'booking_manager': return 'calendar_month';
      case 'service_analyst': return 'analytics';
      case 'admin_assistant': return 'admin_panel_settings';
      case 'security_monitor': return 'security';
      default: return 'support_agent';
    }
  };

  const getAgentColor = (agent?: string) => {
    switch (agent) {
      case 'booking_manager': return 'from-green-500 to-green-600';
      case 'service_analyst': return 'from-purple-500 to-purple-600';
      case 'admin_assistant': return 'from-orange-500 to-orange-600';
      case 'security_monitor': return 'from-red-500 to-red-600';
      default: return 'from-primary to-blue-600';
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-lg text-slate-900 dark:text-white">مساعد Kam Tech الذكي</h1>
          <span className="text-xs text-green-500 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            {activeAgent === 'customer_support' ? 'دعم العملاء' :
              activeAgent === 'booking_manager' ? 'مدير الحجوزات' :
                activeAgent === 'service_analyst' ? 'محلل الخدمات' : 'متصل'}
          </span>
        </div>
        <div className="w-10"></div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'model' && (
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${getAgentColor(msg.agent)} flex items-center justify-center mr-2 shrink-0`}>
                <span className="material-symbols-outlined text-white text-sm">{getAgentIcon(msg.agent)}</span>
              </div>
            )}
            <div className={`max-w-[80%] rounded-2xl p-4 ${msg.role === 'user'
              ? 'bg-primary text-white rounded-br-none'
              : 'bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white rounded-bl-none'
              }`}>
              <p className="whitespace-pre-line">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${getAgentColor(activeAgent)} flex items-center justify-center mr-2`}>
              <span className="material-symbols-outlined text-white text-sm">{getAgentIcon(activeAgent)}</span>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-none p-4 flex gap-2 items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
        {['كيف أحجز خدمة؟', 'حالة طلبي', 'طرق الدفع', 'تواصل مع الإدارة'].map((question) => (
          <button
            key={question}
            onClick={() => setInput(question)}
            className="shrink-0 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {question}
          </button>
        ))}
      </div>

      <div className="p-4 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="اكتب رسالتك..."
          className="flex-1 bg-gray-100 dark:bg-background-dark border-none rounded-full px-6 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary"
          dir="rtl"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="bg-primary text-white p-3 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
};

export default SupportChatScreen;