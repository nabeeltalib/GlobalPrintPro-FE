import { useState } from "react";
import { Phone, Mail, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertQuoteRequest } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InsertQuoteRequest>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    productType: "",
    quantity: "",
    timeline: "",
    details: "",
    newsletter: false,
  });

  const submitQuoteMutation = useMutation({
    mutationFn: async (data: InsertQuoteRequest) => {
      const response = await apiRequest("POST", "/api/quote-requests", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Quote Request Submitted!",
        description: data.message,
      });
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        productType: "",
        quantity: "",
        timeline: "",
        details: "",
        newsletter: false,
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.company || !formData.email) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    submitQuoteMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertQuoteRequest, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold brand-navy">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                If you're looking for a single partner who can handle your print, swag, kitting, warehousing, and global delivery — you've just found them. Let's make your next campaign, event, or employee program the best one yet.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold brand-navy mb-1">Call Us</h4>
                  <p className="text-gray-600">334-796-0770</p>
                  <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 text-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold brand-navy mb-1">Email Us</h4>
                  <p className="text-gray-600">rohitd@globalprintco.com</p>
                  <p className="text-sm text-gray-500">24-hour response guarantee</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold brand-navy mb-1">Rush Orders</h4>
                  <p className="text-gray-600">24-48 hour turnaround available</p>
                  <p className="text-sm text-gray-500">Perfect for last-minute events</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-bold brand-navy mb-4">Why Request a Quote?</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  Free design consultation and mockups
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  Volume pricing and bulk discounts
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  No hidden fees or setup charges
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  Personalized product recommendations
                </li>
              </ul>
            </div>
          </div>

          {/* Quote Request Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold brand-navy">Request Your Free Quote</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours with a personalized quote.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="brand-navy font-medium">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="brand-navy font-medium">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="brand-navy font-medium">Company Name *</Label>
                <Input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your Company Inc."
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="brand-navy font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@company.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="brand-navy font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone || ""}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label className="brand-navy font-medium">Product Interest</Label>
                <Select value={formData.productType || ""} onValueChange={(value) => handleInputChange("productType", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="promotional">Promotional Products</SelectItem>
                    <SelectItem value="apparel">Custom Apparel</SelectItem>
                    <SelectItem value="tech">Tech Accessories</SelectItem>
                    <SelectItem value="bags">Bags & Totes</SelectItem>
                    <SelectItem value="corporate">Corporate Gifts</SelectItem>
                    <SelectItem value="printing">Digital Printing</SelectItem>
                    <SelectItem value="other">Other / Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="brand-navy font-medium">Quantity Needed</Label>
                  <Select value={formData.quantity || ""} onValueChange={(value) => handleInputChange("quantity", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select quantity range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 pieces</SelectItem>
                      <SelectItem value="51-100">51-100 pieces</SelectItem>
                      <SelectItem value="101-500">101-500 pieces</SelectItem>
                      <SelectItem value="501-1000">501-1,000 pieces</SelectItem>
                      <SelectItem value="1000+">1,000+ pieces</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="brand-navy font-medium">Timeline</Label>
                  <Select value={formData.timeline || ""} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="When do you need this?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rush">ASAP (24-48 hours)</SelectItem>
                      <SelectItem value="1-week">Within 1 week</SelectItem>
                      <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="flexible">Flexible timing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="details" className="brand-navy font-medium">Project Details</Label>
                <Textarea
                  id="details"
                  rows={4}
                  value={formData.details || ""}
                  onChange={(e) => handleInputChange("details", e.target.value)}
                  placeholder="Tell us about your project, event, or any specific requirements..."
                  className="mt-2"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="newsletter"
                  checked={Boolean(formData.newsletter)}
                  onCheckedChange={(checked) => handleInputChange("newsletter", Boolean(checked))}
                />
                <Label htmlFor="newsletter" className="text-sm text-gray-600">
                  Yes, I'd like to receive promotional offers and product updates from Global Print Co. (Optional)
                </Label>
              </div>

              <Button
                type="submit"
                disabled={submitQuoteMutation.isPending}
                className="w-full bg-blue-600 text-white hover:bg-blue-700 py-4 text-lg font-semibold"
              >
                {submitQuoteMutation.isPending ? "Submitting..." : "Get My Free Quote"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
