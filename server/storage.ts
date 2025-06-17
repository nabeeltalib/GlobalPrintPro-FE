import { users, quoteRequests, type User, type InsertUser, type QuoteRequest, type InsertQuoteRequest } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequests(): Promise<QuoteRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private quoteRequests: Map<number, QuoteRequest>;
  private currentUserId: number;
  private currentQuoteId: number;

  constructor() {
    this.users = new Map();
    this.quoteRequests = new Map();
    this.currentUserId = 1;
    this.currentQuoteId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = this.currentQuoteId++;
    const quoteRequest: QuoteRequest = {
      ...insertQuoteRequest,
      id,
      createdAt: new Date(),
    };
    this.quoteRequests.set(id, quoteRequest);
    return quoteRequest;
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values());
  }
}

export const storage = new MemStorage();
