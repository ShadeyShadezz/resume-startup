# Quick Reference: React & JavaScript Patterns Used

Save this file and reference it for your future projects!

---

## 🔥 Most Important Patterns

### 1. **Extract Constants (Not Magic Numbers)**
```javascript
// ❌ BAD
if (age >= 18) { }

// ✅ GOOD
const LEGAL_ADULT_AGE = 18;
if (age >= LEGAL_ADULT_AGE) { }
```

### 2. **useState for State Management**
```javascript
// ✅ Track state with React
const [count, setCount] = useState(0);

// ✅ Update state
setCount(count + 1);
```

### 3. **Immutable Array Updates (Don't Mutate!)**
```javascript
// ❌ WRONG - Mutates original
items.push(newItem);
setItems(items);

// ✅ CORRECT - Creates new array
setItems([...items, newItem]);
```

### 4. **Use CSS Classes, Not Inline Styles**
```javascript
// ❌ BAD - Clutters component
<div style={{ padding: "1rem", border: "1px solid #ddd" }}>

// ✅ GOOD - Reusable styling
<div className="card">
```

### 5. **Array.map() for Lists**
```javascript
// Transform array into JSX
{items.map((item) => (
  <div key={item.id}>{item.name}</div>
))}
```

### 6. **Array.filter() for Filtering**
```javascript
// Keep only matching items
const active = users.filter((u) => u.isActive);
const admins = users.filter((u) => u.role === "admin");
```

### 7. **Array.find() for Single Item**
```javascript
// Get first matching item
const user = users.find((u) => u.id === userId);
const admin = users.find((u) => u.role === "admin");
```

### 8. **Conditional Rendering**
```javascript
// Show different content based on condition
{isLoading ? <div>Loading...</div> : <div>Content</div>}

{items.length === 0 ? (
  <p>No items yet</p>
) : (
  items.map(...)
)}
```

### 9. **Event Handlers**
```javascript
// Form submission
const handleSubmit = (e) => {
  e.preventDefault();  // Stop page reload
  // handle form data
};

// Input change
const handleChange = (e) => {
  setValue(e.target.value);
};
```

### 10. **Ternary Operator**
```javascript
// condition ? ifTrue : ifFalse
const message = isAdmin ? "Welcome Admin" : "Welcome User";
const count = items.length === 0 ? "No items" : items.length;
```

---

## 🛠️ Common Operations

### Get Value from Input/Form
```javascript
// From form element
const name = e.target.name.value;

// From input directly
const value = e.target.value;

// From checkbox
const isChecked = e.target.checked;
```

### Add Item to Array
```javascript
const newArray = [...oldArray, newItem];
setArray(newArray);
```

### Remove Item from Array
```javascript
const newArray = oldArray.filter((item) => item.id !== idToRemove);
setArray(newArray);
```

### Update Item in Array
```javascript
const newArray = oldArray.map((item) =>
  item.id === idToUpdate
    ? { ...item, ...updatedData }
    : item
);
setArray(newArray);
```

### Create Copy of Object
```javascript
// Shallow copy
const copy = { ...original };

// With modifications
const modified = { ...original, newField: value };
```

### Conditional Class
```javascript
{isActive && "class-name"}
{isActive ? "class-if-true" : "class-if-false"}
```

---

## 📋 Checklist Before Committing Code

- [ ] No inline styles (use CSS classes)
- [ ] No magic numbers (use constants)
- [ ] No DOM manipulation (`getElementById`, `querySelector`)
- [ ] Using React state for data
- [ ] Array updates are immutable (using spread operator or filter/map)
- [ ] Functions have single responsibility
- [ ] Code is organized with comments
- [ ] Event handlers are named (`handleClick`, `handleChange`, etc.)
- [ ] No unused imports
- [ ] Key prop on all list items
- [ ] Form has `onSubmit` handler with `e.preventDefault()`

---

## 🎨 CSS Best Practices

### Structure
```css
/* 1. Reset */
* { margin: 0; padding: 0; }

/* 2. Base styles */
body { font-family: ...; }

/* 3. Component classes */
.card { ... }

/* 4. States */
.card:hover { ... }
.card:focus { ... }

/* 5. Utilities */
.text-center { text-align: center; }
.mt-2 { margin-top: 2rem; }
```

### Naming Convention
```css
/* Descriptive names */
.card              /* good */
.card-header       /* good */
.card-active       /* good */
.c                 /* ❌ bad */
.card1             /* ❌ bad */
.box-shadow-small  /* ❌ too verbose */
```

### Common Utilities
```css
.text-center { text-align: center; }
.mt-1 { margin-top: 1rem; }
.mt-2 { margin-top: 2rem; }
.mb-1 { margin-bottom: 1rem; }
.mb-2 { margin-bottom: 2rem; }
.p-1 { padding: 1rem; }
.p-2 { padding: 2rem; }
```

---

## 🔍 Debugging Tips

### Check State
```javascript
console.log("Current state:", applicants);
```

### Check Event
```javascript
const handleClick = (e) => {
  console.log("Event:", e);
  console.log("Target:", e.target);
  console.log("Value:", e.target.value);
};
```

### Check Array Operations
```javascript
// Verify map() works
const names = users.map((u) => u.name);
console.log("Names:", names);

// Verify filter() works
const active = users.filter((u) => u.active);
console.log("Active:", active);

// Verify find() works
const admin = users.find((u) => u.role === "admin");
console.log("Admin:", admin);
```

### Use React DevTools
- Install React DevTools browser extension
- Inspect component state in real-time
- Trace re-renders

---

## 📚 File Organization Example

```
project/
├── src/
│   ├── components/
│   │   ├── Card.jsx          # Reusable components
│   │   ├── Button.jsx
│   │   └── Form.jsx
│   ├── pages/
│   │   ├── Home.jsx          # Full page components
│   │   ├── Applicants.jsx
│   │   └── Projects.jsx
│   ├── App.jsx               # Main component
│   ├── main.jsx              # Entry point
│   └── styles.css            # Global styles
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Common Mistakes to Avoid

### ❌ Mistake #1: Mutating State
```javascript
// ❌ WRONG
state.array.push(item);
setState(state);

// ✅ CORRECT
setState([...state.array, item]);
```

### ❌ Mistake #2: Forgetting Key in Lists
```javascript
// ❌ WRONG
{items.map((item) => <div>{item.name}</div>)}

// ✅ CORRECT
{items.map((item) => <div key={item.id}>{item.name}</div>)}
```

### ❌ Mistake #3: Inline Objects/Arrays
```javascript
// ❌ WRONG - New object created on every render
<Component style={{ color: "red" }} />

// ✅ CORRECT - Define outside or use class
const styles = { color: "red" };
<Component style={styles} />
<Component className="red" />
```

### ❌ Mistake #4: Not Preventing Default
```javascript
// ❌ WRONG - Page reloads
const handleSubmit = (e) => {
  // form submission happens
};

// ✅ CORRECT
const handleSubmit = (e) => {
  e.preventDefault();  // stops default behavior
  // your code
};
```

### ❌ Mistake #5: Direct DOM Access
```javascript
// ❌ WRONG - React doesn't know about it
document.getElementById("input").value = "new value";

// ✅ CORRECT - Use state
const [value, setValue] = useState("");
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

---

## 📱 Responsive CSS Pattern

```css
/* Mobile first */
.card {
  padding: 1rem;
  font-size: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .card {
    padding: 1.5rem;
    font-size: 1.1rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .card {
    padding: 2rem;
    font-size: 1.2rem;
  }
}
```

---

## 🔗 Useful React Hooks Reference

### useState
```javascript
const [state, setState] = useState(initialValue);
```
Use to: Store data that can change

### useEffect
```javascript
useEffect(() => {
  // Run this when component mounts or dependencies change
}, [dependencies]);
```
Use to: Side effects (fetch data, subscriptions, etc.)

### useContext
```javascript
const value = useContext(MyContext);
```
Use to: Access data from context (shared data without props)

---

## 💾 Git Commit Message Template

```
type: subject

Body (optional, more details)

Footer (optional, issue links)

---

Example:
refactor: Clean up inline styles in App.jsx

- Replace inline styles with CSS classes
- Extract magic numbers to constants
- Improve code organization

Fixes #123
```

### Commit Types
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code cleanup without changing behavior
- `style`: Formatting changes (not CSS)
- `test`: Add/update tests
- `docs`: Update documentation
- `chore`: Dependencies, build tools

---

## 🎓 Learning Resources

### Topics to Study
1. **React Hooks** - useState, useEffect, useContext
2. **Array Methods** - map, filter, find, reduce
3. **Destructuring** - `{ name, age } = person`
4. **Spread Operator** - `[...array]`, `{ ...object }`
5. **Ternary Operator** - `condition ? a : b`
6. **Arrow Functions** - `() => {}`
7. **Template Literals** - `` `Hello ${name}` ``
8. **CSS Flexbox** - For layouts
9. **CSS Grid** - For complex layouts
10. **Git Basics** - push, pull, commit, branch

### Practice Projects
1. Todo app with add/delete/filter
2. Weather app with API calls
3. E-commerce product listing
4. Chat app with local storage
5. Photo gallery with filtering

---

## ✅ Code Review Checklist for Others

When reviewing someone's React code, check:

- [ ] Using proper state management
- [ ] No inline styles (or good reason for them)
- [ ] Functions have single responsibility
- [ ] No console.log() left in code
- [ ] Components are reasonably sized
- [ ] Props are documented
- [ ] Error handling exists
- [ ] No hardcoded values
- [ ] Code is DRY (Don't Repeat Yourself)
- [ ] Comments explain the "why", not the "what"

---

**Bookmark this file and refer back often! 📌**