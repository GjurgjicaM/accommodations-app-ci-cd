# Accommodations Application - CI/CD

## Project Overview

This project implements a web application for managing accommodations, hosts, and the countries they originate from. The application allows users to:

- Add new accommodations and hosts
- Edit existing entries
- Delete entries
- Leave reviews for accommodations

The **backend** is built using **Java Spring Boot**, while the **frontend** is developed with **React** + **Vite**. Communication between the frontend and backend is handled via **REST API** using **Axios**.

As part of this CI/CD project, the application has been:

- Containerized using **Docker** and **Docker Compose**
- Deployed and orchestrated using **Kubernetes** (deployments, services, ingress)
- Integrated with **GitHub Actions** for continuous integration
- Configured to automatically build and push Docker images to **Docker Hub** on each push to the `master` branch

## Technologies and Tools Used

- [Docker](https://www.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Kubernetes](https://kubernetes.io/)
- [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Java Spring Boot](https://spring.io/projects/spring-boot)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [PostgreSQL](https://www.postgresql.org/)


