# AI Career Advisor Setup Guide

## Overview
The AI Career Advisor is a submenu widget that appears on your home page, allowing users to ask career-related questions and get AI-powered responses.

## Features
✅ **Floating Widget** - Fixed position in bottom-right corner  
✅ **Collapsible Design** - Toggle open/close with a button  
✅ **Chat History** - Maintains conversation history during session  
✅ **Error Handling** - Graceful error messages if API fails  
✅ **Responsive** - Works on mobile and desktop  
✅ **React Hooks** - Modern state management with no external libraries  

## Setup Instructions

### 1. Create `.env` File
In your project root (`career-lab/`), create a `.env` file:

```bash
VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Important:** Never commit `.env` to version control. It's already added to `.gitignore`.

### 2. Get Your OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key and paste it in your `.env` file

### 3. Verify Installation
The component is already added to:
- ✅ Created: `career-lab/src/components/AICareerAdvisor.jsx`
- ✅ Created: `career-lab/src/components/AICareerAdvisor.css`
- ✅ Updated: `career-lab/src/pages/Home.jsx`

### 4. Run the Application
```bash
npm run dev
```

Visit the home page - you should see a **"🤖 Career Advisor"** button in the bottom-right corner.

## Usage

### For Users
1. Click the **"🤖 Career Advisor"** button
2. Type your career question (e.g., "What skills do I need for data science?")
3. Click **"Ask"** or press **Enter**
4. View AI response and chat history
5. Click **"✕"** to close the widget

### For Developers

#### Component Props
The `AICareerAdvisor` component accepts no props and manages its own state.

#### Customization Options

**Change the button style:**
```jsx
// In AICareerAdvisor.jsx, modify this button:
<button className="ai-advisor-toggle">
  🤖 Career Advisor
</button>
```

**Modify response format:**
```jsx
// Add custom prompt engineering:
content: input + " Within 30-70 words" // Change this line
```

**Adjust position:**
```css
/* In AICareerAdvisor.css */
.ai-advisor-container {
  bottom: 20px;  /* Change vertical position */
  right: 20px;   /* Change horizontal position */
}
```

## Customization Examples

### 1. Change Career Focus
Modify the input placeholder in `AICareerAdvisor.jsx`:
```jsx
placeholder="Ask about tech careers, business skills, or job interviews..."
```

### 2. Add Custom Styling
Update colors in `AICareerAdvisor.css`:
```css
.ai-advisor-toggle {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Change to your brand colors */
}
```

### 3. Pre-fill with Career Pathway Questions
Modify the `getMessage` function to add context:
```jsx
content: `You are a career advisor. User question: ${input}. Respond within 30-70 words.`
```

## Troubleshooting

### ❌ Button doesn't appear
- Check that `AICareerAdvisor` is imported in `Home.jsx`
- Verify CSS file is created

### ❌ "API key not configured" error
- Create `.env` file in project root
- Add `VITE_OPENAI_API_KEY=your_key_here`
- Restart development server: `npm run dev`

### ❌ API returns error
- Verify API key is valid: https://platform.openai.com/api-keys
- Check you have API credits available
- Check OpenAI's status page for service issues

### ❌ Responses are too long/short
- Modify the word count in the prompt:
```jsx
content: input + " Within 20-50 words" // Make shorter
content: input + " Within 50-100 words" // Make longer
```

## Integration with Other Pages
To add the AI Advisor to other pages:

```jsx
// In any page component
import AICareerAdvisor from "../components/AICareerAdvisor.jsx";

export default function YourPage() {
  return (
    <>
      {/* Your page content */}
      <AICareerAdvisor />
    </>
  );
}
```

## Cost Considerations
- OpenAI API is usage-based (pay-as-you-go)
- GPT-3.5-turbo is the most affordable model (~$0.0005 per 1K tokens)
- Each response typically costs < $0.001
- Monitor usage: https://platform.openai.com/usage/overview

## Security Notes
✅ **Never hardcode API keys** - Always use `.env` files  
✅ **Use environment variables** - Accessed via `import.meta.env`  
✅ **Don't commit `.env`** - Already in `.gitignore`  
⚠️ **Be cautious of frontend exposure** - Consider backend proxy for production  

## Future Enhancements
- Add export chat history feature
- Implement persistent storage with localStorage
- Add typing indicators
- Support multiple career pathways
- Implement rate limiting
- Add feedback/rating system

## Files Modified
- `career-lab/src/components/AICareerAdvisor.jsx` - New component
- `career-lab/src/components/AICareerAdvisor.css` - New styling
- `career-lab/src/pages/Home.jsx` - Added component import & usage
- `career-lab/.env` - New environment configuration

## Support
For issues or questions, check:
- OpenAI Documentation: https://platform.openai.com/docs
- React Hooks Guide: https://react.dev/reference/react