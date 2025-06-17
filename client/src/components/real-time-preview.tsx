import { useState, useRef, useEffect } from "react";
import { Eye, Download, Share2, RotateCcw, Palette, Type, Upload, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PreviewProduct {
  id: string;
  name: string;
  baseImage: string;
  decorationAreas: Array<{
    id: string;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    maxColors: number;
  }>;
}

const previewProducts: PreviewProduct[] = [
  {
    id: "polo-shirt",
    name: "Classic Polo Shirt",
    baseImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwSDMwMFYzMDBIMTAwVjEwMFoiIGZpbGw9IiM2Mzc1RkYiLz4KPHR5cGUgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgeD0iMjAwIiB5PSIyMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNsYXNzaWMgUG9sbzwvdGV4dD4KPC9zdmc+",
    decorationAreas: [
      { id: "left-chest", name: "Left Chest", x: 120, y: 140, width: 80, height: 60, maxColors: 6 },
      { id: "full-front", name: "Full Front", x: 150, y: 180, width: 100, height: 120, maxColors: 8 },
      { id: "back", name: "Back", x: 150, y: 180, width: 100, height: 120, maxColors: 8 }
    ]
  },
  {
    id: "tumbler",
    name: "Insulated Tumbler",
    baseImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxlbGxpcHNlIGN4PSIyMDAiIGN5PSIyMDAiIHJ4PSI4MCIgcnk9IjEyMCIgZmlsbD0iIzEwQjk4MSIvPgo8dGV4dCBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB4PSIyMDAiIHk9IjIwNSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VHVtYmxlcjwvdGV4dD4KPC9zdmc+",
    decorationAreas: [
      { id: "wrap-around", name: "Wrap Around", x: 130, y: 160, width: 140, height: 80, maxColors: 4 },
      { id: "logo-area", name: "Logo Area", x: 160, y: 180, width: 80, height: 40, maxColors: 3 }
    ]
  },
  {
    id: "notebook",
    name: "Premium Notebook",
    baseImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjEyMCIgeT0iMTAwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzkyNDAwRSIvPgo8dGV4dCBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiB4PSIyMDAiIHk9IjIwNSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Tm90ZWJvb2s8L3RleHQ+Cjwvc3ZnPg==",
    decorationAreas: [
      { id: "cover", name: "Front Cover", x: 140, y: 130, width: 120, height: 60, maxColors: 2 },
      { id: "spine", name: "Spine", x: 190, y: 100, width: 20, height: 200, maxColors: 1 }
    ]
  }
];

export default function RealTimePreview() {
  const [selectedProduct, setSelectedProduct] = useState(previewProducts[0]);
  const [selectedArea, setSelectedArea] = useState(selectedProduct.decorationAreas[0]);
  const [logoText, setLogoText] = useState("Your Company");
  const [logoColor, setLogoColor] = useState("#FFFFFF");
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [logoFile, setLogoFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fonts = [
    "Arial", "Helvetica", "Times New Roman", "Georgia", 
    "Verdana", "Trebuchet MS", "Impact", "Comic Sans MS"
  ];

  const colors = [
    "#FFFFFF", "#000000", "#FF0000", "#00FF00", "#0000FF",
    "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500", "#800080"
  ];

  useEffect(() => {
    setSelectedArea(selectedProduct.decorationAreas[0]);
  }, [selectedProduct]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoFile(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePreview = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw product base
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Draw decoration area highlight
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(selectedArea.x, selectedArea.y, selectedArea.width, selectedArea.height);

      // Draw logo/text
      if (logoFile) {
        const logoImg = new Image();
        logoImg.onload = () => {
          ctx.drawImage(
            logoImg, 
            selectedArea.x + 10, 
            selectedArea.y + 10, 
            selectedArea.width - 20, 
            selectedArea.height - 20
          );
        };
        logoImg.src = logoFile;
      } else {
        ctx.fillStyle = logoColor;
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.textAlign = 'center';
        ctx.fillText(
          logoText, 
          selectedArea.x + selectedArea.width / 2, 
          selectedArea.y + selectedArea.height / 2
        );
      }
    };
    img.src = selectedProduct.baseImage;
  };

  useEffect(() => {
    generatePreview();
  }, [selectedProduct, selectedArea, logoText, logoColor, fontSize, fontFamily, logoFile]);

  const downloadPreview = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `${selectedProduct.name}-preview.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const resetDesign = () => {
    setLogoText("Your Company");
    setLogoColor("#FFFFFF");
    setFontSize(16);
    setFontFamily("Arial");
    setLogoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="real-time-preview" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Zap className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold brand-navy">
              Real-Time Proof & Preview
            </h2>
            <Eye className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            See exactly how your logo will look before you order. Upload your artwork or enter text 
            to create instant visual proofs with accurate placement and sizing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Preview Canvas */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold brand-navy mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-2" />
                Live Preview
              </h3>
              
              <div className="relative bg-white rounded-xl shadow-lg p-6">
                <canvas
                  ref={canvasRef}
                  width={400}
                  height={400}
                  className="w-full max-w-md mx-auto border border-gray-200 rounded-lg"
                />
                
                <div className="mt-4 text-center">
                  <h4 className="font-bold text-lg">{selectedProduct.name}</h4>
                  <p className="text-sm text-gray-600">
                    Decoration Area: {selectedArea.name} ({selectedArea.width}×{selectedArea.height}px)
                  </p>
                  <p className="text-xs text-gray-500">
                    Max Colors: {selectedArea.maxColors}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <Button onClick={downloadPreview} className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download Proof
                </Button>
                <Button variant="outline" onClick={resetDesign}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Configuration Panel */}
          <div className="space-y-6">
            {/* Product Selection */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold brand-navy mb-4">Select Product</h3>
              <div className="grid grid-cols-1 gap-3">
                {previewProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedProduct.id === product.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <h4 className="font-semibold">{product.name}</h4>
                    <p className="text-sm text-gray-600">
                      {product.decorationAreas.length} decoration areas available
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Decoration Area Selection */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold brand-navy mb-4">Decoration Area</h3>
              <div className="space-y-2">
                {selectedProduct.decorationAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area)}
                    className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                      selectedArea.id === area.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{area.name}</span>
                      <span className="text-sm text-gray-600">
                        {area.width}×{area.height}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Design Configuration */}
            <div className="bg-gray-50 rounded-xl p-6">
              <Tabs defaultValue="text" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="text">Text Design</TabsTrigger>
                  <TabsTrigger value="logo">Upload Logo</TabsTrigger>
                </TabsList>

                <TabsContent value="text" className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Type className="w-4 h-4 inline mr-1" />
                      Text Content
                    </label>
                    <input
                      type="text"
                      value={logoText}
                      onChange={(e) => setLogoText(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter your company name or text"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Font Family</label>
                      <select
                        value={fontFamily}
                        onChange={(e) => setFontFamily(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      >
                        {fonts.map((font) => (
                          <option key={font} value={font}>{font}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Font Size</label>
                      <input
                        type="range"
                        min="8"
                        max="32"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="text-center text-sm text-gray-600">{fontSize}px</div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Palette className="w-4 h-4 inline mr-1" />
                      Text Color
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setLogoColor(color)}
                          className={`w-8 h-8 rounded border-2 ${
                            logoColor === color ? 'border-blue-500' : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="logo" className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Upload className="w-4 h-4 inline mr-1" />
                      Upload Logo File
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <p className="text-xs text-gray-600 mt-1">
                      Supported formats: PNG, JPG, SVG. Max size: 10MB
                    </p>
                  </div>

                  {logoFile && (
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Preview:</p>
                      <img src={logoFile} alt="Logo preview" className="max-w-32 max-h-32 border border-gray-300 rounded" />
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            {/* Order Button */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Order?</h3>
              <p className="text-blue-100 mb-4">
                Get instant pricing for your customized design
              </p>
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-white text-blue-600 hover:bg-gray-100 w-full"
              >
                Get Quote for This Design
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}