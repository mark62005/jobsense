## ☁️ AWS Deployment Checklist

### Frontend (Next.js)

- [ ] Create AWS Amplify app
- [ ] Connect GitHub repository
- [ ] Configure environment variables
- [ ] Enable auto‑deploy on `main`

### Backend (Express)

- [ ] Create Dockerfile
- [ ] Push image to Amazon ECR
- [ ] Deploy using ECS (Fargate) or EC2
- [ ] Configure load balancer
- [ ] Store secrets in AWS Secrets Manager

### Database

- [ ] Create RDS PostgreSQL instance
- [ ] Enable automated backups
- [ ] Run Prisma migrations
- [ ] Restrict access using VPC security groups

### Observability

- [ ] Enable CloudWatch logging
- [ ] Monitor Inngest workflows
- [ ] Add error tracking (e.g. Sentry)
