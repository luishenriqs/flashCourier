-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "tracking_number" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "product_type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
