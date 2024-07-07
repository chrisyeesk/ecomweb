-- AlterTable
CREATE SEQUENCE enquiry_id_seq;
ALTER TABLE "Enquiry" ALTER COLUMN "id" SET DEFAULT nextval('enquiry_id_seq');
ALTER SEQUENCE enquiry_id_seq OWNED BY "Enquiry"."id";
