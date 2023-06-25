# MangaVerse

This repository contains the frontend code for our full-stack web application, which allows users to browse and manage their favorite mangas.

# Deployment

Our app is deployed on Netlify. You can access the live deployment at https://dev--dreamy-donut-2e382b.netlify.app/.

## Key Features

- **Manga Library**: Browse through a comprehensive list of manga.
- **Manga Details**: Access detailed information about each manga, including the first 10 pages.
- **Favorites Functionality**: Add manga to a favorites list and remove them as needed.
- **Authentication**: Secure user authentication for personalized experiences.
- **Responsive Design**: Responsive layout for optimal viewing across devices.
- **Modern JavaScript Framework**: Built using React v18.
- **Backend API**: Utilizes a backend API developed in Node.js for server-side logic and database operations.
- **Modular Codebase**: Well-organized code structure with clear separation of assets, authentication, components, pages, and styles.

## Technologies Used

- Frontend: React, React Router, Axios
- Backend: Node.js, Express, MongoDB
- Deployment: Heroku, Netlify

## Project Description

The Manga Browsing Web App is a full-stack web application built using React on the frontend and Node.js, Express, and MongoDB on the backend. It provides users with an intuitive interface to explore and manage their favorite mangas. Users can browse through a comprehensive library of manga, view detailed information about each manga, including a list of chapters, and add manga to their favorites list.

## Project Structure

The project structure is as follows:

```
public
src
├── assets
│   ├── background.gif
│   └── icon.png
├── components
│   ├── App.js
│   ├── MangaCard.js
│   ├── Navbar.js
│   ├── Search.js
│   └── Signout.js
├── pages
│   ├── Favorites.js
│   ├── Home.js
│   ├── MangaDetails.js
│   ├── Signin.js
│   └── Signup.js
└── styles
    ├── App.css
    ├── Favorites.css
    ├── Home.css
    ├── MangaDetails.css
    ├── Navbar.css
    ├── Search.css
    └── index.css
index.js
.gitignore
LICENSE
README.md
package-lock.json
package.json
```

## Installation and Setup

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/lst68868/project-3-frontend.git`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`

Please ensure that the backend server is running and accessible before starting the frontend server.

## Contributors

This project has been developed by the following contributors:

Lst68868 (Leo) - Technical Lead

- Created the public frontend and backend repositories.
- Deployed the frontend and backend to Netlify and Heroku.
- Conducted code reviews and managed git pulls, merges, and conflicts.
- Made significant contributions to backend and frontend authentication.

AleksBulajic - Project Manager

- Managed group scheduling and delegated responsibilities.
- Conducted and scheduled standup meetings.
- Made significant contributions to backend and frontend authentication.

kevininga - Backend and Database Specialist

- Implemented backend routes and MongoDB integration.
- Collaborated on backend architecture and best practices.

alibay97 (Alison) - Lead Designer and Frontend Developer

- Led frontend design efforts.
- Made significant contributions to frontend development and CSS styling.
- Collaborated on frontend architecture and best practices.

## Contributing

Contributions to the project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature/bug fix: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your commit message"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

Please make sure to follow the code style guide and maintain consistency with the existing codebase.

## Contact

For any inquiries or further information, please feel free to reach out to any of the contributors mentioned above.

We hope you enjoyed your journey into the MangaVerse!
