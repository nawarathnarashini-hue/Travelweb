Local dev with Docker

1. Requirements: Docker & Docker Compose installed.
2. From the `sitetravel` folder run:

```
docker-compose up -d --build
```

3. Open the site: http://localhost:8000/registration.php (create account) and http://localhost:8000/login.php
4. Access phpMyAdmin: http://localhost:8080 (user: root, password: rootpass)

Notes:
- The database is pre-created as `globetrek_db` (see `docker-compose.yml`).
- Use phpMyAdmin to inspect the `users` table.
- To stop: `docker-compose down`.
