# ✈️ AI Virtual Instructor for Aircraft Systems  
An interactive AI-powered learning tool that helps aviation and engineering students understand **complex aircraft systems** through a conversational interface and clean UI.

This project is built using **React + Vite + TypeScript + Tailwind + ShadCN UI**, with a backend function (Supabase Edge Function or API Route) powered by **Groq’s latest Llama model**.

The AI explains concepts like:

- Hydraulics  
- Propulsion  
- Avionics  
- Flight controls  
- Electrical systems  
- Fuel systems  
- Landing gear  
- Environmental control systems  
- And more...

---
## 🗂️ Project File Structure

```
src/
│ components/           → Reusable UI components (buttons, cards, dialogs…)
│ hooks/                → Custom React hooks
│ integrations/
│   └ supabase/         → Supabase client setup and helper utilities
│ lib/                  → Utility functions, config helpers
│ pages/                → Page-level React components (routing views)
│ App.tsx               → Main React component
│ main.tsx              → App entry point
│ index.css             → Global Tailwind stylesheet
│ App.css               → Component-level css overrides
│ vite-env.d.ts         → TypeScript env definitions

supabase/
│ functions/
│   └ aircr...
│       └ index.ts      → Supabase edge function (serverless backend)

public/
│ index.html            → Root HTML

package.json            → Dependencies, scripts
tailwind.config.ts      → Tailwind configuration
tsconfig.json           → TypeScript config
vite.config.ts          → Vite bundler config
README.md               → Project documentation
```

---

## 🔑 Environment Variables (`.env`)

All Supabase credentials must be placed inside **`.env`** (not committed to GitHub):

```
VITE_SUPABASE_PROJECT_ID="your-project-id"
VITE_SUPABASE_URL="https://your-project-id.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="your-anon-public-key"
```

These variables are used by the frontend and Supabase integration in `src/integrations/supabase/`.

---

## 🧩 Technologies Used

### **Frontend**
- **Vite** – ultra‑fast dev server + bundler  
- **React 18** – UI framework  
- **TypeScript** – type safety  
- **Tailwind CSS** – utility‑first styling  
- **shadcn/ui** – beautifully designed component library  
- **React Router** – client‑side routing  
- **TanStack Query** – data fetching + caching  
- **Lucide Icons** – modern icon pack  

### **Backend**
- **Supabase**  
  - PostgreSQL database  
  - Auth system  
  - Storage  
  - Edge Functions (serverless)  

Supabase Edge Functions (inside `supabase/functions/...`) use TypeScript and run on Deno.

---

## 🧠 Optional AI / Python LLM Module (Course Material)

The course teaches building LLM-powered applications using:

### **Python + Streamlit**
Used for building an interactive AI interface.

Example:

```python
import streamlit as st
from transformers import pipeline

generator = pipeline("text-generation", model="gpt2")

st.title("Mini LLM Demo")
prompt = st.text_input("Enter prompt")

if st.button("Generate"):
    result = generator(prompt, max_length=100)
    st.write(result[0]["generated_text"])
```

### **HuggingFace Spaces Deployment**
1. Create repo on HuggingFace  
2. Upload `app.py`, `requirements.txt`  
3. Select **Space Type: Streamlit**  
4. Deploy instantly  

This Python AI module is **separate** from the Vite frontend but can be linked using API calls.

---

## ⚙️ Installation

Clone the project:

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```sh
npm install
```

Create a `.env` file:

```sh
cp .env.example .env   # or create manually
```

Add your Supabase credentials.

Run development server:

```sh
npm run dev
```

Build production bundle:

```sh
npm run build
```

Preview build locally:

```sh
npm run preview
```

---

## 🌐 Deployment (GitHub → Vercel)

### **1. Push project to GitHub**

```sh
git add .
git commit -m "Initial commit"
git push origin main
```

### **2. Deploy to Vercel**
- Go to **vercel.com**  
- Import GitHub repository  
- Add ENV variables in **Project Settings → Environment Variables**  
- Vercel auto-detects Vite and deploys it

### **3. Supabase Setup**
Inside **supabase dashboard**:
- Create project  
- Copy **Project URL**  
- Copy **Public Anon Key**  
- Paste into `.env` and Vercel Environment

---

## 🧪 Supabase Edge Functions

Edge functions live inside:

```
supabase/functions/<your-function>/index.ts
```

Deploy using Supabase CLI:

```sh
supabase functions deploy myFunction
```

Invoke from React frontend:

```ts
const { data, error } = await supabase.functions.invoke("myFunction", {
  body: { example: "data" }
})
```

---

## 📦 Included NPM Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

---

## 📝 Features Provided by This Template

- Production‑ready UI components  
- Modern React architecture  
- Typed Supabase client  
- Dark/light theme support  
- Authentication-ready structure  
- Serverless functions support  
- Easy deployment pipeline  
- Optional AI module (Python + Streamlit)  

---

## 🙌 Contributing

Fork the repo, create a branch, and submit a PR.

---

## 📄 License

This project is released under the **MIT License**.