
export async function requestPermission(perm: Deno.PermissionDescriptor) {
  const req = await Deno.permissions.request(perm)

  req.state === 'granted' || Deno.exit()
}