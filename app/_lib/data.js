import { supabase } from "./supabase";
// import carFolderMap from "./carFolderMap";

export async function getCars(category) {
  const { data, error } = await supabase
    .from("car-reservation")
    .select("*")
    .eq("category", category);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getCar(name) {
  const { data, error } = await supabase
    .from("car-reservation")
    .select("*")
    .eq("name", name)
    .single();

  if (error) {
    console.error("Error fetching car:", error);
    return null;
  }

  return data;
}

export async function getUser(email) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function createUser(newUser) {
  const { data, error } = await supabase.from("users").insert([newUser]);

  if (error) {
    console.error(error);
    throw new Error("user could not be created");
  }

  return data;
}

// export async function getCarImages( carName ) {
//   console.log(carName)
//   const folderName = carFolderMap[carName];
//   if (!folderName) {
//     console.error("Folder name not found for:", carName);
//     return [];
//   }

//   const { data, error } = await supabase.storage
//     .from("reservation") // replace with your actual bucket name
//     .list(folderName);

//   return data;
// }

export async function getCarImages(folderName) {
  const { data, error } = await supabase.storage
    .from("reservation")
    .list(folderName);

  if (error) {
    console.error("Error listing images:", error.message);
    return [];
  }

  if (!data || data.length === 0) {
    console.warn("No files found in folder:", folderName);
    return [];
  }

  return data.map((file) => ({
    name: file.name,
    url: `https://vogctgeqhxxkabzgxlzu.supabase.co/storage/v1/object/public/reservation/${folderName}/${file.name}`,
  }));
}
