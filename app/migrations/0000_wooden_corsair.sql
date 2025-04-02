CREATE TYPE "public"."job_locations" AS ENUM('remote', 'hybrid', 'on-site');--> statement-breakpoint
CREATE TYPE "public"."job_types" AS ENUM('full-time', 'part-time', 'contract', 'internship', 'freelance', 'temporary');--> statement-breakpoint
CREATE TYPE "public"."salary_ranges" AS ENUM('less-than-50000', '$50,000 - $100,000', '$100,000 - $150,000', '$150,000 - $200,000', '$200,000 - $250,000', '$250,000 - $300,000', '$300,000 - $350,000', '$350,000 - $400,000', '$400,000 - $450,000', '$450,000 - $500,000');--> statement-breakpoint
CREATE TABLE "jobs" (
	"job_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "jobs_job_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"position" text NOT NULL,
	"overview" text NOT NULL,
	"responsability" text,
	"qualifications" text,
	"benefits" text,
	"skills" text,
	"company_name" text NOT NULL,
	"company_url" text NOT NULL,
	"location" text NOT NULL,
	"apply_url" text NOT NULL,
	"job_type" "job_types" NOT NULL,
	"job_location" "job_locations" NOT NULL,
	"salary_range" "salary_ranges" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
