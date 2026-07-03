import { GoogleAuth } from 'google-auth-library';
async function test() {
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/cloud-platform'
  });
  const client = await auth.getClient() as any;
  console.log("Email:", client.email);
  console.log("ProjectId:", await auth.getProjectId());
}
test();
