-- CreateEnum
CREATE TYPE "WageInterval" AS ENUM ('Hourly', 'Yearly');

-- CreateEnum
CREATE TYPE "LocationRequirement" AS ENUM ('In_Office', 'Remote', 'Hybrid');

-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('Junior', 'Mid_Level', 'Senior');

-- CreateEnum
CREATE TYPE "JobListingStatus" AS ENUM ('Draft', 'Published', 'Delisted');

-- CreateEnum
CREATE TYPE "JobListingType" AS ENUM ('Internship', 'Part_Time', 'Full_Time');

-- CreateEnum
CREATE TYPE "ApplicationStage" AS ENUM ('Interested', 'Applied', 'Interviewed', 'Hired', 'Denied');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_listings" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "wage" INTEGER,
    "wage_interval" "WageInterval" NOT NULL DEFAULT 'Yearly',
    "state_abbreviation" TEXT,
    "city" TEXT,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "location_requirement" "LocationRequirement" NOT NULL DEFAULT 'In_Office',
    "experience_level" "ExperienceLevel" NOT NULL DEFAULT 'Junior',
    "status" "JobListingStatus" NOT NULL DEFAULT 'Draft',
    "type" "JobListingType" NOT NULL DEFAULT 'Full_Time',
    "posted_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "organization_id" TEXT NOT NULL,

    CONSTRAINT "job_listings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" TEXT NOT NULL,
    "cover_letter" TEXT,
    "rating" INTEGER,
    "stage" "ApplicationStage" NOT NULL DEFAULT 'Interested',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "job_listing_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resumes" (
    "file_url" TEXT NOT NULL,
    "file_key" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "ai_summary" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "user_setting_under_organizations" (
    "new_application_email_notifications" BOOLEAN NOT NULL DEFAULT false,
    "minimum_rating" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "organization_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "user_notification_settings" (
    "new_job_email_notifications" BOOLEAN NOT NULL DEFAULT false,
    "ai_prompt" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "job_listings_state_abbreviation_idx" ON "job_listings"("state_abbreviation");

-- CreateIndex
CREATE INDEX "job_listings_status_idx" ON "job_listings"("status");

-- CreateIndex
CREATE INDEX "job_listings_is_featured_idx" ON "job_listings"("is_featured");

-- CreateIndex
CREATE INDEX "job_listings_experience_level_idx" ON "job_listings"("experience_level");

-- CreateIndex
CREATE INDEX "job_listings_location_requirement_idx" ON "job_listings"("location_requirement");

-- CreateIndex
CREATE UNIQUE INDEX "applications_user_id_job_listing_id_key" ON "applications"("user_id", "job_listing_id");

-- CreateIndex
CREATE UNIQUE INDEX "resumes_user_id_key" ON "resumes"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_setting_under_organizations_user_id_organization_id_key" ON "user_setting_under_organizations"("user_id", "organization_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_notification_settings_user_id_key" ON "user_notification_settings"("user_id");

-- AddForeignKey
ALTER TABLE "job_listings" ADD CONSTRAINT "job_listings_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_job_listing_id_fkey" FOREIGN KEY ("job_listing_id") REFERENCES "job_listings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_setting_under_organizations" ADD CONSTRAINT "user_setting_under_organizations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_setting_under_organizations" ADD CONSTRAINT "user_setting_under_organizations_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_notification_settings" ADD CONSTRAINT "user_notification_settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
