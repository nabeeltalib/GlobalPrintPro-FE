import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";
import { getSageAPI, type SageSearchParams } from "./sage-api";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote request endpoint
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Quote request submitted successfully! We'll get back to you within 24 hours.",
        data: quoteRequest
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to submit quote request"
        });
      }
    }
  });

  // Get all quote requests (for admin purposes)
  app.get("/api/quote-requests", async (req, res) => {
    try {
      const quoteRequests = await storage.getQuoteRequests();
      res.json(quoteRequests);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch quote requests"
      });
    }
  });

  // SAGE API test endpoint
  app.get("/api/sage/test", async (req, res) => {
    try {
      const sageAPI = getSageAPI();
      const isAuthenticated = await sageAPI.testAuthentication();
      
      if (isAuthenticated) {
        res.json({ 
          success: true, 
          message: "SAGE API credentials verified successfully",
          credentials: {
            username: "Daniel LaCour",
            loginId: "globalprintco",
            apiKey: "ca2e...643"
          }
        });
      } else {
        res.status(401).json({ 
          success: false, 
          message: "SAGE API authentication failed" 
        });
      }
    } catch (error) {
      console.error("SAGE API test error:", error);
      res.status(500).json({ 
        success: false, 
        message: "SAGE API authentication failed",
        error: (error as Error).message 
      });
    }
  });

  // SAGE API endpoints
  app.get("/api/sage/products/search", async (req, res) => {
    try {
      const sageAPI = getSageAPI();
      const searchParams: SageSearchParams = {
        keyword: req.query.keyword as string,
        category: req.query.category as string,
        subcategory: req.query.subcategory as string,
        supplier: req.query.supplier as string,
        minPrice: req.query.minPrice ? parseFloat(req.query.minPrice as string) : undefined,
        maxPrice: req.query.maxPrice ? parseFloat(req.query.maxPrice as string) : undefined,
        decorationMethod: req.query.decorationMethod as string,
        color: req.query.color as string,
        page: req.query.page ? parseInt(req.query.page as string) : 1,
        limit: req.query.limit ? parseInt(req.query.limit as string) : 20
      };

      const results = await sageAPI.searchProducts(searchParams);
      res.json({ success: true, data: results });
    } catch (error) {
      console.error("SAGE API search error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to search products",
        error: (error as Error).message 
      });
    }
  });

  app.get("/api/sage/products/:productId", async (req, res) => {
    try {
      const sageAPI = getSageAPI();
      const product = await sageAPI.getProduct(req.params.productId);
      res.json({ success: true, data: product });
    } catch (error) {
      console.error("SAGE API product error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to get product details",
        error: (error as Error).message 
      });
    }
  });

  app.get("/api/sage/categories", async (req, res) => {
    try {
      const sageAPI = getSageAPI();
      const categories = await sageAPI.getCategories();
      res.json({ success: true, data: categories });
    } catch (error) {
      console.error("SAGE API categories error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to get categories",
        error: (error as Error).message 
      });
    }
  });

  app.get("/api/sage/products/featured", async (req, res) => {
    try {
      const sageAPI = getSageAPI();
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
      const products = await sageAPI.getFeaturedProducts(limit);
      res.json({ success: true, data: products });
    } catch (error) {
      console.error("SAGE API featured products error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to get featured products",
        error: (error as Error).message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
