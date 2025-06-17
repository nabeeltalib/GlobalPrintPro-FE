import { useState } from "react";
import { X, ExternalLink, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoreIframeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StoreIframeModal({ isOpen, onClose }: StoreIframeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold brand-navy">Global Print Co Product Store</h2>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.promoplace.com/globalprintco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close store"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Store Content */}
        <div className="flex-1 relative">
          <iframe
            src="https://www.promoplace.com/globalprintco"
            className="w-full h-full border-0"
            title="Global Print Co Product Store"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
            loading="lazy"
          />
          
          {/* Loading Overlay */}
          <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading product catalog...</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Browse our complete product catalog with live pricing and availability
            </div>
            <Button
              onClick={onClose}
              variant="outline"
              className="px-6"
            >
              Close Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}