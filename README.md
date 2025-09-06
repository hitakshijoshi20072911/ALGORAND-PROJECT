# ALGORAND-PROJECT
# 📩 Suggestion Box DApp (Algorand + TypeScript)

## 📖 Project Description
The **Suggestion Box DApp** is a simple decentralized application built on the **Algorand blockchain** using TypeScript smart contracts.  
It provides a transparent and secure way for users to share their ideas and feedback.  
Once submitted, suggestions are stored immutably on-chain — meaning no one can tamper with or delete them.  

This project is designed to be **beginner-friendly**, making it a great starting point for developers who want to learn how to build and deploy Algorand smart contracts.

---

## 🚀 What it does
- Lets users **submit suggestions** with a title and message.  
- Stores the suggestion in Algorand’s **global state**.  
- Allows anyone to **view the latest suggestion** stored on-chain.  

---

## ✨ Features
- 🔒 **Immutable Storage** – Suggestions are permanently recorded on the blockchain.  
- 📝 **Add Suggestions** – Submit feedback in a decentralized manner.  
- 👀 **View Suggestions** – Retrieve the latest suggestion anytime.  
- 🎯 **Beginner-Friendly** – Easy to read, extend, and experiment with.  

---

Deployed Smart Contract

Contract Address: QVQILFGJ4E6SMTZ2BXWH4YGKXLHKFZDM4HBLS3POFY75R7GKFSZBEJC3OY

---
## 📜 Smart Contract Code
```typescript
import { Contract, GlobalState } from "@algorandfoundation/tealscript";

export class SuggestionBox extends Contract {

  // Global state to store the latest suggestion
  suggestion = GlobalState<string>({ key: "suggestion", initialValue: "" });

  // Function to add a suggestion
  AddSuggestion(title: string, message: string): string {
    this.suggestion.value = title + " - " + message;
    return title;
  }

  // Function to fetch the current suggestion
  GetSuggestion(): string {
    return this.suggestion.value;
  }
}
