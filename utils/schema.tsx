import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  templateSlug: varchar("templateSlug").notNull(),
  aiResponse: text("aiResponse"),
  createdBy: varchar("email"),
  createdAt:varchar('createdAt')
});
