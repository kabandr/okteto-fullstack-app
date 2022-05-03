# okteto-fullstack-app

# What is this?

This repo contains an example of a basic full stack web application with Okteto cloud integration for quick deployment on the platform's Kubernetes cluster. This repo only serves for testing purposes until I'm further inspired :)

# Okteto promises

### Realistic development environments
Your development container reuses the same variables, secrets, sidecars, volumes, etc as your original deployment.

### Replicability
Eliminates the need to install your dependencies locally, everything is pre-configured in your development image.

### Previews for everyone
Okteto is the easiest and fastest way to get sharable preview environments with each pull request.

# Features
- UI => React.js
- API => Node.js
- Data => PSQL

# Requirements

- [Node.js](https://nodejs.org/en/).
- [Okteto CLI](https://www.okteto.com/docs/getting-started/#installing-okteto-cli).
- [PostgreSQL]() db instance.

# How to run

```
git clone https://github/kabandr/okteto-fullstack-app.git
cd okteto-fullstack-app

```

# Deploy to Okteto Cloud or your Self-Hosted environment

```
Okteto up
```