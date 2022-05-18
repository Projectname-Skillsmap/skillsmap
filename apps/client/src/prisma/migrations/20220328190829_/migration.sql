-- CreateTable
CREATE TABLE "Graph" (
    "level" TEXT NOT NULL,
    "edges" TEXT NOT NULL,
    "nodes" TEXT NOT NULL,

    CONSTRAINT "Graph_pkey" PRIMARY KEY ("level")
);

-- CreateIndex
CREATE UNIQUE INDEX "Graph_level_key" ON "Graph"("level");
