/*
  Warnings:

  - A unique constraint covering the columns `[edges]` on the table `Graph` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nodes]` on the table `Graph` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Graph_edges_key" ON "Graph"("edges");

-- CreateIndex
CREATE UNIQUE INDEX "Graph_nodes_key" ON "Graph"("nodes");
