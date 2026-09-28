# 🚀 CodeCraft

> A web-based learning platform for people who want to learn programming by combining explanations, practice, and progress.

## Why CodeCraft?

Learning syntax is easy to start and hard to stick with. CodeCraft is designed around a simple loop:

**Learn → Practice → Test → Track progress**

## ✨ Features

- 📚 Structured programming lessons
- 💻 Practice-focused learning experience
- 🧠 Quizzes and challenges
- 📊 Progress tracking
- 🌐 Multi-page web interface
- 🧩 Backend integration for extending the platform
- 🎯 Beginner-friendly learning flow

## 🧰 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Backend application included in the repository
- **Styling:** Custom CSS
- **Structure:** Modular pages for learning, authentication, catalog, and contact flows

## 📁 Project Structure

```text
CodeCraft/
├── Backend/          # Backend application
├── index.html        # Landing page
├── learning.html     # Learning experience
├── jcatalog.html     # Course/catalog page
├── jcontact.html     # Contact page
├── signin.html       # Sign-in page
├── signup.html       # Sign-up page
├── script.js         # Client-side logic
└── style.css         # Main styles
```

## ▶️ Run Locally

Clone the project:

```bash
git clone https://github.com/sanyukt63/CodeCraft.git
cd CodeCraft
```

For the static frontend, open `index.html` in a browser or serve the directory with a local HTTP server.

If you want to work on the backend, follow the setup instructions inside `Backend/`.

### Backend setup

From the project root, run:

```bash
cd Backend
npm install
node server.js
```

The backend starts on `http://localhost:8080`.

## 🗺️ Roadmap

- [ ] Add a clear course/module data model
- [ ] Improve authentication and user persistence
- [ ] Add more programming exercises
- [ ] Add automated tests
- [ ] Add deployment instructions
- [ ] Improve accessibility and mobile UX
- [ ] Add contributor-friendly issues

## 🤝 Contributing

Ideas, bug reports, documentation improvements, and code contributions are welcome.

1. Fork the repository
2. Create a branch: `git checkout -b feat/your-change`
3. Make your change
4. Test it locally
5. Open a pull request with a clear description

## 🧪 Documentation Checklist

Before opening a pull request, verify that:

- [ ] Setup instructions match the current project structure
- [ ] New features are documented
- [ ] Roadmap items are kept up to date
- [ ] Changes include relevant testing notes

## 📌 Status

CodeCraft is an evolving project. Contributions that make the learning experience simpler, faster, or more useful are especially welcome.

---

⭐ If CodeCraft is useful to you, consider starring the repository and sharing feedback.
