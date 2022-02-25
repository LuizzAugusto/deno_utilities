/**
 * Explicit request user for deno's permissions. Case permission state is not "granted", it will exit the program. 
 * (If user explicit declare the requests when run deno, it will not request for user)
 * 
 * @param {Deno.PermissionDescriptor} permissions
 * @returns 
 */
export const getPermissionOrExit = async (permissions) =>
  (await Deno.permissions.request(permissions)).state === "granted" || Deno.exit();