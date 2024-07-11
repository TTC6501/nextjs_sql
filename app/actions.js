"use server";

const { sql } = require("@vercel/postgres");
const { revalidatePath } = require("next/cache");

export const addNewComment = async (prevState ,formValues) => {
  try {
    await sql`INSERT INTO Comments ( Name, Content, CreatedAt) VALUES (${formValues.get(
      "name"
    )}, ${formValues.get("content")}, ${JSON.stringify(new Date())})`;

    revalidatePath("/");
    return "Success";
  } catch (error) {
    console.log({error});
    return `Failed ${JSON.stringify(error)}`;
  }
};
