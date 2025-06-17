import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" }
];

export default function TranslationSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    
    // Add Google Translate functionality
    if (typeof window !== 'undefined' && (window as any).google && (window as any).google.translate) {
      const googleTranslateElement = (window as any).google.translate.TranslateElement;
      new googleTranslateElement({
        pageLanguage: 'en',
        includedLanguages: languages.map(lang => lang.code).join(','),
        layout: googleTranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    } else {
      // Fallback: reload page with language parameter
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language.code);
      window.location.href = url.toString();
    }
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white border-gray-300 hover:bg-gray-50"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{selectedLanguage.flag}</span>
        <span className="hidden md:inline">{selectedLanguage.name}</span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800">Select Language</h3>
            <p className="text-sm text-gray-600">Choose your preferred language</p>
          </div>
          
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 ${
                  selectedLanguage.code === language.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {selectedLanguage.code === language.code && (
                  <span className="ml-auto text-blue-600">✓</span>
                )}
              </button>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-600">
              Translations powered by Google Translate. 
              <br />
              For professional documentation, contact our multilingual support team.
            </p>
          </div>
        </div>
      )}
      
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
}