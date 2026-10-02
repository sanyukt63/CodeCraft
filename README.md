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
├── Backend/
├── index.html
├── learning.html
├── jcatalog.html
├── jcontact.html
├── signin.html
├── signup.html
├── script.js
└── style.css
```

## ▶️ Run Locally

Clone the project:

```bash
git clone https://github.com/sanyukt63/CodeCraft.git
cd CodeCraft
```

For the static frontend, open `index.html` in a browser or serve the directory with a local HTTP server.

For the backend:

```bash
cd Backend
npm install
node server.js
```

The backend starts on `http://localhost:8080`.

## 🧭 Learning Flow

1. Choose a topic from the catalog.
2. Read the lesson and examples.
3. Practice with the related challenge.
4. Take a quiz to check understanding.
5. Review progress and continue to the next module.

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

## 📌 Status

CodeCraft is an evolving project. Contributions that make the learning experience simpler, faster, or more useful are especially welcome.
