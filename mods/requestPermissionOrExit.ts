/**
 * Explicit request user for deno's permissions. Case permission state is not "granted", it will exit the program. 
 * (If user explicit declare the requests when run deno, it will not request for user)
 * 
 * @param {Deno.PermissionDescriptor} perm
 * @returns 
 */
export const requestPermissionOrExit = async (perm: Deno.PermissionDescriptor) =>
  (await Deno.permissions.request(perm)).state === "granted" || Deno.exit();