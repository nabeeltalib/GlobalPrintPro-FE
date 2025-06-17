import { useState, useRef, useEffect } from "react";
import { Upload, Download, RotateCcw, ZoomIn, ZoomOut, Move, Palette, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MockupTemplate {
  id: string;
  name: string;
  category: string;
  baseImage: string;
  placementAreas: Array<{
    id: string;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    perspective: 'flat' | 'curved' | 'angled';
  }>;
  colors: string[];
}

const mockupTemplates: MockupTemplate[] = [
  {
    id: "polo-white",
    name: "Classic Polo Shirt - White",
    category: "Apparel",
    baseImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGOUZBRkIiLz48cGF0aCBkPSJNODAgMTAwSDE2MFYxMjBIODBWMTAwWiIgZmlsbD0iI0Y5RkFGQiIvPjxwYXRoIGQ9Ik04MCA5MEgzMjBWNDUwSDgwVjkwWiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjRTVFN0VCIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIxMjAiIGN5PSIxNDAiIHI9IjMwIiBmaWxsPSIjRjNGNEY2IiBzdHJva2U9IiNEMUQ1REIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNSA1Ii8+PHRleHQgeD0iMTIwIiB5PSIxNDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Q0EzQUYiIGZvbnQtc2l6ZT0iMTAiPkxPR088L3RleHQ+PC9zdmc+",
    placementAreas: [
      { id: "left-chest", name: "Left Chest", x: 90, y: 110, width: 60, height: 60, rotation: 0, perspective: 'flat' },
      { id: "center-chest", name: "Center Chest", x: 150, y: 150, width: 100, height: 80, rotation: 0, perspective: 'flat' },
      { id: "full-front", name: "Full Front", x: 120, y: 200, width: 160, height: 200, rotation: 0, perspective: 'flat' }
    ],
    colors: ["#FFFFFF", "#000000", "#1F2937", "#3B82F6", "#EF4444"]
  },
  {
    id: "tumbler-steel",
    name: "Stainless Steel Tumbler",
    category: "Drinkware", 
    baseImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGOUZBRkIiLz48ZWxsaXBzZSBjeD0iMjAwIiBjeT0iMjUwIiByeD0iNjAiIHJ5PSIxODAiIGZpbGw9InVybCgjZ3JhZGllbnQpIiBzdHJva2U9IiNEMUQ1REIiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjE3MCIgeT0iMjAwIiB3aWR0aD0iNjAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0iI0YzRjRGNiIgc3Ryb2tlPSIjRDFENURCIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LXNpemU9IjEwIj5MT0dPPC90ZXh0PjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjNGNEY2Ii8+PHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNGRkZGRkYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFNUU3RUIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=",
    placementAreas: [
      { id: "wrap", name: "Wrap Around", x: 170, y: 200, width: 60, height: 100, rotation: 0, perspective: 'curved' },
      { id: "logo-spot", name: "Logo Spot", x: 180, y: 220, width: 40, height: 40, rotation: 0, perspective: 'curved' }
    ],
    colors: ["#E5E7EB", "#000000", "#3B82F6", "#EF4444", "#10B981"]
  },
  {
    id: "tote-canvas",
    name: "Canvas Tote Bag",
    category: "Bags",
    baseImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGOUZBRkIiLz48cGF0aCBkPSJNMTAwIDEyMEgzMDBWNDAwSDEwMFYxMjBaIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNEMUQ1REIiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMjAgODBIMTUwVjEyMEgxMjBWODBaIiBmaWxsPSIjRTVFN0VCIi8+PHBhdGggZD0iTTI1MCA4MEgyODBWMTIwSDI1MFY4MFoiIGZpbGw9IiNFNUU3RUIiLz48cmVjdCB4PSIxNDAiIHk9IjE4MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI4MCIgcng9IjUiIGZpbGw9IiNGM0Y0RjYiIHN0cm9rZT0iI0QxRDVEQiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI1IDUiLz48dGV4dCB4PSIyMDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlDQTNBRiIgZm9udC1zaXplPSIxMCI+TE9HTzwvdGV4dD48L3N2Zz4=",
    placementAreas: [
      { id: "center", name: "Center Front", x: 140, y: 180, width: 120, height: 80, rotation: 0, perspective: 'flat' },
      { id: "bottom", name: "Bottom Corner", x: 120, y: 320, width: 80, height: 40, rotation: 0, perspective: 'flat' }
    ],
    colors: ["#FFFFFF", "#F3F4F6", "#000000", "#1F2937", "#DC2626"]
  },
  {
    id: "mug-ceramic",
    name: "Ceramic Coffee Mug",
    category: "Drinkware",
    baseImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGOUZBRkIiLz48cGF0aCBkPSJNMTIwIDIwMEgyNDBWMzUwSDEyMFYyMDBaIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNEMUQ1REIiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0yNDAgMjMwSDI4MFYyODBIMjQwVjIzMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0QxRDVEQiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iMTQwIiB5PSIyNDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiIHJ4PSI1IiBmaWxsPSIjRjNGNEY2IiBzdHJva2U9IiNEMUQ1REIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNSA1Ii8+PHRleHQgeD0iMTkwIiB5PSIyNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Q0EzQUYiIGZvbnQtc2l6ZT0iMTAiPkxPR088L3RleHQ+PC9zdmc+",
    placementAreas: [
      { id: "front", name: "Front Face", x: 140, y: 240, width: 100, height: 60, rotation: 0, perspective: 'curved' },
      { id: "wrap", name: "Full Wrap", x: 125, y: 220, width: 130, height: 100, rotation: 0, perspective: 'curved' }
    ],
    colors: ["#FFFFFF", "#000000", "#3B82F6", "#EF4444", "#F59E0B"]
  }
];

export default function MockupGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState(mockupTemplates[0]);
  const [selectedArea, setSelectedArea] = useState(selectedTemplate.placementAreas[0]);
  const [selectedColor, setSelectedColor] = useState(selectedTemplate.colors[0]);
  const [uploadedArtwork, setUploadedArtwork] = useState<string | null>(null);
  const [artworkScale, setArtworkScale] = useState(100);
  const [artworkRotation, setArtworkRotation] = useState(0);
  const [artworkX, setArtworkX] = useState(0);
  const [artworkY, setArtworkY] = useState(0);
  const [savedMockups, setSavedMockups] = useState<string[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const categories = Array.from(new Set(mockupTemplates.map(template => template.category)));

  useEffect(() => {
    setSelectedArea(selectedTemplate.placementAreas[0]);
    setArtworkX(0);
    setArtworkY(0);
    setArtworkScale(100);
    setArtworkRotation(0);
  }, [selectedTemplate]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedArtwork(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateMockup = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create colored base image
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    // Draw base template
    const img = new Image();
    img.onload = () => {
      tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
      
      // Apply color overlay for colored products
      if (selectedColor !== '#FFFFFF') {
        tempCtx.globalCompositeOperation = 'multiply';
        tempCtx.fillStyle = selectedColor;
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.globalCompositeOperation = 'source-over';
      }

      // Draw to main canvas
      ctx.drawImage(tempCanvas, 0, 0);

      // Draw placement area highlight
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(selectedArea.x, selectedArea.y, selectedArea.width, selectedArea.height);

      // Draw uploaded artwork
      if (uploadedArtwork) {
        const artworkImg = new Image();
        artworkImg.onload = () => {
          ctx.save();
          
          // Calculate artwork position and size
          const scale = artworkScale / 100;
          const artworkWidth = selectedArea.width * scale;
          const artworkHeight = selectedArea.height * scale;
          
          const centerX = selectedArea.x + selectedArea.width / 2 + artworkX;
          const centerY = selectedArea.y + selectedArea.height / 2 + artworkY;

          // Apply transformations
          ctx.translate(centerX, centerY);
          ctx.rotate((artworkRotation * Math.PI) / 180);
          
          // Apply perspective effects based on placement area
          if (selectedArea.perspective === 'curved') {
            // Simulate curved surface with transform
            ctx.transform(1, 0, -0.1, 1, 0, 0);
          } else if (selectedArea.perspective === 'angled') {
            // Simulate angled surface
            ctx.transform(1, 0, 0.1, 0.9, 0, 0);
          }

          ctx.drawImage(
            artworkImg,
            -artworkWidth / 2,
            -artworkHeight / 2,
            artworkWidth,
            artworkHeight
          );

          ctx.restore();
        };
        artworkImg.src = uploadedArtwork;
      }
    };
    img.src = selectedTemplate.baseImage;
  };

  useEffect(() => {
    generateMockup();
  }, [selectedTemplate, selectedArea, selectedColor, uploadedArtwork, artworkScale, artworkRotation, artworkX, artworkY]);

  const downloadMockup = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `${selectedTemplate.name}-mockup.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  };

  const saveMockup = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png', 1.0);
    setSavedMockups(prev => [...prev, dataUrl]);
  };

  const resetArtwork = () => {
    setUploadedArtwork(null);
    setArtworkScale(100);
    setArtworkRotation(0);
    setArtworkX(0);
    setArtworkY(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="mockup-generator" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold brand-navy mb-6">
            Professional Mockup Generator
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Upload your artwork and see exactly how it will look on any promotional product. 
            Create professional mockups for presentations, approvals, and marketing materials.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mockup Canvas */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold brand-navy">Live Mockup</h3>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={saveMockup}>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button onClick={downloadMockup}>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
              
              <div className="relative bg-gray-50 rounded-xl p-6">
                <canvas
                  ref={canvasRef}
                  width={400}
                  height={500}
                  className="w-full max-w-md mx-auto border border-gray-200 rounded-lg bg-white"
                />
                
                <div className="mt-4 text-center">
                  <h4 className="font-bold text-lg">{selectedTemplate.name}</h4>
                  <p className="text-sm text-gray-600">
                    {selectedArea.name} • {selectedArea.perspective} surface
                  </p>
                </div>
              </div>
            </div>

            {/* Saved Mockups */}
            {savedMockups.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold brand-navy mb-4">Saved Mockups</h3>
                <div className="grid grid-cols-3 gap-4">
                  {savedMockups.slice(-6).map((mockup, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={mockup} 
                        alt={`Saved mockup ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-gray-200"
                      />
                      <Button
                        size="sm"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.download = `saved-mockup-${index + 1}.png`;
                          link.href = mockup;
                          link.click();
                        }}
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Product Selection */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold brand-navy mb-4">Select Product</h3>
              
              <Tabs defaultValue={categories[0]} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  {categories.map(category => (
                    <TabsTrigger key={category} value={category} className="text-xs">
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {categories.map(category => (
                  <TabsContent key={category} value={category} className="space-y-3">
                    {mockupTemplates
                      .filter(template => template.category === category)
                      .map(template => (
                        <button
                          key={template.id}
                          onClick={() => setSelectedTemplate(template)}
                          className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                            selectedTemplate.id === template.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <h4 className="font-semibold text-sm">{template.name}</h4>
                          <p className="text-xs text-gray-600">
                            {template.placementAreas.length} placement areas
                          </p>
                        </button>
                      ))}
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Color Selection */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold brand-navy mb-4">Product Color</h3>
              <div className="grid grid-cols-5 gap-2">
                {selectedTemplate.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded border-2 ${
                      selectedColor === color ? 'border-blue-500 scale-110' : 'border-gray-300'
                    } transition-all`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Placement Area */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold brand-navy mb-4">Placement Area</h3>
              <div className="space-y-2">
                {selectedTemplate.placementAreas.map(area => (
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
                      <span className="font-medium text-sm">{area.name}</span>
                      <span className="text-xs text-gray-600 capitalize">
                        {area.perspective}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Artwork Upload */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold brand-navy mb-4">Upload Artwork</h3>
              
              <div className="space-y-4">
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    PNG, JPG, SVG supported. High resolution recommended.
                  </p>
                </div>

                {uploadedArtwork && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <img 
                        src={uploadedArtwork} 
                        alt="Uploaded artwork" 
                        className="max-w-20 max-h-20 mx-auto border border-gray-300 rounded"
                      />
                    </div>

                    {/* Artwork Controls */}
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">Scale ({artworkScale}%)</label>
                        <input
                          type="range"
                          min="25"
                          max="200"
                          value={artworkScale}
                          onChange={(e) => setArtworkScale(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Rotation ({artworkRotation}°)</label>
                        <input
                          type="range"
                          min="-45"
                          max="45"
                          value={artworkRotation}
                          onChange={(e) => setArtworkRotation(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-sm font-medium mb-1">Position X</label>
                          <input
                            type="range"
                            min="-50"
                            max="50"
                            value={artworkX}
                            onChange={(e) => setArtworkX(Number(e.target.value))}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Position Y</label>
                          <input
                            type="range"
                            min="-50"
                            max="50"
                            value={artworkY}
                            onChange={(e) => setArtworkY(Number(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" onClick={resetArtwork} className="w-full">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset Artwork
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Order CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold mb-2">Ready to Order?</h3>
              <p className="text-purple-100 mb-4 text-sm">
                Get instant pricing for your custom design
              </p>
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-white text-purple-600 hover:bg-gray-100 w-full"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}