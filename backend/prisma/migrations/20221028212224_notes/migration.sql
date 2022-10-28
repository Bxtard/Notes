-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "categories" TEXT[],
    "role" TEXT NOT NULL DEFAULT 'REGULAR',

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
