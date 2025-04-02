import { pgTable, bigint, text, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { JOB_TYPES, SALARY_RANGES, JOB_LOCATIONS } from "./constants";

export const jobTypes = pgEnum(
  "job_types",
  JOB_TYPES.map((type) => type.value) as [string, ...string[]]
);
export const salaryRanges = pgEnum("salary_ranges", SALARY_RANGES as [string]);
export const jobLocations = pgEnum(
  "job_locations",
  JOB_LOCATIONS.map((location) => location.value) as [string, ...string[]]
);

export const jobs = pgTable("jobs", {
  job_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  position: text().notNull(),
  overview: text().notNull(),
  responsability: text().notNull(),
  qualifications: text().notNull(),
  benefits: text(),
  skills: text(),
  company_name: text().notNull(),
  company_url: text().notNull(),
  location: text().notNull(),
  apply_url: text().notNull(),
  job_type: jobTypes("job_type").notNull(),
  job_location: jobLocations("job_location").notNull(),
  salary_range: salaryRanges("salary_range").notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow()
});
