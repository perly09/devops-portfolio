# DevOps & Cloud Engineer Portfolio Website

This is a modern and professional portfolio website designed to showcase skills and experience as a DevOps and Cloud Engineer.

## Features

- **About Me Section:** A brief introduction, key strengths (automation, CI/CD, cloud architecture, IaC, containerization, orchestration, monitoring).
- **Skills Section:** Tools & Technologies like Docker, Kubernetes, Jenkins, Git, Terraform, Ansible, AWS/GCP/Azure, Linux, CI/CD, Monitoring Tools.
- **Projects Section:** Showcase for real or personal projects with title, description, tech stack, contributions, and links.
- **Resume/CV Download:** Button to download the resume in PDF format.
- **Contact Section:** A simple contact form and social links (GitHub, LinkedIn, Email).
- **Design Preferences:** Clean, professional, dark mode (with optional toggle), responsive design, animated icons, and subtle transitions.

## Technologies Used

- React
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (for icons)
- shadcn/ui (for UI components)

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd devops-portfolio
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` folder with the production-ready build.

## Customization

- **About Me:** Edit `src/App.jsx` to update your introduction and key strengths.
- **Skills:** Modify the `skills` array in `src/App.jsx`.
- **Projects:** Update the `projects` array in `src/App.jsx` with your project details. Remember to change the `github` links.
- **Resume:** Replace `public/AymaneADERDOURCVDevOps.pdf` with your own resume PDF file. Ensure the filename matches the one referenced in `src/App.jsx`.
- **Contact Information:** Update the email link in `src/App.jsx` and configure the contact form submission if needed.
- **Social Links:** Update the GitHub and LinkedIn URLs in `src/App.jsx`.

## Deployment

After building the project, the `dist` folder contains the static files ready for deployment to any static site hosting service (e.g., Netlify, Vercel, GitHub Pages, or Manus hosting platform).

