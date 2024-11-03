-- CreateTable
CREATE TABLE "test_entity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "test_entity_id_key" ON "test_entity"("id");
