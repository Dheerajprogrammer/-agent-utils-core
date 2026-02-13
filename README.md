# @agent-utils/core

Core utility functions for building **reliable, predictable AI agents**.  
Framework-agnostic • LLM-optional • Production-friendly.

> Think of this as **lodash for AI agents**.

---

## ✨ Why this package exists

Every AI agent ends up re-building the same foundational logic:
- input normalization  
- intent detection  
- entity extraction  
- command parsing  
- guardrails  
- confidence scoring  
- lightweight memory helpers  

`@agent-utils/core` provides these **boring but essential utilities**, so you can focus on business logic—not plumbing.

---

## 📦 Installation

```bash
npm install @agent-utils/core
```

---

## 🧩 What’s included

| Category | Utilities |
|-------|---------|
Normalization | normalizeBudget, normalizePhone, normalizeText |
Intent | detectIntent |
Entities | extractEntities |
Commands | parseCommand |
Guardrails | withinWorkingHours, rateLimit |
Scoring | confidenceScore |
Memory | summarizeConversation |

---

## 🚀 Quick Example

```ts
import {
  normalizeBudget,
  detectIntent,
  extractEntities,
  parseCommand,
  confidenceScore
} from "@agent-utils/core";

normalizeBudget("around 1 cr");
detectIntent("I want to visit this weekend");
```

---

## 📄 License

MIT
